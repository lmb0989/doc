import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as s,o as h}from"./app-BUawuwG7.js";const l={};function o(i,e){return h(),r("div",null,e[0]||(e[0]=[s('<h2 id="cocoscreator-shader模板" tabindex="-1"><a class="header-anchor" href="#cocoscreator-shader模板"><span>CocosCreator Shader模板</span></a></h2><ul><li><h3 id="结构" tabindex="-1"><a class="header-anchor" href="#结构"><span>结构</span></a></h3><p>shader描述（pass 描述， 属性列表）</p><p>vert shader实现，着色shader实现</p></li><li><h3 id="shader顶点数据来源" tabindex="-1"><a class="header-anchor" href="#shader顶点数据来源"><span>shader顶点数据来源</span></a></h3><ol><li>从渲染管道中获取 【attribute】</li><li>从CPU传递 【uniform】</li><li>顶点shader传递给着色shader 【】</li></ol></li><li><h3 id="glsl顶点shader" tabindex="-1"><a class="header-anchor" href="#glsl顶点shader"><span>GLSL顶点shader</span></a></h3><p>**attribute：**从渲染管道获取的数据给顶点shader</p><p>**uniform：**从CPU传递给shader的数据</p><p>**varying：**由顶点shader ---&gt; 着色shader <strong>（顶点shader定义一次，着色shader也要定义一次）</strong></p></li><li><h3 id="glsl着色shader" tabindex="-1"><a class="header-anchor" href="#glsl着色shader"><span>GLSL着色Shader</span></a></h3></li></ul><h3 id="glsl-数据定义" tabindex="-1"><a class="header-anchor" href="#glsl-数据定义"><span>GLSL 数据定义</span></a></h3><p>精度：（高highp，中mediump，低lowp）</p><blockquote><p>参考：<a href="https://www.bilibili.com/video/BV1kE41197Zs?p=5" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1kE41197Zs?p=5</a></p></blockquote>',5)]))}const d=a(l,[["render",o],["__file","CocosCreator Shader.html.vue"]]),c=JSON.parse('{"path":"/Book/%E6%B8%B8%E6%88%8F/CocosCreator/shader/CocosCreator%20Shader.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"CocosCreator Shader模板","slug":"cocoscreator-shader模板","link":"#cocoscreator-shader模板","children":[{"level":3,"title":"GLSL 数据定义","slug":"glsl-数据定义","link":"#glsl-数据定义","children":[]}]}],"git":{"createdTime":1733216180000,"updatedTime":1733216180000,"contributors":[{"name":"lmb0989","email":"1150274785@qq.com","commits":1}]},"readingTime":{"minutes":0.89,"words":134},"filePathRelative":"Book/游戏/CocosCreator/shader/CocosCreator Shader.md","localizedDate":"2024年12月3日","excerpt":"<h2>CocosCreator Shader模板</h2>\\n<ul>\\n<li>\\n<h3>结构</h3>\\n<p>shader描述（pass 描述， 属性列表）</p>\\n<p>vert shader实现，着色shader实现</p>\\n</li>\\n<li>\\n<h3>shader顶点数据来源</h3>\\n<ol>\\n<li>从渲染管道中获取 【attribute】</li>\\n<li>从CPU传递 【uniform】</li>\\n<li>顶点shader传递给着色shader 【】</li>\\n</ol>\\n</li>\\n<li>\\n<h3>GLSL顶点shader</h3>\\n<p>**attribute：**从渲染管道获取的数据给顶点shader</p>\\n<p>**uniform：**从CPU传递给shader的数据</p>\\n<p>**varying：**由顶点shader ---&gt; 着色shader <strong>（顶点shader定义一次，着色shader也要定义一次）</strong></p>\\n</li>\\n<li>\\n<h3>GLSL着色Shader</h3>\\n</li>\\n</ul>"}');export{d as comp,c as data};