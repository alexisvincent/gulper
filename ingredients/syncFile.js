var elixir = require('laravel-elixir');

elixir.extend("syncFile", function (src, dest) {

	gulp.task('syncFile', function () {
		return gulp.src(src).pipe(gulp.dest(dest));
	});

	this.registerWatcher("syncFile", src);

	return this.queueTask("syncFile");
});