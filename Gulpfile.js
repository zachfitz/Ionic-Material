/* Required
=========================================*/
var gulp = require('gulp'),
    // sass = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload');

/* JS
=========================================*/
gulp.task('js', function() {
    var src = [
        './src/js/ionic.material.motion.js',
        './src/js/ionic.material.ink.js'
    ];
    return gulp.src(src)
        .pipe(concat('ionic.material.js'))
        .pipe(uglify())
        .pipe(rename('ionic.material.min.js'))
        .pipe(gulp.dest('./'));
});

/* Styles
=========================================*/
gulp.task('styles', function() {
    var src = [
        './src/css/directives/*.css',
        './src/css/elements/*.css',
        './src/css/helpers/*.css',
        './src/css/motion/*.css',
        './src/css/overrides/*.css'
    ];
    return gulp.src(src)
        .pipe(concat('ionic.material.css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(rename('ionic.material.min.css'))
        .pipe(gulp.dest('./'));
});

/* Run Tasks
=========================================*/
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['./*.js', '!./src/js/'], ['js']);
    gulp.watch('./*.css', ['styles']);
});

gulp.task('default', ['js', 'styles', 'watch'], function() {});
