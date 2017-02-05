const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

gulp.task('build-css', function() {
  return gulp.src('source/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(gulp.dest('public/assets/stylesheets'));
});

gulp.task('serve', ['build-css'], function() {
  browserSync.init({
    proxy: "localhost/webshop"
  });
  gulp.watch('source/scss/**/*.scss', ['build-css']);
  gulp.watch('public/*.html').on('change', browserSync.reload);
});
gulp.task('watch', ['serve']);
