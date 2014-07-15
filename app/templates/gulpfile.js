'use strict';
var gulp = require('gulp');

var dart = require('gulp-dart2js');

gulp.task('default', ['build']);

gulp.task('debug', function(){
  gulp.watch('app/dart/*.dart', ['build']);
});

gulp.task('build', function(){
  gulp.src('app/dart/*.dart')
  .pipe(dart('app/dart/'));
});
