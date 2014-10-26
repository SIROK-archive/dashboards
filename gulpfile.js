'use strict';
// Load gulp and other plugins
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Path
var path = {
  "scss": "scss/"
}

// Scss Task
gulp.task('scss', function(){
  return gulp.src('scss/**/*.scss')
      .pipe($.rubySass({
        style: 'expanded',
      }))
      .pipe($.autoprefixer('last 2 version'))
      .pipe(gulp.dest('dist/css'))
      .on('error', function(err){ console.log(err.message); })
      .pipe($.rename({
        suffix: '.min'
      }))
      .pipe($.csso())
      .pipe(gulp.dest('dist/css'));
});

// Default Task
gulp.task('default', ['scss']);
