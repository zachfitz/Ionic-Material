var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');


gulp.task('default', ['sass', 'js']);


gulp.task('sass', function(done) {
  gulp.src('./ion-md-input.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
    .pipe(gulp.dest('./demo/www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./css/'))
    .pipe(gulp.dest('./demo/www/css/'))
    .on('end', done);
});


gulp.task('js', function () {
  return gulp.src('./ion-md-input.js')
  .pipe(ngAnnotate())
  .pipe(gulp.dest('./js'))
  .pipe(gulp.dest('./demo/www/js'))

  .pipe(uglify())
  .pipe(rename({
    extname: '.min.js'
  }))
  .pipe(gulp.dest('./js'))
  .pipe(gulp.dest('./demo/www/js'));
});
