const gulp = require('gulp');
// html任务
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
// css任务
const csso = require('gulp-csso');
// JS任务
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// html 抽取公共部分 压缩
gulp.task('htmlmin', () => {
    gulp.src('./views/log/*.html')
        .pipe(fileinclude())
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist/views/log'));
    gulp.src('./views/student/*.html')
        .pipe(fileinclude())
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist/views/student'));
    gulp.src('./views/user/*.html')
        .pipe(fileinclude())
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist/views/user'));
})
// css压缩
gulp.task('cssmin', () => {
    gulp.src('./public/css/*.css')
        .pipe(csso())
        .pipe(gulp.dest('dist/public/css'));
})
// js转换 压缩
gulp.task('jsmin', () => {
    gulp.src('./app.js')
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: ['@babel/transform-runtime']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
    gulp.src('./route/*.js')
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: ['@babel/transform-runtime']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/route'));
    gulp.src('./model/*.js')
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: ['@babel/transform-runtime']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/model'));
})
gulp.task('copy', () => {
    gulp.src('./public/js/*.js')
    .pipe(gulp.dest('dist/public/js'));
    gulp.src('./*.json')
        .pipe(gulp.dest('dist'));
    gulp.src('./config.js')
        .pipe(gulp.dest('dist'));
})

// 执行多项任务
gulp.task('default', gulp.parallel('htmlmin', 'cssmin', 'jsmin', 'copy'));