const gulp = require('gulp');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');

const distPath = './';
var minify = false;

gulp.task('js', function() {
  var src = [
    './src/js/ionic.material.motion.js',
    './src/js/ionic.material.ink.js'
  ];
  var js = gulp.src(src)
    .pipe(concat('ionic.material.js'))
    .pipe(gulp.dest(distPath));

  if (minify) {
    js.pipe(uglify())
    .pipe(rename('ionic.material.min.js'))
    .pipe(gulp.dest(distPath))
  }
  return js;
});

gulp.task('styles', function() {
  var src = [
    './src/css/directives/*.css',
    './src/css/elements/*.css',
    './src/css/helpers/*.css',
    './src/css/motion/*.css',
    './src/css/overrides/*.css'
  ];
  var css = gulp.src(src)
    .pipe(concat('ionic.material.css'))
    .pipe(gulp.dest(distPath))

  if (minify) {
    css.pipe(rename({
      suffix: '.min'
    }))
    .pipe(minifycss())
    .pipe(rename('ionic.material.min.css'))
    .pipe(gulp.dest(distPath));
  }

  return css;
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['./*.js', '!./src/js/'], ['js']);
  gulp.watch('./*.css', ['styles']);
});

gulp.task('build', function () {
  minify = true;
  return gulp.start(['js', 'styles']);
})

gulp.task('default', ['js', 'styles', 'watch'], function() {});
