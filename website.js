var express        = require('express');
var website        = express();
var http           = require('http').Server(website);
var path           = require('path');
var logger         = require('express-logger');
var json           = require('express-json');
var bodyParser     = require('body-parser');
var expressSession = require('express-session');
var methodOverride = require('express-method-override');
var exphbs         = require('express-handlebars');
var chalk          = require('chalk');

var config          = require('./_config/handlebars');
var templateHelpers = require('./_lib/templateHelpers')();

website.engine(config.extension, exphbs({
	extname:       config.extension,
	helpers:       templateHelpers,
	layoutsDir:    config.paths.layouts,
	defaultLayout: config.defaultLayout,
	partialsDir:   [config.paths.partials]
}));

website.set('port', process.env.PORT || 3001);
website.set('views', path.join(__dirname, config.paths.pages));
website.set('view engine', config.extension);
website.use(logger({path: './logs/logfile.txt'}));
website.use(expressSession({
	secret:            '18dhN7skw9AY82jb',
	saveUninitialized: true,
	resave:            true
}));
website.use(json());
website.use(bodyParser.urlencoded({ extended: false }));
website.use(methodOverride());
website.use(express.static(path.join(__dirname, 'public')));

// Setup routing
require('./routing')(website, config);

http.listen(website.get('port'), function(){
	console.log('Website ready, listening on port: ' + website.get('port'));
});

http.on('error', function(err) {

	console.log('');
	console.log(chalk.inverse('SERVER ERROR'))
	console.log(chalk.inverse('Error code: %s'), err.code);

	if(err.code === 'EADDRINUSE'){
		console.log('>> It looks like port ' + chalk.underline(website.get('port')) + ' is being used by another process. The port can only be used by ' + chalk.underline('one') + ' process.');
	}

	console.log('>> ' + chalk.underline('Full Error'), err);
	console.log('');
})

module.exports = website;
