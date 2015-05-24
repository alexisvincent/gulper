import gulper from 'laravel-elixir';
var util = require('gulp-util');

gulper.config.production = !!util.env.production;
gulper.config.srcDir = '/';
gulper.config.assetsDir = '/';
gulper.config.cssOutput = 'build/css';
gulper.config.jsOutput = 'build/js';
gulper.config.sourcemaps = !util.env.production;
gulper.config.bowerDir = 'vendor/bower_components';
gulper.config.tasks = [];
gulper.config.watchers = {default: {}};
gulper.config.duplicate = [];
gulper.config.concatenate = {css: [], js: []};

gulper.config.setDefaultsFrom('gulper.json');

//Extentions
require('./ingredients/webpack')


export default gulper;