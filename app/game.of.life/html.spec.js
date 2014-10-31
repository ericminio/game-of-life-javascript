var cheerio = require('cheerio');

describe('Simulator html', function() {

    var page;
    
    beforeEach(function() {
        this.addMatchers({ 
    		toHaveElement: function(selector) {
    		    var found = this.actual(selector).length > 0;
        		this.message = function() {
        			return 'Expecting given page to contain element ' + selector;
        		};
        		return found;
        		
    		}
    	}); 
    });
    
    beforeEach(function() {
        page = cheerio.load(require('fs').readFileSync('./app/game.of.life/lib/simulator.html').toString());
    });
    
    describe('has a grid', function() {
    
        it('with expected id', function() {
            expect(page).toHaveElement('table#grid');
        });
        
        it('with 5x5 cells', function() {
            for(var row=1; row<= 5; row++) {
                for(var column=1; column <= 5; column++) {
                    expect(page).toHaveElement('#cell-'+row+'x'+column);
                }
            }
        });
        
        describe('with each cell', function() {
            
            var cell = '#cell-3x4';
        
            it('being empty by default', function() {
                expect(page(cell).attr('class')).toContain('empty');
            });
        
            it('and toggling on click', function() {
                expect(page(cell).attr('onclick')).toContain("new Toggler($).toggle(this.id)");
            });
            
        });
    });
    
    describe('has a start button', function() {
        
    	it('with expected id', function() {
    	    expect(page).toHaveElement('button#start'); 
    	});
        
        it('and starting simulation on click', function() {
            expect(page('button#start').attr('onclick')).toContain('new Starter($, new MotherNature()).start()');
        });
    });
    
});