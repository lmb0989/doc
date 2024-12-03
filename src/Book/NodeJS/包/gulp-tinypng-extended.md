# gulp-tinypng-extended简介

## 介绍

对png，jpg图片进行压缩

## 安装

```bash
npm install gulp-tinypng-extended
```

## 示例

```javascript
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var tinypng = require('gulp-tinypng-extended');
 
gulp.task('tinypng', function () {
    return gulp.src('images/src/**/*.{png,jpg,jpeg}')
        .pipe(plumber())
        .pipe(tinypng({
            key: 'API_KEY',
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('images'));
});
```

## 参考

> https://www.npmjs.com/package/gulp-tinypng-extended