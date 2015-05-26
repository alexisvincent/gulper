import gulpir from 'laravel-elixir';
var util = require('gulp-util');

gulpir.config.production = !!util.env.production;
gulpir.config.srcDir = '/';
gulpir.config.assetsDir = '/';
gulpir.config.cssOutput = 'build/css';
gulpir.config.jsOutput = 'build/js';
gulpir.config.sourcemaps = !util.env.production;
gulpir.config.bowerDir = 'vendor/bower_components';
gulpir.config.tasks = [];
gulpir.config.watchers = {default: {}};
gulpir.config.duplicate = [];
gulpir.config.concatenate = {css: [], js: []};

gulpir.config.setDefaultsFrom('gulper.json');

//Extentions
require('./ingredients/webpack')
require('./ingredients/syncFile')
require('./ingredients/syncDir')

export default gulpir;