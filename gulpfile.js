/*global -$ */
'use strict';
var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

var config = {
  scss: {
    src: 'dashboard.scss',
    dist: 'dist',
    options: {
      outputStyle: 'nested',
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    },
    lint: {
      'config': '.scss-lint.yml',
    }
  }
}


gulp.task('styles:scss', function() {
  return gulp.src(config.scss.src)
    .pipe($.sourcemaps.init())
    .pipe($.scssLint(config.scss.lint))
    .pipe($.sass(config.scss.options))
    .pipe($.postcss([
      require('autoprefixer-core')({browsers: ['last 1 version']})
    ]))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(config.scss.dist))
    .pipe(reload({stream: true}));
});


gulp.task('build', ['styles:scss'], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});


gulp.task('deploy', ['build'], function() {
  return gulp.src('./dist/**/*')
    .pipe($.ghPages());
});


gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));


gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
