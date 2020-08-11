const gulp = require('gulp')
const plumber = require('gulp-plumber')
const eslint = require('gulp-eslint')
const concat = require('gulp-concat')
const minify = require('gulp-minify');

module.exports = function script() {
  return gulp.src('src/js/*.js')
    .pipe(plumber())
    //.pipe(eslint())
    //.pipe(eslint.format())
    .pipe(minify())
    .pipe(gulp.dest('build/js'))
}

