function GridCreator($) {
    this.select = $;
};

GridCreator.prototype.createGridOfSize = function(size) {
    var template = this.select('#cell-template').prop('outerHTML');
    var grid = this.select('#grid');
    grid.empty();
    
    for (var row = 0; row < size; row ++) {
        var line = '';
        for (var column = 0; column < size ; column ++) {
            line += template.replace('cell-template', 'cell-' + (row+1) + 'x' + (column+1));
        }
        grid.append('<tr>' + line + '</tr>');
    }
};

var module = module || {}

module.exports = GridCreator;

