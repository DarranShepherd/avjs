var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jasmine = require('gulp-jasmine'),
    es6ModuleTranspiler = require('gulp-es6-module-transpiler');

gulp.task('specs', ['commonjs'], function () {
   return gulp.src('./specs/**/*.js').pipe(jasmine());
});

gulp.task('commonjs', function () {
    return gulp.src('./src/**/*.js')
            .pipe(concat('av.cjs.js'))
            .pipe(es6ModuleTranspiler({ type: 'cjs'}))
            .pipe(gulp.dest('./dist'));
});

gulp.task('amd', function () {
    return gulp.src('./src/**/*.js')
        .pipe(concat('av.amd.js'))
        .pipe(es6ModuleTranspiler({ type: 'amd'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('globals', function () {
    return gulp.src('./src/**/*.js')
        .pipe(concat('av.js'))
        .pipe(es6ModuleTranspiler({ moduleName : 'av' }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['globals', 'commonjs', 'amd', 'specs']);
