function MotherNature() {  
};

MotherNature.prototype.after = function(cells) {
    
    var ofsprings = [];
    for (var row = 0 ; row < cells.length; row ++) {
        var line = [];
        for (var column = 0 ; column < cells[0].length; column ++) {
            line.push(false);
        }
        ofsprings.push(line);
    }

    for (var row = 0 ; row < cells.length; row ++) {
        for (var column = 0 ; column < cells[0].length; column ++) {
            if ( cells[row][column-1] &&
                 cells[row][column+1]) {
                     ofsprings[row][column] = true
                 }
        }
    }
        
    return ofsprings;
};

var module = module || {}

module.exports = MotherNature;