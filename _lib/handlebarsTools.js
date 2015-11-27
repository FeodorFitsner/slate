'use strict';
/* ============================================================ *\
	Helper functions for managing handlebars
\* ============================================================ */
// Node requirements
var path        = require('path');
var merge       = require('merge');

// Config
var defaultData = require(path.resolve(__dirname, '..', '_config', 'templateData'));

module.exports = function(config) {

	return {
		getTemplateData: function getData(file) {
			var templateData;

			try{
				templateData = require(path.resolve(__dirname, '..', config.paths.data, file + '.json'));
			} catch(err){
				templateData = {};
			}

			templateData = merge.recursive(defaultData, templateData);

			return templateData;
		}
	};
}