// Plugins
var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	cache = require('gulp-cache')
	cleancss = require('gulp-clean-css'),
	imagemin = require('gulp-imagemin'),
	notify = require('gulp-notify'),
	rename = require('gulp-rename'),
	sass = require('gulp-ruby-sass'),
	server = require('gulp-webserver')

// Compile all the styles
gulp.task('styles', function() {
	return sass('scss/denali-v0.4.2.scss', { style: 'expanded' })
		.pipe(autoprefixer('last 3 versions'))
		.pipe(gulp.dest('dist/css/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(cleancss())
		.pipe(gulp.dest('dist/css/'))
		.pipe(notify({ message: 'Styles task complete' }));
});

// Watch for updates; compile on save
gulp.task('watch', function() {
	// Watch SCSS files
	gulp.watch('scss/**/*.scss', ['styles']);
});

// Server for site
gulp.task('server', function() {
  gulp.src('./dist/')
    .pipe(server({
      livereload: true,
      open: true,
      port: 6639,	// set a port to avoid conflicts with other local apps
      fallback: './dist/index.html'
    }));
});
