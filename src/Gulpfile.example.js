var gulper = require('gulper');

/*
 |----------------------------------------------------------------
 | Have a Drink
 |----------------------------------------------------------------
 |
 | Gulper provides a clean, fluent API for defining some basic
 | Gulp tasks for your application. Gulper supports
 | several common CSS, JavaScript and even testing tools!
 |
 */

//Webpack
gulper(function(mix){
	mix.webpack({
		entry: './frontend/src/js/hbs.js',

		output: {
			filename: 'hbs.min.js',
			path: './frontend/src/build/',
			publicPath: './'
		}
	}, true);
});