var $ = require('jquery');
var Toggler = require('./lib/toggler.listener');

describe('Toggler listener', function() {

    var listener = new Toggler($);

    it('can be instantiated', function() {
        expect(listener).toBeDefined();
    });
    
    it('has a toggle method', function() {
        expect(typeof listener.toggle).toBe('function'); 
    });
    
    describe('toggled', function() {

        beforeEach(function() {
    		$('body').append('<span id="empty-cell" class="empty"/>');
    		$('body').append('<span id="alive-cell" class="alive"/>');
        });
        
        afterEach(function() {
            $('#empty-cell').remove();
            $('#alive-cell').remove();
        });

        it('switches empty into alive', function() {
            listener.toggle('empty-cell');
            
            expect($('#empty-cell').attr('class')).toEqual('alive'); 
        });

        it('switches alive into empty', function() {
            listener.toggle('alive-cell');
            
            expect($('#alive-cell').attr('class')).toEqual('empty'); 
        });
    });
});