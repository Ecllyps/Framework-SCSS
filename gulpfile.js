var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    clean  = require('gulp-clean'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('copyHtml', function() {
  // copy any html files in source/ to public/
  gulp.src('app/*.html').pipe(gulp.dest('dist'));
});

gulp.task('buildJs', function() {
  return gulp.src('app/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('copyCss', function() {
  // copy any html files in source/ to public/
  gulp.src('app/css/**/*.css').pipe(gulp.dest('dist/css'));
});

gulp.task('clean', function() {
	gulp.src('dist/**/*', { read: false }).pipe(clean());
});

gulp.task('build', ['copyHtml', 'buildJs', 'copyCss']);

gulp.task('Prod', ['clean','build']);

gulp.task('default', ['build'], function() {
	gulp.watch('app/*.html', ['copyHtml']);
	gulp.watch('app/js/**/*.js', ['buildJs']);
	gulp.watch('app/css/**/*.css', ['copyCss']);
});