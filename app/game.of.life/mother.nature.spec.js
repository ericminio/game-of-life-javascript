var MotherNature = require('./lib/mother.nature');

describe('Game of life kata', function() {

    var motherNature = new MotherNature();

    it('can be instantiated', function() {
        expect(motherNature).toBeDefined();
    });
    
    describe('scattered cells die', function() {
        var cells = [
            [true , false, false],
            [false, false, true ]
        ];
        var ofsprings = motherNature.after(cells);
        
        for (var row = 0 ; row < ofsprings.length; row ++) {
            for (var column = 0 ; column < ofsprings[0].length; column ++) {
                expect( ofsprings[row][column] ).toEqual(false);
            }
        }
    });  
});