## Postman使用详解

### 一、Postman背景介绍

用户在开发或者调试网络程序或者是网页B/S模式的程序的时候是需要一些方法来跟踪网页请求的，用户可以使用一些网络的监视工具比如著名的Firebug等网页调试工具。今天给大家介绍的这款网页调试工具不仅可以调试简单的css、html、脚本等简单的网页基本信息，它还可以发送几乎所有类型的HTTP请求！Postman在发送网络HTTP请求方面可以说是Chrome插件类产品中的代表产品之一。

### 二、Postman的操作环境

postman适用于不同的操作系统，Postman Mac、Windows X32、Windows X64、Linux系统，还支持postman 浏览器扩展程序、postman chrome应用程序等。

Postman使用参考文档：

1.[官方英文文档](https://www.getpostman.com/docs/v6/)
2.chrome插件整理的 [postman中文使用教程](http://chromecj.com/web-development/2017-12/870.html)

### 三、Postman下载安装

1> 、postman下载地址：

1.[Postman for MAC](https://app.getpostman.com/app/download/osx64?utm_source=site&utm_medium=apps&utm_campaign=macapp&_ga=2.21151352.2119858274.1527039878-1088353859.1527039878)

2.[Postman for windows X64](https://app.getpostman.com/app/download/win64?_ga=2.201562513.1250696341.1530543681-1582181135.1530543681)

3.[Postman for windows X86](https://app.getpostman.com/app/download/win32?_ga=2.21151352.2119858274.1527039878-1088353859.1527039878)

4.[Postman for linux X64](https://app.getpostman.com/app/download/linux64?_ga=2.96050783.2119858274.1527039878-1088353859.1527039878)

5.[Postman for Linux X86](https://app.getpostman.com/app/download/linux32?_ga=2.96050783.2119858274.1527039878-1088353859.1527039878)

2>. Postman官网下载地址：

https://www.getpostman.com/apps

3.Postman安装

postman的安装方法分好几种，按照我们上文介绍的那样，我们分为三种安装模式介绍：

```
1、chrome浏览器postman 插件安装 
```

postman谷歌浏览器的安装插件，所以说它的使用前提是你的电脑上得安装谷歌浏览器才行，在安装了谷歌浏览器后还需要在谷歌网上应用店中下载所需要的Postman插件，该插件的下载方式如下：

![在这里插入图片描述](.assets/20181030002023904.png)

不能访问google 应用上商店的朋友 可以 [参考这里](https://www.cnblogs.com/zqyanywn/p/6947051.html)， 或者下载客户端版本

```
2.Postman电脑客户端安装
1
```

1).macOS安装
一旦你下载的应用程序，你可以拖动文件到“应用程序”文件夹。 双击Postman打开应用程序。

2).Windows安装
下载安装文件
运行安装程序
3). Linux安装
我没有试过，但是找了一些参考资料( 有兴趣的朋友可以自行实验)
ubuntu安装postman: https://blog.csdn.net/qianmosolo/article/details/79353632
Ubuntu16.04上安装Postman应用程序: https://blog.bluematador.com/posts/postman-how-to-install-on-ubuntu-1604/?utm_source=hootsuite&utm_medium=twitter&utm_campaign=

### 四、Postman的基础功能

![这里写图片描述](.assets/20180523232921542.png)

### 五、接口请求流程

```
1. GET 请求
GET请求：点击Params，输入参数及value，可输入多个，即时显示在URL链接上，
所以，GET请求的请求头与请求参数如在接口文档中无特别声明时，可以不填。
123
```

![这里写图片描述](.assets/20180523233825152.png)
响应 示例： 这里会有请求的响应状态码，响应时间，以及响应大小
![这里写图片描述](.assets/20180523234132434.png)
响应体示例： 响应的格式可以有多种，我这里由于请求的是 百度，so, 响应的是 html ,
一般情况下，我们自定义接口的话是 json格式的响应体

![这里写图片描述](.assets/20180523234247147.png)

```
2. POST请求
POST请求一：表单提交
12
```

下图示例中设置了请求方法，请求URL，请求参数，但是没有设置请求头
在我的使用过程中，请求头是根据请求参数的形式自动生成的
请求头中的Content-Type与请求参数的格式之间是有关联关系，比如：

![这里写图片描述](.assets/20180524000345232.png)

------

![这里写图片描述](.assets/20180523234739215.png)
![这里写图片描述](.assets/20180523234748383.png)

POST请求二：json提交
下图中，当我们选择JSON(application/json) 是会自动帮我们设置 headers 为 application/json
在这里就不截图 举例了，朋友们可以自行去查看
![这里写图片描述](.assets/2018052400054291.png)
POST请求三：xml提交
![这里写图片描述](.assets/20180524000901598.png)
POST请求四：二进制文件提交
![这里写图片描述](.assets/20180524001010654.png)

其它请求方式如PUT,DELETE 大致流程和GET,POST 差不多，这里就不一一举例说明了

### 六、管理用例—Collections

```
在POST基础功能那里有一张图片大致说了一下Collections 的作用， 这里我们再详细说明一下
1
```

Collections集合：也就是将多个接口请求可以放在一起，并管理起来。什么样的接口请求可以放在同一个collection里？

在这里告诉大家可以这样：一个工程一个Collection，这样方便查找及统一处理数据。

![这里写图片描述](.assets/20180524001252769.png)
![这里写图片描述](.assets/2018052400150515.png)

第一步, 创建Collections
点击上图中的带+号的图标，输入Name:”abc”，Description:”示例demo”，点击Create按钮即创建成功一个Collections.
第二步，在Collections里添加请求

在右侧准备好接口请求的所有数据，并验证后，点击save按钮。
![这里写图片描述](.assets/2018052400243724.png)

保存好之后就可以在这里看到啦，之后要再次调用时可以点击这里，方便快捷有木有

![这里写图片描述](.assets/20180524002002823.png)

collections 管理精细化， 这里我们针对不同的请求方式做分组
添加子文件夹
![这里写图片描述](.assets/20180524002857320.png)

![这里写图片描述](.assets/20180524002953353.png)

这是我们精细化划分之后的结果， 是不是看着有条理多了？
![这里写图片描述](.assets/20180524003120219.png)

### 七、身份验证Authentication

1、Basic Auth

是基础的验证，所以会比较简单
会直接把用户名、密码的信息放在请求的 Header 中

2、Digest Auth

要比Basic Auth复杂的多。使用当前填写的值生成authorization header。所以在生成header之前要确保设置的正确性。如果当前的header已经存在，postman会移除之前的header。

3、OAuth 1.0

postman的OAuth helper让你签署支持OAuth

1.0基于身份验证的请求。OAuth不用获取access token,你需要去API提供者获取的。OAuth 1.0可以在header或者查询参数中设置value。

4、OAuth 2.0

postman支持获得OAuth 2.0 token并添加到requests中。