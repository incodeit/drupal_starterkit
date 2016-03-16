'use strict';
var config = require('../config'),
    notifyError = require('../lib/notifyError');

var gulp = require('gulp'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    scss = require("postcss-scss"),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps');

// PostCSS plugins
var autoprefixer = require('autoprefixer'),
    lost = require('lost'),
    rucksack = require('rucksack-css'),
    cssnano = require('cssnano');

gulp.task('styles', function() {
    
    var plugins = [
        lost,
        rucksack,
        autoprefixer(config.postcssPlugins.autoprefixer.browsers),
        cssnano({safe: true, discardComments: {removeAll: true}})
    ];

    gulp.src(config.src.scss)
        .pipe(plumber({errorHandler: notifyError}))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(config.dest.css))
});
