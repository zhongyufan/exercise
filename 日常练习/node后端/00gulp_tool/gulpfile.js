// 引用gulp模块
const gulp = require('gulp');
// html任务
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
// CSS任务
const less = require('gulp-less');
const csso = require('gulp-csso');
// JS任务
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


// html任务
// 1、抽取html公共代码
// 2、压缩html文件
gulp.task('htmlmin', () => {
    gulp.src('./src/*.html')
        .pipe(fileinclude())
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
})

// css任务
// 1、less语法转换
// 2、压缩css文件
gulp.task('cssmin', () => {
    gulp.src(['./src/css/*.less', './src/css/*.css '])
        // 语法转换
        .pipe(less())
        // css压缩
        .pipe(csso())
        // 文件输出
        .pipe(gulp.dest('dist/css'))
})

// JS任务
// 1、ES6代码转换
// 2、js代码压缩
gulp.task('jsmin', () => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})

// 复制文件夹
gulp.task('copy', () => {
    gulp.src('./src/images/*')
        .pipe(gulp.dest('dist/image'));

    gulp.src('./src/lib/sweetalert/*')
        .pipe(gulp.dest('dist/lib'));
})

// 构建任务
gulp.task('default', gulp.parallel('htmlmin', 'cssmin', 'jsmin', 'copy'));