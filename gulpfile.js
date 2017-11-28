const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

gulp.task('html', () => {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream())
  }
);

gulp.task('stylus', () => (
  gulp.src('./src/index.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream())
));

gulp.task('default', ['html', 'stylus'], () => {
  browserSync.init({ server: './build' });
  gulp.watch('./src/**/*.styl', ['stylus']);
  gulp.watch('./src/**/*.html', ['html']);
});