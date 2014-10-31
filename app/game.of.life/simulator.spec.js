var router = require('../lib/router');
var Server = require('../lib/server');
var Browser = require('zombie');

describe('Game of life simulator', function() {

    var server;
    var browser = Browser.create();
    
    beforeEach(function(done) {
        server = new Server(router);
        server.start();
        done();
    });
    
    afterEach(function() {
        server.stop();
    });

    it('offers a way to setup the grid', function(done) {
        var cell = '#cell-1x1';
        browser.visit('http://localhost:5000/').
            then(function() {
                return browser.click(cell);
            }).
            then(function() {
                browser.assert.className(cell, 'alive');
            }).
            then(done, done);
    });

    it('offers a way to start the simulation for example with one cell that will not survive', function(done) {
        var cell = '#cell-1x1';
        browser.visit('http://localhost:5000/').
            then(function() {
                return browser.click(cell);
            }).
            then(function(){
                return browser.pressButton('#start');
            }).
            then(function() {
                browser.assert.className(cell, 'empty');
            }).
            then(done, done);
    });
    
});