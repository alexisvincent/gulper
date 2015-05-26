var elixir = require('laravel-elixir');
var gulp = require('gulp');

elixir.extend("syncFile", function (src, dest) {

	gulp.task('syncFile', function () {
		return gulp.src(src).pipe(gulp.dest(dest));
	});

	this.registerWatcher("syncFile", src);

	return this.queueTask("syncFile");
});