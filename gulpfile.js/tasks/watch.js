'use strict';
var config = require('../config');

var gulp = require('gulp'),
    watch = require('gulp-watch');
    
gulp.task('watch', function() {
    gulp.watch(config.src.scss, ['styles']);
});
