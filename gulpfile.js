'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect-php');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');

// const images = () => {
//   return gulp.src('assets/images/**/*')
//     .pipe(gulp.dest('assets/images'))
//     .pipe(browserSync.stream());
// };

const siteSass = () => {
  return gulp.src('scss/denali.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(rename('denali.css'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
};

const disconnect = () => {
  connect.closeServer();
};

gulp.task('serve', gulp.series(siteSass, () => {
  connect.server({
    base: '.',
    port: 4000
  }, () => {
    browserSync.init({
      injectChanges: true,
      proxy: '127.0.0.1:4000'
    });
  });

  // gulp.watch('assets/images/**/*', images).on('change', browserSync.reload);
  gulp.watch('scss/**/*.scss', siteSass).on('change', browserSync.reload);
  // gulp.watch('assets/js/*.js').on('change', browserSync.reload);
  gulp.watch('dist/**/*.html').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve', disconnect));
