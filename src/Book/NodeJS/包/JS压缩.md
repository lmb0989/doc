# UglifyJS

UglifyJS是个包含JS解释器、代码最小化、压缩、美化的工具集，是前端开发打包的最常用工具之一

### 安装

```bash
npm install uglify-js -g
```

### 用法

```bash
uglifyjs [input files] [options]
```

options

+  **-o 输出** 

+ **-c 压缩**

+ **-m 混淆**

### 压缩多个文件到一个文件

```bash
uglifyjs copy.js copy2.js -m -c -o min.js
```

