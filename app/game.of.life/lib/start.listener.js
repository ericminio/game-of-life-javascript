function Starter($, motherNature) {  
    this.page = $;
    this.motherNature = motherNature;
};

Starter.prototype.start = function() {
    var ofsprings = this.motherNature.after(this.currentGeneration());
    
    for(var row=0; row< ofsprings.length; row++) {
        for(var column=0; column < ofsprings[0].length; column++) {
            this.page('#cell-'+ (row+1) +'x'+ (column+1) )
                .attr('class', ofsprings[row][column] ? 'alive' : 'empty');
        }
    }
};

Starter.prototype.currentGeneration = function() {
    cells = [];
    for(var row=1; row<= 5; row++) {
        var line = [];
        for(var column=1; column <= 5; column++) {
            line.push((this.page('#cell-'+row+'x'+column).attr('class') === 'alive'));
        }
        cells.push(line);
    }
    return cells;
};

var module = module || {}

module.exports = Starter;