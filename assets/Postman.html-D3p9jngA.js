import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as n,o as t}from"./app-B5vaevYP.js";const i="/assets/20181030002023904-A8XThuff.png",o="/assets/20180523232921542-DKboqyJw.png",p="/assets/20180523233825152-laeA4IxS.png",r="/assets/20180523234132434-CxDW0mHF.png",l="/assets/20180523234247147-DAxm2uGo.png",m="/assets/20180524000345232-CCbHYRlP.png",c="/assets/20180523234739215-hIYStm4X.png",d="/assets/20180523234748383-B7Fmsuvc.png",h="/assets/2018052400054291-B3CakM_j.png",g="/assets/20180524000901598-Dc9GMSCQ.png",u="/assets/20180524001010654--xfsbPX2.png",b="/assets/20180524001252769-D7emU9hU.png",k="/assets/2018052400150515-VCFrWqWS.png",f="/assets/2018052400243724-3hNPotvf.png",_="/assets/20180524002002823-Byaeeoga.png",v="/assets/20180524002857320-BvvdzkAI.png",P="/assets/20180524002953353-BXUlcsDA.png",A="/assets/20180524003120219-K7zwGwX6.png",w={};function x(y,a){return t(),e("div",null,a[0]||(a[0]=[n('<h2 id="postman使用详解" tabindex="-1"><a class="header-anchor" href="#postman使用详解"><span>Postman使用详解</span></a></h2><h3 id="一、postman背景介绍" tabindex="-1"><a class="header-anchor" href="#一、postman背景介绍"><span>一、Postman背景介绍</span></a></h3><p>用户在开发或者调试网络程序或者是网页B/S模式的程序的时候是需要一些方法来跟踪网页请求的，用户可以使用一些网络的监视工具比如著名的Firebug等网页调试工具。今天给大家介绍的这款网页调试工具不仅可以调试简单的css、html、脚本等简单的网页基本信息，它还可以发送几乎所有类型的HTTP请求！Postman在发送网络HTTP请求方面可以说是Chrome插件类产品中的代表产品之一。</p><h3 id="二、postman的操作环境" tabindex="-1"><a class="header-anchor" href="#二、postman的操作环境"><span>二、Postman的操作环境</span></a></h3><p>postman适用于不同的操作系统，Postman Mac、Windows X32、Windows X64、Linux系统，还支持postman 浏览器扩展程序、postman chrome应用程序等。</p><p>Postman使用参考文档：</p><p>1.<a href="https://www.getpostman.com/docs/v6/" target="_blank" rel="noopener noreferrer">官方英文文档</a><br> 2.chrome插件整理的 <a href="http://chromecj.com/web-development/2017-12/870.html" target="_blank" rel="noopener noreferrer">postman中文使用教程</a></p><h3 id="三、postman下载安装" tabindex="-1"><a class="header-anchor" href="#三、postman下载安装"><span>三、Postman下载安装</span></a></h3><p>1&gt; 、postman下载地址：</p><p>1.<a href="https://app.getpostman.com/app/download/osx64?utm_source=site&amp;utm_medium=apps&amp;utm_campaign=macapp&amp;_ga=2.21151352.2119858274.1527039878-1088353859.1527039878" target="_blank" rel="noopener noreferrer">Postman for MAC</a></p><p>2.<a href="https://app.getpostman.com/app/download/win64?_ga=2.201562513.1250696341.1530543681-1582181135.1530543681" target="_blank" rel="noopener noreferrer">Postman for windows X64</a></p><p>3.<a href="https://app.getpostman.com/app/download/win32?_ga=2.21151352.2119858274.1527039878-1088353859.1527039878" target="_blank" rel="noopener noreferrer">Postman for windows X86</a></p><p>4.<a href="https://app.getpostman.com/app/download/linux64?_ga=2.96050783.2119858274.1527039878-1088353859.1527039878" target="_blank" rel="noopener noreferrer">Postman for linux X64</a></p><p>5.<a href="https://app.getpostman.com/app/download/linux32?_ga=2.96050783.2119858274.1527039878-1088353859.1527039878" target="_blank" rel="noopener noreferrer">Postman for Linux X86</a></p><p>2&gt;. Postman官网下载地址：</p><p><a href="https://www.getpostman.com/apps" target="_blank" rel="noopener noreferrer">https://www.getpostman.com/apps</a></p><p>3.Postman安装</p><p>postman的安装方法分好几种，按照我们上文介绍的那样，我们分为三种安装模式介绍：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1、chrome浏览器postman 插件安装</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>postman谷歌浏览器的安装插件，所以说它的使用前提是你的电脑上得安装谷歌浏览器才行，在安装了谷歌浏览器后还需要在谷歌网上应用店中下载所需要的Postman插件，该插件的下载方式如下：</p><figure><img src="'+i+`" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><p>不能访问google 应用上商店的朋友 可以 <a href="https://www.cnblogs.com/zqyanywn/p/6947051.html" target="_blank" rel="noopener noreferrer">参考这里</a>， 或者下载客户端版本</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>2.Postman电脑客户端安装</span></span>
<span class="line"><span>1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>1).macOS安装<br> 一旦你下载的应用程序，你可以拖动文件到“应用程序”文件夹。 双击Postman打开应用程序。</p><p>2).Windows安装<br> 下载安装文件<br> 运行安装程序<br> 3). Linux安装<br> 我没有试过，但是找了一些参考资料( 有兴趣的朋友可以自行实验)<br> ubuntu安装postman: <a href="https://blog.csdn.net/qianmosolo/article/details/79353632" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qianmosolo/article/details/79353632</a><br> Ubuntu16.04上安装Postman应用程序: <a href="https://blog.bluematador.com/posts/postman-how-to-install-on-ubuntu-1604/?utm_source=hootsuite&amp;utm_medium=twitter&amp;utm_campaign=" target="_blank" rel="noopener noreferrer">https://blog.bluematador.com/posts/postman-how-to-install-on-ubuntu-1604/?utm_source=hootsuite&amp;utm_medium=twitter&amp;utm_campaign=</a></p><h3 id="四、postman的基础功能" tabindex="-1"><a class="header-anchor" href="#四、postman的基础功能"><span>四、Postman的基础功能</span></a></h3><figure><img src="`+o+`" alt="这里写图片描述" tabindex="0" loading="lazy"><figcaption>这里写图片描述</figcaption></figure><h3 id="五、接口请求流程" tabindex="-1"><a class="header-anchor" href="#五、接口请求流程"><span>五、接口请求流程</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1. GET 请求</span></span>
<span class="line"><span>GET请求：点击Params，输入参数及value，可输入多个，即时显示在URL链接上，</span></span>
<span class="line"><span>所以，GET请求的请求头与请求参数如在接口文档中无特别声明时，可以不填。</span></span>
<span class="line"><span>123</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt="这里写图片描述" loading="lazy"><br> 响应 示例： 这里会有请求的响应状态码，响应时间，以及响应大小<br><img src="'+r+'" alt="这里写图片描述" loading="lazy"><br> 响应体示例： 响应的格式可以有多种，我这里由于请求的是 百度，so, 响应的是 html ,<br> 一般情况下，我们自定义接口的话是 json格式的响应体</p><figure><img src="'+l+`" alt="这里写图片描述" tabindex="0" loading="lazy"><figcaption>这里写图片描述</figcaption></figure><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>2. POST请求</span></span>
<span class="line"><span>POST请求一：表单提交</span></span>
<span class="line"><span>12</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下图示例中设置了请求方法，请求URL，请求参数，但是没有设置请求头<br> 在我的使用过程中，请求头是根据请求参数的形式自动生成的<br> 请求头中的Content-Type与请求参数的格式之间是有关联关系，比如：</p><figure><img src="`+m+'" alt="这里写图片描述" tabindex="0" loading="lazy"><figcaption>这里写图片描述</figcaption></figure><hr><p><img src="'+c+'" alt="这里写图片描述" loading="lazy"><br><img src="'+d+'" alt="这里写图片描述" loading="lazy"></p><p>POST请求二：json提交<br> 下图中，当我们选择JSON(application/json) 是会自动帮我们设置 headers 为 application/json<br> 在这里就不截图 举例了，朋友们可以自行去查看<br><img src="'+h+'" alt="这里写图片描述" loading="lazy"><br> POST请求三：xml提交<br><img src="'+g+'" alt="这里写图片描述" loading="lazy"><br> POST请求四：二进制文件提交<br><img src="'+u+`" alt="这里写图片描述" loading="lazy"></p><p>其它请求方式如PUT,DELETE 大致流程和GET,POST 差不多，这里就不一一举例说明了</p><h3 id="六、管理用例—collections" tabindex="-1"><a class="header-anchor" href="#六、管理用例—collections"><span>六、管理用例—Collections</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>在POST基础功能那里有一张图片大致说了一下Collections 的作用， 这里我们再详细说明一下</span></span>
<span class="line"><span>1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Collections集合：也就是将多个接口请求可以放在一起，并管理起来。什么样的接口请求可以放在同一个collection里？</p><p>在这里告诉大家可以这样：一个工程一个Collection，这样方便查找及统一处理数据。</p><p><img src="`+b+'" alt="这里写图片描述" loading="lazy"><br><img src="'+k+'" alt="这里写图片描述" loading="lazy"></p><p>第一步, 创建Collections<br> 点击上图中的带+号的图标，输入Name:”abc”，Description:”示例demo”，点击Create按钮即创建成功一个Collections.<br> 第二步，在Collections里添加请求</p><p>在右侧准备好接口请求的所有数据，并验证后，点击save按钮。<br><img src="'+f+'" alt="这里写图片描述" loading="lazy"></p><p>保存好之后就可以在这里看到啦，之后要再次调用时可以点击这里，方便快捷有木有</p><figure><img src="'+_+'" alt="这里写图片描述" tabindex="0" loading="lazy"><figcaption>这里写图片描述</figcaption></figure><p>collections 管理精细化， 这里我们针对不同的请求方式做分组<br> 添加子文件夹<br><img src="'+v+'" alt="这里写图片描述" loading="lazy"></p><figure><img src="'+P+'" alt="这里写图片描述" tabindex="0" loading="lazy"><figcaption>这里写图片描述</figcaption></figure><p>这是我们精细化划分之后的结果， 是不是看着有条理多了？<br><img src="'+A+'" alt="这里写图片描述" loading="lazy"></p><h3 id="七、身份验证authentication" tabindex="-1"><a class="header-anchor" href="#七、身份验证authentication"><span>七、身份验证Authentication</span></a></h3><p>1、Basic Auth</p><p>是基础的验证，所以会比较简单<br> 会直接把用户名、密码的信息放在请求的 Header 中</p><p>2、Digest Auth</p><p>要比Basic Auth复杂的多。使用当前填写的值生成authorization header。所以在生成header之前要确保设置的正确性。如果当前的header已经存在，postman会移除之前的header。</p><p>3、OAuth 1.0</p><p>postman的OAuth helper让你签署支持OAuth</p><p>1.0基于身份验证的请求。OAuth不用获取access token,你需要去API提供者获取的。OAuth 1.0可以在header或者查询参数中设置value。</p><p>4、OAuth 2.0</p><p>postman支持获得OAuth 2.0 token并添加到requests中。</p>',60)]))}const C=s(w,[["render",x]]),F=JSON.parse('{"path":"/Book/%E5%B7%A5%E5%85%B7/Postman.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Postman使用详解","slug":"postman使用详解","link":"#postman使用详解","children":[{"level":3,"title":"一、Postman背景介绍","slug":"一、postman背景介绍","link":"#一、postman背景介绍","children":[]},{"level":3,"title":"二、Postman的操作环境","slug":"二、postman的操作环境","link":"#二、postman的操作环境","children":[]},{"level":3,"title":"三、Postman下载安装","slug":"三、postman下载安装","link":"#三、postman下载安装","children":[]},{"level":3,"title":"四、Postman的基础功能","slug":"四、postman的基础功能","link":"#四、postman的基础功能","children":[]},{"level":3,"title":"五、接口请求流程","slug":"五、接口请求流程","link":"#五、接口请求流程","children":[]},{"level":3,"title":"六、管理用例—Collections","slug":"六、管理用例—collections","link":"#六、管理用例—collections","children":[]},{"level":3,"title":"七、身份验证Authentication","slug":"七、身份验证authentication","link":"#七、身份验证authentication","children":[]}]}],"git":{"createdTime":1733216180000,"updatedTime":1733216180000,"contributors":[{"name":"lmb0989","email":"1150274785@qq.com","commits":1}]},"readingTime":{"minutes":10.23,"words":1534},"filePathRelative":"Book/工具/Postman.md","localizedDate":"2024年12月3日","excerpt":"<h2>Postman使用详解</h2>\\n<h3>一、Postman背景介绍</h3>\\n<p>用户在开发或者调试网络程序或者是网页B/S模式的程序的时候是需要一些方法来跟踪网页请求的，用户可以使用一些网络的监视工具比如著名的Firebug等网页调试工具。今天给大家介绍的这款网页调试工具不仅可以调试简单的css、html、脚本等简单的网页基本信息，它还可以发送几乎所有类型的HTTP请求！Postman在发送网络HTTP请求方面可以说是Chrome插件类产品中的代表产品之一。</p>\\n<h3>二、Postman的操作环境</h3>\\n<p>postman适用于不同的操作系统，Postman Mac、Windows X32、Windows X64、Linux系统，还支持postman 浏览器扩展程序、postman chrome应用程序等。</p>"}');export{C as comp,F as data};
