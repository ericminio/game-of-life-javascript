var MotherNature = require('./lib/mother.nature');

describe('Game of life kata', function() {

    var motherNature = new MotherNature();

    it('scattered cells die', function() {
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
    
    describe('a cell with 2 neighbours survives:', function() {
        
        it('works on one line', function() {
            var cells = [
                [true , true, true],
            ];
            var ofsprings = motherNature.after(cells);
            
            expect(ofsprings[0][1]).toEqual(true);
        });
        
        it('works with other directions too', function() {
            expect(motherNature.after([
                [true], 
                [true], 
                [true]])[1][0]).toEqual(true); 
            
            expect(motherNature.after([
                [true,  false, false],
                [false, true,  false],
                [false, false, true]
                ])[1][1]).toEqual(true);

            expect(motherNature.after([
                [false, false, true],
                [false, true,  false],
                [true,  false, false]
                ])[1][1]).toEqual(true);
        });
    });
    
    describe('a cell with 3 neighbours survives:', function() {
        
        it('works with different directions', function() {
            expect(motherNature.after([
                [true,  false, true ],
                [false, true,  false],
                [true,  false, false]
                ])[1][1]).toEqual(true);
        });
    });

    describe('an empty slot with 3 neighbours comes to life:', function() {
        
        it('works with different directions', function() {
            expect(motherNature.after([
                [true,  false, true ],
                [false, false, false],
                [true,  false, false]
                ])[1][1]).toEqual(true);
        });
    });

    describe('a cell with more than 3 neighbours dies:', function() {
        
        it('works with different directions', function() {
            expect(motherNature.after([
                [true,  false, true ],
                [false, true,  false],
                [true,  false, true ]
                ])[1][1]).toEqual(false);
        });
    });

});