## CocosCreator Shader模板

- ### 结构

  shader描述（pass 描述， 属性列表）

  vert shader实现，着色shader实现

- ### shader顶点数据来源

  1. 从渲染管道中获取 【attribute】
  2. 从CPU传递 【uniform】
  3. 顶点shader传递给着色shader 【】

- ### GLSL顶点shader

  **attribute：**从渲染管道获取的数据给顶点shader

  **uniform：**从CPU传递给shader的数据

  **varying：**由顶点shader ---> 着色shader **（顶点shader定义一次，着色shader也要定义一次）**

  

- ### GLSL着色Shader



### GLSL 数据定义

精度：（高highp，中mediump，低lowp）

>参考：https://www.bilibili.com/video/BV1kE41197Zs?p=5