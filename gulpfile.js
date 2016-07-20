var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');

var sassPath = 'sass/*.scss';
var cssPath = 'css/';

gulp.task('styles', function() {
    gulp.src(sassPath)
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('browser', function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('default', ['styles', 'browser'], function() {
    gulp.watch(sassPath, ['styles']);
});