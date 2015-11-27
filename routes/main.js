var path            = require('path');
var merge           = require('merge');
var defaultData     = require(path.resolve(__dirname, '..', '_config', 'templateData.json'));
var templateHelpers = require(path.resolve(__dirname, '..', '_config', 'templateHelpers.js'))();

var WebsiteController = function (website, config) {
	// Public functions
	var website = website;
	this.get = function(request, response) {
		if (!request.body) return response.sendStatus(400);
		var url = parseUrl(request.params[0]);

		response.render(url, createModel(url));
	};

	function getData(file) {
		var templateData;

		try{
			templateData = require(path.resolve(__dirname, '..', config.paths.data, file + '.json'));
		} catch(err){
			templateData = {};
		}

		templateData = merge.recursive(defaultData, templateData);

		return templateData;
	}

	function createModel(partialName){
		var model = {
			data:    getData(partialName),
			helpers: templateHelpers
		}

		return model;
	}

	function parseUrl(url){
		if(url === '/' || url === '' || url === undefined || url === 'favicon.ico'){
			// this acts as the default view file when working locally
			url = 'index'
		}
		return url;
	}

};

module.exports = function(website) {
	var controller = new WebsiteController(website);
	website.get(['/*','/:loc'], controller.get);

};