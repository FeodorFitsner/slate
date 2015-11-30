var path            = require('path');
var templateHelpers = require(path.resolve(__dirname, '..', '_lib', 'templateHelpers.js'))();

var WebsiteController = function (website, config) {
	var tools = require(path.resolve(__dirname, '..', '_lib', 'handlebarsTools'))(config);

	// Public functions
	var website = website;

	function createModel(partialName){
		var model = {
			data:    tools.getTemplateData(partialName),
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

	this.get = function(request, response) {
		if (!request.body) return response.sendStatus(400);
		var url = parseUrl(request.params[0]);

		response.render(url, createModel(url));
	};

};

module.exports = function(website, config) {
	var controller = new WebsiteController(website, config);
	website.get(['/*','/:loc'], controller.get);
};