'use strict';

/* ============================================================ *\
	COMPILE TEMPLATES / HTML
\* ============================================================ */

// Gulp modules
var rename = require('gulp-rename');
var data   = require('gulp-data');
var path   = require('path');


// Handlebars requirements
var handlebars = require('gulp-compile-handlebars');

// Config
var handlebarsConfig  = require('../_config/handlebars');
var templateHelpers   = require('../_lib/templateHelpers')();
var handlebarsTools   = require('../_lib/handlebarsTools')(handlebarsConfig);

module.exports = function(gulp, config) {

	function getData(file) {
		file = path.basename(file.path, '.' + handlebarsConfig.extension);

		return {
			data: handlebarsTools.getTemplateData(file)
		};
	}

	gulp.task('compile-html', function () {
		var templateData = {};

		var options = {
			batch:   [handlebarsConfig.paths.partials],
			helpers: templateHelpers
		}

		return gulp.src(handlebarsConfig.paths.pages + '/**/*.hbs')
			.pipe(data(getData))
			.pipe(handlebars({}, options))
			.pipe(rename({extname: '.html'}))
			.pipe(gulp.dest('build'));
	});

}