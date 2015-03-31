/**
 * Compile script for gulp - Rebel
 *
 * @author Alexis Vincent
 */
var gulp = require('gulp');
var babel = require("gulp-babel");

gulp.task('babel-gulper', function () {
	return gulp.src("src/gulper.js")
		 .pipe(babel())
		 .pipe(gulp.dest("./build"));
});

gulp.task('babel-ingredients', function () {
	return gulp.src("src/ingredients/*")
		 .pipe(babel())
		 .pipe(gulp.dest("./build/ingredients/"));
});

//!------------------ WATCH FILES -----------------------------

gulp.task('watch', ['babel-gulper', 'babel-ingredients'], function () {
	gulp.watch(["src/**/*"], {debounceDelay: 200}, function (files) {
		gulp.start('babel-gulper');
		gulp.start('babel-ingredients');
	});
});

//default gulp task is to watch
gulp.task('default', function () {
	return gulp.start('watch');
});