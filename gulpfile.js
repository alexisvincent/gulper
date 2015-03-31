/**
 * Compile script for gulp - Rebel
 *
 * @author Alexis Vincent
 */
var gulp = require('gulp');
var babel = require("gulp-babel");

gulp.task('babel', function () {
	return gulp.src("src/gulper.js")
		 .pipe(babel())
		 .pipe(gulp.dest("./build"));
});

//!------------------ WATCH FILES -----------------------------

gulp.task('watch', ['babel'], function () {
	gulp.watch(["src/*"], {debounceDelay: 200}, function (files) {
		gulp.start('babel');
	});
});

//default gulp task is to watch
gulp.task('default', function () {
	return gulp.start('watch');
});