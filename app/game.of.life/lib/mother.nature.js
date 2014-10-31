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
            if (this.aliveAt(row, column, cells) && 
                this.neighbourCountOf(row, column, cells) == 2) {
                ofsprings[row][column] = true
            }    
        }
    }
        
    return ofsprings;
};

MotherNature.prototype.neighbourCountOf = function(row, column, cells) {
    var count = 0;
    
    var neighbours = [
        { dr:-1, dc:-1 }, { dr:-1, dc:+0 }, { dr:-1, dc:+1 },
        { dr:+0, dc:-1 },                   { dr:+0, dc:+1 },
        { dr:+1, dc:-1 }, { dr:+1, dc:+0 }, { dr:+1, dc:+1 }
    ];
    for (var index = 0; index < neighbours.length ; index++ ) {
        var neighbour = neighbours[index];
        if (this.aliveAt(row+neighbour.dr, column+neighbour.dc, cells)) count++;
    }
    
    return count;    
};

MotherNature.prototype.aliveAt = function(row, column, cells) {
    if (cells[row] === undefined) return false;
    
    return cells[row][column];
};

var module = module || {}

module.exports = MotherNature;