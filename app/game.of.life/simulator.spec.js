var router = require('../lib/router');
var Server = require('../lib/server');
var Browser = require('zombie');

describe('Game of life simulator', function() {

    var server;
    
    beforeEach(function(done) {
        server = new Server(router);
        server.start();
        done();
    });
    
    afterEach(function() {
        server.stop();
    });

    it('offers a way to setup the grid', function(done) {
        var browser = new Browser();
        browser.visit('http://localhost:5000/').
            then(function() {
                return browser.click('#cell-1x1');
            }).
            then(function() {
                expect(browser.query('#cell-1x1').className).toContain('alive');
                done();
            }).
            fail(function(error) {
            	expect(error.toString()).toBeNull();
            	done();
        	});
    });

    it('offers a way to start the simulation', function(done) {
        var browser = new Browser();
        browser.visit('http://localhost:5000/').
            then(function() {
                return browser.click('#cell-1x1');
            }).
            then(function(){
                return browser.pressButton('#start');
            }).
            then(function() {
                expect(browser.query('#cell-1x1').className).toContain('empty');
                done();
            }).
            fail(function(error) {
            	expect(error.toString()).toBeNull();
            	done();
        	});
    });
    
});