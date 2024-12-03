# javascript-obfuscator简介

## 介绍

javascript-obfuscator是一个免费开源的JavaScript代码混淆工具，它功能强大，可以把你的源代码变得“面目全非”，完全没有可读性。还具有部分防调试功能，给JavaScript代码多一层保护。

它支持很多流行的前端打包工具，如Webpack、Gulp、Grunt等都有相应的插件。本文为保持简单，以单独的命令行版本示例

## 安装

```bash
npm install javascript-obfuscator -g
```

## 命令

```bash
查看版本
javascript-obfuscator -v

默认混淆
javascript-obfuscator a.js
```

## 配置

```bash
controlFlowFlattening = false 	# 默认
# 设为 true，表示开启代码控制流展平，这是源代码的一种结构转换，使代码增大且变得难以理解

controlFlowFlatteningThreshold = [0, 1] 	#取值从0到1，如果为0等同于 controlFlowFlattening为false
# 和 controlFlowFlattening配合，表示代码控制流展平的概率，此设置对于大代码影响较大，大量的控制流转换会减慢代码速度并增加代码大小。
```

```bash
deadCodeInjection = false		默认
设为true，表示将添加随机废代码到被混淆代码中。
该选项会显著增加代码大小（高达200%）

deadCodeInjectionThreshold = [0, 1]			值范围是从0到1，如果为0等同于 deadCodeInjection为false。
此选项强制启用stringArray选项。
```

```bash
stringArray
删除字符串文字并将其放置在特殊数组中。例如，var m=“Hello World”中的字符串“Hello World”，将被替换为var m=x12c456[0x1]；

stringArrayEncoding
使用 base64或 rc4对stringArray影响的所有字符串文本进行编码，并插入用于在运行时对其进行解码的特殊代码。
此选项会减慢脚本的速度。

stringArrayThreshold = [0, 1]			此设置调整将字符串文本插入stringArray的概率（从0到1）
```



## 示例

一个中等混淆强度的配置选项如下，它会使性能降低约30-50%，代码体积增加约300%

```json

{
    "compact": true,
    "controlFlowFlattening": true,
    "controlFlowFlatteningThreshold": 0.75,
    "deadCodeInjection": true,
    "deadCodeInjectionThreshold": 0.4,
    "debugProtection": false,
    "debugProtectionInterval": false,
    "disableConsoleOutput": true,
    "identifierNamesGenerator": "hexadecimal",
    "log": false,
    "renameGlobals": false,
    "rotateStringArray": true,
    "selfDefending": true,
    "stringArray": true,
    "stringArrayEncoding": "base64",
    "stringArrayThreshold": 0.75,
    "unicodeEscapeSequence": false
}
```

将上述配置选项，保存为文件 `test.json`，并指定输出结果到 `b.js`，输入

```bash
javascript-obfuscator a.js --config test.json --output b.js
```

上面命令表示， `javascript-obfuscator`将会使用`test.json`指定的配置，对 `a.js` 执行混淆，结果输出到 `b.js`



- ### 官方推荐的三种配置

  * #### 1.性能将比没有混淆的情况下慢50-100%

    ```json
    {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 1,
        debugProtection: true,
        debugProtectionInterval: true,
        disableConsoleOutput: true,
        identifierNamesGenerator: 'hexadecimal',
        log: false,
        renameGlobals: false,
        rotateStringArray: true,
        selfDefending: true,
        stringArray: true,
        stringArrayEncoding: 'rc4',
        stringArrayThreshold: 1,
        transformObjectKeys: true,
        unicodeEscapeSequence: false
    }
    ```

    * #### 2.性能将比没有混淆的情况下降低30-35%

    ```json
    {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.4,
        debugProtection: false,
        debugProtectionInterval: false,
        disableConsoleOutput: true,
        identifierNamesGenerator: 'hexadecimal',
        log: false,
        renameGlobals: false,
        rotateStringArray: true,
        selfDefending: true,
        stringArray: true,
        stringArrayEncoding: 'base64',
        stringArrayThreshold: 0.75,
        transformObjectKeys: true,
        unicodeEscapeSequence: false
    }
    ```
    
    * #### 3.性能会比没有混淆的情况稍微慢一些

    ```json
    {
        compact: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        debugProtection: false,
        debugProtectionInterval: false,
        disableConsoleOutput: true,
        identifierNamesGenerator: 'hexadecimal',
        log: false,
        renameGlobals: false,
        rotateStringArray: true,
        selfDefending: true,
        stringArray: true,
        stringArrayEncoding: false,
        stringArrayThreshold: 0.75,
        unicodeEscapeSequence: false
    }
    ```
    
      


## 更多详解请参考

> https://www.npmjs.com/package/javascript-obfuscator