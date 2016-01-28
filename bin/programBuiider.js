var exports = module.exports;
var program = require('commander');
var path = require('path');

var newCommand = require('./commands/new');
var pkg = require(path.resolve(__dirname, '..', 'package.json'));

exports.init = function() {
    setProgramVersion();
    setNewCommand();
    initProgram();
}

function setNewCommand() {
    program
        .command('new <name>')
        .description('Create a new project with the provided name')
        .action(newCommand.init);
}

function initProgram() {
    program.parse(process.argv);

    if (!process.argv.slice(2).length) {
      program.outputHelp();
    }
}

function setProgramVersion() {
    program.version(pkg.version)
}