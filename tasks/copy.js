'use strict';

var gulp  = require('gulp');
var $     = require('gulp-load-plugins')();

// Copy All Files At The Root Level (src)
gulp.task('copy', function () {
  return gulp.src([
    'app/*',
    'app/**/*.json',
    '!app/src',
    '!app/*.html',
    '!app/build'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
    .pipe($.size({title: 'copy'}));
});
