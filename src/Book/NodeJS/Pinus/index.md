## 简介

pinus是网易推出的一个基于Node.js的分布式水平扩展游戏服务器轻量级强大框架

## 使用方法

```bash
# 初始化
mkdir dirName
cd dirName
pinus init.

# 安装依赖包
sh npm-install.sh 	# linux 环境
npm-install.bat		# windows 环境
```

## 启动项目

```bash
# 启动game-server服务器
pinus start [development | production] [--daemon] 	
# 开发环境则选择development参数（默认值，可不填），如果是产品环境则必须选择production参数
# 项目默认是前台运行，若想后台运行项目，请选择参数"--daemon"
```

## 服务器状态查看

```bash
pinus list

# 服务器状态可以查看6种状态信息：
# * serverId：服务器的serverId，同config配置表中的id。
# * serverType：服务器的serverType，同config配置表中的type。
# * pid：服务器对应的进程pid。
# * headUsed：该服务器已经使用的堆大小（单位：兆）。
# * uptime：该服务器启动时长（单位：分钟）。
```

## 关闭项目

**方式1：**

```bash
pinus stop [serverId]		# 优雅地关闭各个服务器
```

具有以下特点：

* 前端服务器首先断开连接，阻止新玩家进入游戏，用户体验好。
* 各服务器按顺序关闭自身的功能，保证游戏逻辑正常。
* 玩家状态等信息及时写入数据库，保证数据的完整性。

`pinus stop id` 会关闭特定服务器，该命令需在项目根目录下进行。由于关闭特定服务器会导致服务器状态信息等丢失，所以建议首先做好该服务器状态信息的维护和备份等工作。

**方式2：**

```bash
pinus kill [--force]
```

该方式直接kill掉项目进程，比较粗暴，安全性低，开发环境下可以使用，产品环境慎用。如果还有残留进程杀不干净可使用--force参数。 

## 动态添加服务器

```bash
pinus add host=[host] port=[port] id=[id] serverType=[serverType]
```

添加的参数必须包括服务器ip地址(host),服务器端口号(port)，服务器标识(id)，服务器类型(serverType)。

- **目前只支持后端服务器的动态添加**

- **该命令需在项目的根目录下使用**



## 安装管理控制台

>git clone https://github.com/node-pinus/pinus-admin-web.git

>cd pinus-admin-web

>npm install -d

>node app

如果你的linux系统未安装sysstat， 先执行以下命令

>apt-get install sysstat

浏览器中访问： http://localhost:7001， 就可以打开管理控制台界面。
如果端口有冲突，请在config/admin.json修改端口，访问的浏览器必须支持websocket，推荐使用chrome。系统默认是将监控禁掉了，如果需要开启可以在game-server/app.js配置app.enable('systemMonitor')，具体可以参考lordofpinus源码。



## production环境背景知识

production环境下，如果游戏服务器各进程运行在多服务器上，则各服务器需支持ssh agent forward， 并且项目在所有服务器里的目录是一致的。
