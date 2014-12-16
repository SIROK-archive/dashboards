'use strict';
// Load gulp and other plugins
var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

// Path
var path = {
  "scss": "scss/"
}

// Scss Task
gulp.task('styles', function(){
  return gulp.src('scss/**/*.scss')
      // Transpile SCSS
      .pipe($.rubySass({
        style: 'expanded',
      }))
      // Add prefix
      // TODO: Addprefix to css file
      .pipe($.autoprefixer('last 2 version'))
      // Move scss to css
      .pipe(gulp.dest('dist/css'))
      // 
      .pipe($.csscomb('dis/css/*.css'))
      .on('error', function(err){ console.log(err.message); })
      // Rename main.css to main.min.css
      .pipe($.rename({
        suffix: '.min'
      }))
      // Minify css file
      .pipe($.csso())
      .pipe(gulp.dest('dist/css'));
});


// Default Task
gulp.task('watch', function(){
  var styles = ['styles'];
  $.watch('scss/**/.scss', styles);
});
