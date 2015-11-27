var path = require('path');
var chai = require('chai');
var expect = chai.expect;

chai.use(require('chai-fs'));
chai.should();

const ROOT_DIR = path.join(process.cwd(), '..');

describe('As a dev', function() {

    var pathToTest;

    describe('When testing generator directory structure', function() {

        it('then _config folder should exist', function() {
            pathToTest = path.join(ROOT_DIR, '_config');
            expect(pathToTest).to.be.a.directory().and.not.empty;
        })

        it('then _source folder should exist', function() {
            pathToTest = path.join(ROOT_DIR, '_source');
            expect(pathToTest).to.be.a.directory().and.not.empty;
        })

        it('then gulpTasks folder should exist', function() {
            pathToTest = path.join(ROOT_DIR, 'gulpTasks');
            expect(pathToTest).to.be.a.directory().and.not.empty;
        })

        it('then routes folder should exist', function() {
            pathToTest = path.join(ROOT_DIR, 'routes');
            expect(pathToTest).to.be.a.directory().and.not.empty;
        })

        it('then test folder should exist', function() {
            pathToTest = path.join(ROOT_DIR, 'views');
            expect(pathToTest).to.be.a.directory().and.not.empty;
        })

        it('then views folder should exist', function() {
            pathToTest = path.join(ROOT_DIR, 'views');
            expect(pathToTest).to.be.a.directory().and.not.empty;
        })

    });

    describe('When testing views directory structure', function() {

        var viewsPath = path.join(ROOT_DIR, 'views');

        it('then _data folder should exist', function() {
            pathToTest = path.join(viewsPath, '_data');
            expect(pathToTest).to.be.a.directory().and.not.empty;
        })

        it('then _layouts folder should exist', function() {
            pathToTest = path.join(viewsPath, '_layouts');
            expect(pathToTest).to.be.a.directory().and.not.empty;
        })

        it('then _pages folder should exist', function() {
            pathToTest = path.join(viewsPath, '_pages');
            expect(pathToTest).to.be.a.directory().and.not.empty;
        })

        it('then _partials folder should exist', function() {
            pathToTest = path.join(viewsPath, '_partials');
            expect(pathToTest).to.be.a.directory().and.not.empty;
        })

    })

});