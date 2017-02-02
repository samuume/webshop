const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.taks('build-css', function() {
  return gulp.src('source/scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(gulp.dest('public/assets/stylesheets'));
});
gulp.task('watch', function() {

});
