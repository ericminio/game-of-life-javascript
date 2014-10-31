var $ = require('jquery');
var Starter = require('./lib/start.listener');

describe('Start listener', function() {

    var listener = new Starter($);

    it('can be instantiated', function() {
        expect(listener).toBeDefined();
    });
    
    it('has a start method', function() {
        expect(typeof listener.start).toBe('function'); 
    });

    initializeGridWithAliveCellsIn = function(ids) { 
        for(var row=1; row<= 5; row++) {
            for(var column=1; column <= 5; column++) {
                $('body').append('<span id="cell-' + row + 'x' + column + '" class="empty"/>');
            }
        }                    
        for(var i=0; i<ids.length; i++) {
            $('#'+ids[i]).attr('class', 'alive');
        };
    };
    
    removeGrid = function() {
        for(var row=1; row<= 5; row++) {
            for(var column=1; column <= 5; column++) {
                $('#cell-'+row+'x'+column).remove();
            }
        }            
    };
    
    describe('start method', function() {

        beforeEach(function() {
            initializeGridWithAliveCellsIn(['cell-1x1', 'cell-2x2']);
        });
        
        afterEach(function() {
            removeGrid();
        });

        it('lets mother nature decides who survives and who does not survive', function() {
            listener.motherNature = { after: function(cells) {} };
            spyOn(listener.motherNature, 'after').andReturn([[]]);
            listener.start();
            
            var cells = [
                [true , false, false, false, false],
                [false, true, false, false, false],
                [false, false, false, false, false],
                [false, false, false, false, false],
                [false, false, false, false, false],
            ]; 
            
            expect(listener.motherNature.after).toHaveBeenCalledWith(cells);
        });
        
        it('trusts mother nature to do what is right', function() {
            listener.motherNature = { after: function(cells) {} };
            spyOn(listener.motherNature, 'after').andReturn([
                [false, false, false, false, false],
                [false, false, false, false, false],
                [true , false, false, false, false],
                [false, false, false, false, false],
                [false, false, false, false, true ],
            ]);
            listener.start();
            
            expect($('#cell-1x1').attr('class')).toEqual('empty');
            expect($('#cell-3x1').attr('class')).toEqual('alive');
            expect($('#cell-5x5').attr('class')).toEqual('alive');
        })
    });
});