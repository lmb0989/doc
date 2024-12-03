## GitBook命令

#### 安装 GitBook

```bash
npm install gitbook-cli -g
```

#### 查看版本

```bash
gitbook -V
```

#### 初始化

cd到对应目录

```bash
gitbook init
创建 README.md 和 SUMMARY.md 这两个文件
README.md  是说明文档
SUMMARY.md 是章节目录
```

#### 编译

```bash
gitbook build
```

#### 启动服务

```bash
gitbook serve  				包含了gitbook build命令
gitbook serve --port 2333	 指定端口
```

#### 导出

```bash
gitbook pdf ./ ./mybook.pdf			生成 PDF
gitbook epub ./ ./mybook.epub		生成 epub 
gitbook mobi ./ ./mybook.mobi		生成 mobi 
```



## 文件结构

#### SUMMARY.md

```bash
# Summary

### Part I

* [Part I](part1/README.md)
    * [Writing is nice](part1/README.md#writing)
    * [GitBook is nice](part1/README.md#gitbook)
* [Part II](part2/README.md)
    * [We love feedback](part2/README.md#feedback)
    * [Better tools for authors](part2/README.md#tools)
```

#### book.json

````json
{
    "title": "Blankj's Glory",						 本书标题
    "author": "Blankj",								本书作者
    "description": "select * from learn",			  本书描述	
    "language": "zh-hans",							 本书语言，中文设置 "zh-hans" 即可
    "gitbook": "3.2.3",								 指定使用的 GitBook 版本
    "styles": {										自定义页面样式
        "website": "./styles/website.css"
    },
    "structure": {									指定 Readme、Summary、Glossary 和 Languages 对应的文件名
        "readme": "README.md"
    },
    "links": {										在左侧导航栏添加链接信息
        "sidebar": {
            "我的狗窝": "https://blankj.com"
        }
    },
    "plugins": [									配置使用的插件
        "-sharing",
        "splitter",
        "expandable-chapters-small",
        "anchors",

        "github",
        "github-buttons",
        "donate",
        "sharing-plus",
        "anchor-navigation-ex",
        "favicon"
    ],
    "pluginsConfig": {								配置插件的属性
        "github": {
            "url": "https://github.com/Blankj"
        },
        "github-buttons": {
            "buttons": [{
                "user": "Blankj",
                "repo": "glory",
                "type": "star",
                "size": "small",
                "count": true
                }
            ]
        },
        "donate": {									
            "alipay": "./source/images/donate.png",
            "title": "",
            "button": "赞赏",
            "alipayText": " "
        },
        "sharing": {								
            "douban": false,
            "facebook": false,
            "google": false,
            "hatenaBookmark": false,
            "instapaper": false,
            "line": false,
            "linkedin": false,
            "messenger": false,
            "pocket": false,
            "qq": false,
            "qzone": false,
            "stumbleupon": false,
            "twitter": false,
            "viber": false,
            "vk": false,
            "weibo": false,
            "whatsapp": false,
            "all": [
                "google", "facebook", "weibo", "twitter",
                "qq", "qzone", "linkedin", "pocket"
            ]
        },
        "anchor-navigation-ex": {
            "showLevel": false
        },
        "favicon":{													
            "shortcut": "./source/images/favicon.jpg",
            "bookmark": "./source/images/favicon.jpg",
            "appleTouch": "./source/images/apple-touch-icon.jpg",
            "appleTouchMore": {
                "120x120": "./source/images/apple-touch-icon.jpg",
                "180x180": "./source/images/apple-touch-icon.jpg"
            }
        }
    }
}
````



## 忽略文件

 Gitbook 会依次读取 `.gitignore`, `.bookignore` 和 `.ignore` 文件来将一些文件和目录排除

```bash
# 忽略文件
test.md

# 忽略目录
bin/*
```



## 封面

gitbook 的封面可以通过插件[auto cover](https://plugins.gitbook.com/plugin/autocover)自动生成，也可以自己配置。
如果要使用自定义的封面，在书籍的根目录下放置 `cover.jpg`，如果想要缩略图可以放置 `cover_small.jpg`，文件格式必须为 jpg。

一个好的封面需要:
- 大小要求 cover.jpg 1800x2360 pixels , cover_small.jpg 200x262
- 不要有边框
- 有清晰的标题
- 任何小的标题需要清晰可见
