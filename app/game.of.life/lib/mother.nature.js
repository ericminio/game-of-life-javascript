function MotherNature() {  
};

MotherNature.prototype.after = function(cells) {
    
    var ofsprings = [];

    for (var row = 0 ; row < cells.length; row ++) {
        var line = [];
        for (var column = 0 ; column < cells[0].length; column ++) {
            var next = false;
            if (this.aliveAt(row, column, cells) && 
                [2, 3].indexOf(this.neighbourCountOf(row, column, cells)) != -1) {
                next = true;
            }
            if (!this.aliveAt(row, column, cells) && 
                [3].indexOf(this.neighbourCountOf(row, column, cells)) != -1) {
                next = true;
            }
            line.push(next);
        }
        ofsprings.push(line);
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