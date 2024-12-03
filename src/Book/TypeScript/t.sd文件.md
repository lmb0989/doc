

# 1.使用@type

在 Typescript 2.0 之后，TypeScript 将会默认的查看 ./node_modules/@types 文件夹，自动从这里来获取模块的类型定义，当然了，你需要独立安装这个类型定义。比如：

```bash
npm install --save @types/core-js
npm install --save-dev @types/node
```

对于内建模块，安装一个@types/node模块可以整体解决模块的声明文件问题。那么，对于浩如烟海的第三方模块，该怎么办呢？官方和社区中也提供了查找和安装的渠道：

- [typings](https://github.com/typings/typings)
- [DefinitelyTyped](http://definitelytyped.org/)
- [TypeSearch](http://microsoft.github.io/TypeSearch/)

# 2.使用Typings

已弃用

## 安装

```bash
cnpm i typings -g
```

## 初始化

```bash
typings init
```

## 搜索模块

```bash
typings search module
```

## 查找模块

```bash
typings search --name module
```

## 安装模块

```bash
typings install module --save
```

## 使用数据源为dt安装

```bash
typings install dt~module --global --save

其他数据源安装
typings install env~module --global --save
typings install npm~module --save
```



>**数据源**
>
>```bash
>npm - dependencies from NPM
>github - dependencies directly from GitHub (E.g. Duo, JSPM)
>bower - dependencies from Bower
>common - "standard" libraries without a known "source"
>shared - shared library functionality
>lib - shared environment functionality (mirror of shared) (--global)
>env - environments (E.g. atom, electron) (--global)
>global - global (window.<var>) libraries (--global)
>dt - typings from DefinitelyTyped (usually --global)
>```

## 显示所有引用

```bash
cat typings/index.d.ts
```

- http://microsoft.github.io/TypeSearch/)