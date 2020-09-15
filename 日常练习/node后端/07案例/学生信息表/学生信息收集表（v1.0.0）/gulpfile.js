const gulp = require('gulp');
// css任务
const csso = require('gulp-csso');
// JS任务
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// css压缩
gulp.task('cssmin', () => {
    gulp.src('./public/css/*.css')
        .pipe(csso())
        .pipe(gulp.dest('dist/public/css'));
})
// js转换 压缩
gulp.task('jsmin', () => {
    gulp.src('./public/js/*.js')
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: ['@babel/transform-runtime']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/public/js'));
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
    gulp.src('./view/*.art')
        .pipe(gulp.dest('dist/view'));
    gulp.src('./*.json')
        .pipe(gulp.dest('dist'));
    gulp.src('./config.js')
        .pipe(gulp.dest('dist'));
})

// 执行多项任务
gulp.task('default', gulp.parallel('cssmin', 'jsmin', 'copy'));