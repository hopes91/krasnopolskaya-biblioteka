'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const uglifycss = require('gulp-uglifycss');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cached = require('gulp-cached');
const remember = require('gulp-remember');
const del = require('del');
const browserSync = require('browser-sync').create();

gulp.task('css', function() {
  return gulp.src('./dev/sass/**/*.scss')
    .pipe(cached('css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(remember('css'))
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(gulp.dest('./prod'));
});

gulp.task('js', function() {
  return gulp.src([
      'node_modules/@babel/polyfill/dist/polyfill.js',
      './dev/js/*.js'
    ])
    .pipe(cached('js'))
    .pipe(babel({presets: ['@babel/preset-env']}))
    .pipe(remember('js'))
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./prod'));
});

gulp.task('assets', function() {
  return gulp.src('./dev/assets/**/*.*', {since: gulp.lastRun('assets')})
    .pipe(gulp.dest('./prod'));
});

gulp.task('clean', function() {
  return del('./prod');
});

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('css', 'js', 'assets'))
);

gulp.task('watch', function() {
  const cssWatcher = gulp.watch('./dev/sass/**/*.scss', gulp.series('css'));

  cssWatcher.on('unlink', function(event) {
    delete cached.caches['css'][event.path];
    remember.forget('css', event.path);
  });

  const jsWatcher = gulp.watch('./dev/js/*.js', gulp.series('js'));

  jsWatcher.on('unlink', function(event) {
    delete cached.caches['js'][event.path];
    remember.forget('js', event.path);
  });

  gulp.watch('./dev/assets/**/*.*', gulp.series('assets'));
});

gulp.task('server', function() {
  browserSync.init({
    server: './prod'
  });

  browserSync.watch('./prod/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', gulp.series(
  'build',
  gulp.parallel('watch', 'server'))
);
