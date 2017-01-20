'use strict';

var gulp          = require('gulp'),
    util          = require('gulp-util'),
    sass          = require('gulp-sass'),
    cssnano       = require('gulp-cssnano');

/* Check local env */
var dev = util.env.env != 'prod' ? true : false;
var no_error_exit = false;

/* Development stuff, do NOT install on dev/prod */
if( dev ) {
  var sourcemaps    = require('gulp-sourcemaps'),
      duration      = require('gulp-duration'),
      colors        = require('colors'),
      runTimestamp  = Math.round(Date.now()/1000);
}

/* Gulp SASS dev compile task */
gulp.task('sass', function () {
  gulp.src('sass/**/*.scss')
    .pipe(dev ? sourcemaps.init() : util.noop())
    .pipe(no_error_exit ? sass.sync().on('error', sass.logError) : sass.sync().on('error', sass.logError).on('error', process.exit.bind(process, 1)))
    .pipe(dev ? duration('Sass finished') : util.noop())
    .pipe(!dev ? cssnano() : util.noop())
    .pipe(dev ? sourcemaps.write('./map') : util.noop())
    .pipe(dev ? duration('created sourcemap files') : util.noop())
    .pipe(gulp.dest('css'))
    .pipe(dev ? duration('moved all files to /css folder') : util.noop());
});

/* Default task */
gulp.task('default', ['sass']);

/* Help task */
gulp.task('help', function () {
  console.log("\n\nUsage".underline);
  console.log("  gulp [command] --option\n\n"+"Commands:".underline);
  console.log('gulp sass'.yellow+'\t\t\tcompile SASS for development enviroment');
  console.log('gulp sass --env=prod'.yellow+'\t\tcompile SASS for production enviroment');
});
