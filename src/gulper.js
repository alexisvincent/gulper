import Gulper from 'laravel-elixir';
var util = require('gulp-util');

Gulper.config.production = !!util.env.production;
Gulper.config.srcDir = 'app';
Gulper.config.assetsDir = '/';
Gulper.config.cssOutput = 'build/css';
Gulper.config.jsOutput = 'build/js';
Gulper.config.sourcemaps = !util.env.production;
Gulper.config.bowerDir = 'vendor/bower_components';
Gulper.config.tasks = [];
Gulper.config.watchers = {default: {}};
Gulper.config.duplicate = [];
Gulper.config.concatenate = {css: [], js: []};

Gulper.config.setDefaultsFrom('gulper.json');

// Extentions
require('./ingredients/webpack')(Gulper)

export default Gulper;