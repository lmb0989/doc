import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a as t,o as a}from"./app-B5vaevYP.js";const i="/assets/Snip20211017_2-ByF4vucW.png",r="/assets/Snip20211017_3-C2Ej4JPR.png",l="/assets/Snip20211017_4-DrN2ySAS.png",o="/assets/Snip20211017_5-BwCMB5b0.png",p="/assets/extensiontoolkit-CQygs6GV.png",g="/assets/Snip20211017_6-CngHksaY.png",d="/assets/Snip20211017_7-CgKkx9tr.png",c="/assets/Snip20211017_8-BaPdZaAE.png",h="/assets/Snip20211017_10-DQfqPn6-.png",k={};function u(m,e){return a(),s("div",null,e[0]||(e[0]=[t(`<ul><li><p>代码编辑器：<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>，理论上你用记事本编写代码也没关系，但是目前 ExtendScript 的 debugger 工具只有 VSCode 的 debugger 扩展还在维护。而且用 VSCode 你还可以安装一些 CEP 开发辅助的扩展，例如我开发的 <a href="https://marketplace.visualstudio.com/items?itemName=YuTengjing.adobe-extension-devtools" target="_blank" rel="noopener noreferrer">Adobe Extension Development Tools</a> 和 <a href="https://marketplace.visualstudio.com/items?itemName=YuTengjing.scripting-listener" target="_blank" rel="noopener noreferrer">Scripting Listener</a></p></li><li><p>Debugger： <a href="https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug&amp;ssr=false#review-details" target="_blank" rel="noopener noreferrer">ExtendScript Debugger</a> 是 VSCode 上用于 debug ExtendScript 和 CEP 扩展的 debugger 插件，如果需要向官方反馈这个插件的问题请去：<a href="https://forums.adobeprerelease.com/exmancmd/discussion/160/extendscript-debugger-2-0-beta-3-0-release/p1" target="_blank" rel="noopener noreferrer">forums.adobeprerelease.com</a>，在插件市场的评论区反馈是没用的</p></li></ul><p>vscode安装完成之后，随便新建一个测试文件 demo.js</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>alert(app.documents.length);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接着打开VSCode左侧运行按钮，创建一个启动配置 <strong>launch.json</strong></p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;0.2.0&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;configurations&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;extendscript-debug&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;request&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;launch&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;demo.js&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;program&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;\${workspaceFolder}/demo.js&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;stopOnEntry&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着点击底部 <strong>选择目标应用</strong> 就弹出电脑上安装好的Ps版本</p><figure><a href="https://blog.cutterman.cn/assets/gallery/contents/Snip20211017_2.png" target="_blank" rel="noopener noreferrer"><img src="`+i+'" alt="选择目标应用" tabindex="0" loading="lazy"></a><figcaption>选择目标应用</figcaption></figure><p><a href="https://blog.cutterman.cn/assets/gallery/contents/Snip20211017_2.png" target="_blank" rel="noopener noreferrer">选择目标应用</a></p><figure><a href="https://blog.cutterman.cn/assets/gallery/contents/Snip20211017_3.png" target="_blank" rel="noopener noreferrer"><img src="'+r+'" alt="选择Ps版本" tabindex="0" loading="lazy"></a><figcaption>选择Ps版本</figcaption></figure><p><a href="https://blog.cutterman.cn/assets/gallery/contents/Snip20211017_3.png" target="_blank" rel="noopener noreferrer">选择Ps版本</a></p><p>最后，点击运行，就可以在Ps中看到执行的效果了</p><figure><a href="https://blog.cutterman.cn/assets/gallery/contents/Snip20211017_4.png" target="_blank" rel="noopener noreferrer"><img src="'+l+'" alt="运行脚本" tabindex="0" loading="lazy"></a><figcaption>运行脚本</figcaption></figure><p><a href="https://blog.cutterman.cn/assets/gallery/contents/Snip20211017_4.png" target="_blank" rel="noopener noreferrer">运行脚本</a></p><p>如果你的脚本执行有错误，它能够直接定位到对应的行，并且输出一些上下文，和传统的前端调试差不多</p><figure><a href="https://blog.cutterman.cn/assets/gallery/contents/Snip20211017_5.png" target="_blank" rel="noopener noreferrer"><img src="'+o+'" alt="错误提示" tabindex="0" loading="lazy"></a><figcaption>错误提示</figcaption></figure><p><a href="https://blog.cutterman.cn/assets/gallery/contents/Snip20211017_5.png" target="_blank" rel="noopener noreferrer">错误提示</a></p><p>你还可以在你的编辑器中设置断点，进行JSX脚本的单步调试，你通过 $.write() 打印的内容，会在底部的Console中进行输出，非常好用。总体来说，<strong>ExtendScript Debugger</strong> 是Adobe希望用来替代老旧的那款ExtensionScript编辑器 ExtensionToolkit</p><p>然而……然而……</p><p>Adobe一如既往的尿性，这个项目也停止维护更新了，最后一次升级是在2019年7月，这个插件还是存在很多Bug，稳定性也一版，经常不不动，就连不上Ps了，这个时候，可能可以通过重启Ps/VSCode/电脑等来恢复链接状态</p><h3 id="_2-extendscript-toolkit" tabindex="-1"><a class="header-anchor" href="#_2-extendscript-toolkit"><span>2. ExtendScript Toolkit</span></a></h3><p>这是早期Adobe提供的用于开发调试ExtensionScript的开发工具，支持代码编写，断点调试等特性</p><figure><a href="https://blog.cutterman.cn/assets/gallery/contents/extensiontoolkit.png" target="_blank" rel="noopener noreferrer"><img src="'+p+'" alt="Extension Toolkit" tabindex="0" loading="lazy"></a><figcaption>Extension Toolkit</figcaption></figure><p><a href="https://blog.cutterman.cn/assets/gallery/contents/extensiontoolkit.png" target="_blank" rel="noopener noreferrer">Extension Toolkit</a></p><p>功能不太多，基本够用，应该是目前比较常用的JSX脚本调试工具。</p><p>然而……然而……</p><p>这个产品也一样不升级维护了，由于是32位的程序，目前在最新版本的Mac系统上已经无法安装了，于我这样的Mac常驻开发者而言，就非常忧伤</p><h3 id="_3-padda" tabindex="-1"><a class="header-anchor" href="#_3-padda"><span>3. Padda</span></a></h3><p>由于，上面的2款工具，第二款我的Mac用不了，第一款呢有特别不稳定，对于时不时要测试JSX脚本的我，决定自己开发一个……</p><figure><a href="https://blog.cutterman.cn/assets/gallery/contents/Snip20211017_6.png" target="_blank" rel="noopener noreferrer"><img src="'+g+'" alt="Padda" tabindex="0" loading="lazy"></a><figcaption>Padda</figcaption></figure><p><a href="https://blog.cutterman.cn/assets/gallery/contents/Snip20211017_6.png" target="_blank" rel="noopener noreferrer">Padda</a></p><p>这是一款运行在Ps上的插件，它内置了一个简易的文本编辑器，可以让你写Jsx代码，并立刻运行拿到结果。 我在日常开发插件产品的时候，经常需要在Ps上测试一段小脚本，看看是否工作是否正常，这时候就可以把代码贴到这个编辑器里头，直接运行就可以了。底部的输出窗口会显示当前脚本的执行状态和最后输出结果。</p><figure><a href="https://blog.cutterman.cn/assets/gallery/contents/Snip20211017_7.png" target="_blank" rel="noopener noreferrer"><img src="'+d+'" alt="output" tabindex="0" loading="lazy"></a><figcaption>output</figcaption></figure><p><a href="https://blog.cutterman.cn/assets/gallery/contents/Snip20211017_7.png" target="_blank" rel="noopener noreferrer">output</a></p><p>如果代码执行有错误，输出窗口会显示报错的行和一些基本的错误提示</p><figure><a href="https://blog.cutterman.cn/assets/gallery/contents/Snip20211017_8.png" target="_blank" rel="noopener noreferrer"><img src="'+c+'" alt="Error" tabindex="0" loading="lazy"></a><figcaption>Error</figcaption></figure><p><a href="https://blog.cutterman.cn/assets/gallery/contents/Snip20211017_8.png" target="_blank" rel="noopener noreferrer">Error</a></p><p>支持脚本高亮，提供了代码快照功能，就是可以把当前执行的这段代码保存起来，这样当我在测试多段代码之间切换的时候，会非常有用。另外我也会把一些常用的代码片段通过这种方式保存起来，随时调用读取，并修改调试，满意后，再拷贝到我的项目工程当中，非常方便。</p><figure><a href="https://blog.cutterman.cn/assets/gallery/contents/Snip20211017_10.png" target="_blank" rel="noopener noreferrer"><img src="'+h+'" alt="Error" tabindex="0" loading="lazy"></a><figcaption>Error</figcaption></figure><p><a href="https://blog.cutterman.cn/assets/gallery/contents/Snip20211017_10.png" target="_blank" rel="noopener noreferrer">Error</a></p><p>该工具还提供了执行本地脚本文件，读取图层信息，代码快照管理等功能，都是很常见和使用的一些特性。目前该项目在持续维护升级当中，工具免费，代码开源，我会随着日常开发不断往里面迭代功能，如果有小伙伴用得上，欢迎一键三连，想要添加功能的，可以在github上提issue</p>',40)]))}const _=n(k,[["render",u]]),B=JSON.parse('{"path":"/Book/PS%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91/CEP/1.%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"2. ExtendScript Toolkit","slug":"_2-extendscript-toolkit","link":"#_2-extendscript-toolkit","children":[]},{"level":3,"title":"3. Padda","slug":"_3-padda","link":"#_3-padda","children":[]}],"git":{"createdTime":1740538067000,"updatedTime":1742285466000,"contributors":[{"name":"lmb0989","email":"1150274785@qq.com","commits":3}]},"readingTime":{"minutes":7.45,"words":1118},"filePathRelative":"Book/PS插件开发/CEP/1.开发工具.md","localizedDate":"2025年2月26日","excerpt":"<ul>\\n<li>\\n<p>代码编辑器：<a href=\\"https://code.visualstudio.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Visual Studio Code</a>，理论上你用记事本编写代码也没关系，但是目前 ExtendScript 的 debugger 工具只有 VSCode 的 debugger 扩展还在维护。而且用 VSCode 你还可以安装一些 CEP 开发辅助的扩展，例如我开发的 <a href=\\"https://marketplace.visualstudio.com/items?itemName=YuTengjing.adobe-extension-devtools\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Adobe Extension Development Tools</a> 和 <a href=\\"https://marketplace.visualstudio.com/items?itemName=YuTengjing.scripting-listener\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Scripting Listener</a></p>\\n</li>\\n<li>\\n<p>Debugger： <a href=\\"https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug&amp;ssr=false#review-details\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ExtendScript Debugger</a> 是 VSCode 上用于 debug ExtendScript 和 CEP 扩展的 debugger 插件，如果需要向官方反馈这个插件的问题请去：<a href=\\"https://forums.adobeprerelease.com/exmancmd/discussion/160/extendscript-debugger-2-0-beta-3-0-release/p1\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">forums.adobeprerelease.com</a>，在插件市场的评论区反馈是没用的</p>\\n</li>\\n</ul>"}');export{_ as comp,B as data};
