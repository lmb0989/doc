在使用pinus框架创建的项目中有两个app.js，它们分别在game-server目录和web-server目录下，分别对应游戏服务器与web服务器，并且它们都是运行各自服务器的入口。以下内容主要是针对game-server中的app.js的配置说明。

# 应用入口设置

app.js是运行pinus项目的入口，在使用pinus命令行创建一个新项目时，会根据项目的相关信息生成默认的app.js文件。其主要内容如下：

```javascript
var pinus = require('pinus');
var app = pinus.createApp();

app.set('name', 'nameofproject');

app.start();
```

首先根据pinus创建一个应用；然后会设置应用的名称、最后启动服务，这些配置都是创建一个项目必要条件；最后配置完成后就可以启动项目。

# 设置变量与状态

应用的变量可以通过set和get方法进行存取，例如要存取server对象，具体代码如下：

```javascript
app.set('server',server);
var server = app.get('server');
```

应用的功能选项可以通过enable和disable来打开和关闭；另外，用户可以通过enabled和disabled对相应的状态进行判断，如果该状态存在则返回true,反之返回false。例如要打开或者关闭应用的filter并查看其状态是否存在, 具体代码如下：

```javascript
app.enable('filter');
app.enabled('filter'); //返回true
app.disable('filter');
app.disabled('filter'); //返回true
```

用户可以通过loadConfig加载配置文件，加载后文件中的参数将直接挂载到application对象上。例如需要加载mysql.json文件，具体代码如下：

```json
{
  "development":
    {
      "host":"127.0.0.1",
      "port":"3306",
      "database":"pinus" 
    }
}
```

```javascript
app.loadConfig('mysql.json');
var host = app.mysql.host; //返回 127.0.0.1
```


# app.configure规则

服务器的配置主要由configure()方法完成，完整的app.configure配置参数如下：

```javascript
app.configure([env], [serverType], [function]);
```

前两个参数是可选的， 以下是参数说明：

* env: 运行环境， 可设成development, production或development|production
* serverType: 服务器类型，设置了这个参数只会对当前参数类型服务器做初始化，不设置则对所有服务器执行初始化function 
* function: 具体的初始化操作， 内部可以写任何js方法

以下是一些配置实例：

### 实例一

```javascript
app.configure(function(){
});
```

这种配置将对所有的模式（development/production）下的所有服务器生效。


### 实例二

```javascript
app.configure('development', function(){
});
```

这种配置则只针对development模式下所有服务器生效。

### 实例三

```javascript
app.configure('development', 'chat', function(){
});
```

这种配置则针对development模式下的chat服务器生效。

### 初始内容实例

在configure中用户可以根据应用的不同需求在不同的服务器中进行相关配置，例如在全局设置mysql参数：

```javascript
app.configure('development|production', function(){     app.loadConfig('mysql', app.getBase() + '/config/mysql.json');});
```

另外也可以选择在具体的服务器中进行应用的配置，例如：

```javascript
var initArea = function(){
   //area init
};
app.configure('development|production', 'area', function(){
     initArea();
});
```

# 加载component

component是pinus的组件，它是具有生命周期的应用组件，通常在框架初始化时载入。
pinus自带的component如下：master、monitor、filter、proxy、handler、remote、server、sync和connection，其主要功能如下：

* master： master组件主要负责启动master服务器。
* monitor： monitor组件主要负责启动各个服务器的monitor服务，该服务负责收集服务器的信息并定期向master进行消息推送，保持master与各个服务器的心跳连接。
* proxy：  proxy组件主要负责生成服务器rpc客户端，由于系统中存在多个服务器进程，不同服务器进程之间相互通信需要通过rpc调用（master服务器除外）。
* handler：handler组件主要负责加载前端服务器中的handler目录下的文件。
* filter: filter组件主要负责加载服务器请求的filter服务，包括rpc调用前的filter及rpc调用后的filter。
* remote： remote组件主要负责加载后端服务器的服务并生成服务器rpc服务端。
* server：server组件主要负责启动所有服务器的用户请求处理服务。
* connector: connector组件主要负责启动前端服务器的session服务和接收用户请求。
* sync： sync组件主要负责启动数据同步模块并对外提供数据同步功能。
* connection: connection组件主要负责启动用户连接信息的统计服务。

pinus会默认根据服务器的类型加载不同的组件，另外用户可以根据应用需求自定义组件。组件的加载主要是使用load方法，例如：

```javascript
app.load(pinus.proxy, [options]);  //options参数可选
```


# 配置router

router主要负责路由信息的维护，路由计算，路由结果缓存等工作，并能根据需要切换路由策略，更新路由信息等。用户可以自定义不同服务器的不同路由规则，然后在app.js中进行配置即可。例如为chat服务器配置路由规则：

```javascript
//routeUtil.js
app.route('chat', routeUtil.chat);
```

在routerUtil中可以具体的定义不同服务器的路由规则，例如：

```javascript
routeUtil.chat = function(session, msg, app, callback) {
    var chatServers = app.getServersByType('chat'); 
    if (!chatServers) {
     	callback(new Error('can not find chat servers.'));
		return;
    }
    var server = dispatcher.dispatch(session.rid, chatServers);
    callback(null, server.id);
};
```

在回调函数中返回服务器的id即可，这里使用dispatcher对session.rid进行hash处理从而完成服务器选择。


# 配置filter

当一个客户端请求到达服务器后，经过filter链和handler处理，最后生成响应返回给客户端。handler是业务逻辑实现的地方，filter则是执行业务前进行预处理的地方。为了开发者方便，系统提供了默认的一些filter，例如：serialFilter,timeFilter，timeOutFilter，另外用户可以根据应用的需要自定义filter。filter默认提供的配置类型如下：

* serial： 主要负责保证所有从客户端到服务端的请求能够按顺序地处理。

```javascript
app.filter(pinus.filters.serial());
```

* time： 主要负责记录请求的相应时间。

```javascript
app.filter(pinus.filters.time());
```

* timeOut: 主要负责监控请求响应时间，如果超时就给出警告。

```javascript
app.filter(pinus.filters.timeout());
```


# 完整样例参考

```javascript
var pinus = require('pinus');
var routeUtil = require('./app/util/routeUtil');
/**
 * Init app for client.
 */
var app = pinus.createApp();
app.set('name', 'chatofpinus');
app.defaultConfiguration();

// app configure
app.configure('production|development', function() {
	// route configures
	app.route('chat', routeUtil.chat);
	app.route('connector', routeUtil.connector);
        // remote configures
	app.set('remoteConfig', {
		cacheMsg: true, 
		interval: 30
	});
        // filter configures
	app.filter(pinus.filters.timeout());	
       // mysql configures
        app.loadConfig('mysql', app.get('dirname') + '/config/mysql.json');
});

// start app
app.start();
```