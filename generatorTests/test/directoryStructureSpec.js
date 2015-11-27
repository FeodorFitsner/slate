var path = require('path');
var chai = require('chai');

chai.use(require('chai-fs'));
chai.should();

const ROOT_DIR = path.join(process.cwd(), '..');

describe('As a dev', function() {

    var pathToTest;

    describe('When testing generator directory structure', function() {

        it('then _config folder should exist', function() {
            pathToTest = path.join(ROOT_DIR, '_config');
            pathToTest.should.be.a.directory();
        })

        it('then _source folder should exist', function() {
            pathToTest = path.join(ROOT_DIR, '_source');
            pathToTest.should.be.a.directory();
        })

        it('then gulpTasks folder should exist', function() {
            pathToTest = path.join(ROOT_DIR, 'gulpTasks');
            pathToTest.should.be.a.directory();
        })

        it('then routes folder should exist', function() {
            pathToTest = path.join(ROOT_DIR, 'routes');
            pathToTest.should.be.a.directory();
        })

        it('then test folder should exist', function() {
            pathToTest = path.join(ROOT_DIR, 'views');
            pathToTest.should.be.a.directory();
        })

        it('then views folder should exist', function() {
            pathToTest = path.join(ROOT_DIR, 'views');
            pathToTest.should.be.a.directory();
        })

    });

    describe('When testing views directory structure', function() {

        var viewsPath = path.join(ROOT_DIR, 'views');

        it('then _data folder should exist', function() {
            pathToTest = path.join(viewsPath, '_data');
            pathToTest.should.be.a.directory();
        })

        it('then _layouts folder should exist', function() {
            pathToTest = path.join(viewsPath, '_layouts');
            pathToTest.should.be.a.directory();
        })

        it('then _pages folder should exist', function() {
            pathToTest = path.join(viewsPath, '_pages');
            pathToTest.should.be.a.directory();
        })

        it('then _partials folder should exist', function() {
            pathToTest = path.join(viewsPath, '_partials');
            pathToTest.should.be.a.directory();
        })

    })

});