var $ = require('jquery');
var GridCreator = require('./lib/grid.creator');

describe('Grid creator', function() {

    var creator = new GridCreator($);
    var size = 2;

    it('can be instantiated', function() {
        expect(creator).toBeDefined();
    });
    
    beforeEach(function() {
        $('body').append('<table id="grid"><tr><td id="cell-template" onclick="any-event" class="any-class" /></tr></table>');
        
        creator.createGridOfSize(size);
    });
    
    afterEach(function() {
        $('#grid').remove(); 
    });
    
    it('removes the template', function() {
        expect($('#cell-template').length).toEqual(0);
    });
    
    it('the sizes gives the number of lines', function() {
        expect($('table#grid tr').length).toEqual(2);
    });
    
    it('the size gives the number of columns', function() {
        for (var row = 0; row < size; row ++) {
            for (var column = 0; column < size; column ++) {
                expect($('table#grid tr td#cell-' + (row+1) + 'x' + (column+1)).length).toEqual(1);
            }
        }
    });
    
    it('sets onclick event of each cell to the value of the template', function() {
        expect($('#cell-1x1').attr('onclick')).toEqual('any-event');
    });
    
    it('sets class of each cell to the value of the template', function() {
        expect($('#cell-1x1').attr('class')).toEqual('any-class');
    });
    
});