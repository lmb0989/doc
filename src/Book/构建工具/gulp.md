## 介绍

与grunt功能类似的项目构建工具，也是基于NodeJS的自动任务运行器

能自动化完成JavaScript/coffee/less/html/image/css等文件的合并、压缩、检查、监听文件变化、浏览器自动刷新、测试等任务

gulp更高效（异步多任务），更易于使用，插件高质量

## 安装

```
局部安装
npm install gulp --save -dev

全局安装
npm install gulp -g
```

查看版本

```
gulp -v
```



## 创建gulpfile.js

```javascript
const gulp = require("gulp")

// 创建任务
gulp.task("taskName", () => {})

// 找到源文件路径
gulp.src()

// 找到目的文件路径（如何文件不存在，则自动创建
gulp.dest()

// 管道
pipe()
```

#### 示例：

```JavaScript
// 整理HTML文件
gulp.task("copy-html", () => {
    return gulp.src("index.html").pipe(gulp.dest("dist/index.html"))
})

// 执行命令
// gulp copy-html
```

```javascript
// 复制图片
gulp.task("copy-image", () => {
    // return gulp.src("img/*.jpg").pipe(gulp.dest("dist/images"))
    // return gulp.src("img/*.{jpg,png}").pipe(gulp.dest("dist/images"))
    return gulp.src("img/*.png").pipe(gulp.dest("dist/images"))		// 复制仅img目录下所有png图片
    return gulp.src("img/**/*.png").pipe(gulp.dest("dist/images"))	// 递归复制img目录下所有png图片
    return gulp.src("img/*/*").pipe(gulp.dest("dist/images"))	// 复制所有文件
})
```

```javascript
// 拷贝多个文件到一个目录中
gulp.task("data", () => {
    // !表示剔除某个文件
    return gulp.src(["dirName/*.txt", "dirName/*.png", "!dirName/xx.png"].pipe(gulp.dest("dist/dirName")) 
})
```

```JavaScript
// 一次性执行多个任务
gulp.task("build", ["copy-html", "data"], () => {
    console.log("任务执行完毕");
})
```

监听

```javascript
gulp.task("watch", () => {
    // 第一个参数 是文件监听的路径
    // 第二个参数 是要去执行的任务
	gulp.watch("index.html", ["copy-html"]);
    gulp.watch("img/*/*", ["copy-image"]);
})

// 执行命令
// gulp watch
```

## 插件

+ gulp-connect

```javascript
// 启动一个服务器
const connect = require("gulp-connect");
gulp.task("server", () => {
    connect.server({
        root: "rootName",		// 设置根目录
        port: 8888,
        livereload: true		// 启动实时刷新
    })
})

gulp.task("data", () => {
    // !表示剔除某个文件
    return gulp.src(["dirName/*.txt", "dirName/*.png", "!dirName/xx.png"]
          .pipe(gulp.dest("dist/dirName")) 
		 .pipe(connect.reload())
})
```

+ gulp-concat： 合并文件（js/css)
+ gulp-uglify： 压缩js文件
+ gulp-rename：文件重命名