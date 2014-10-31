function GridCreator($) {
    this.page = $;
};

GridCreator.prototype.createGridOfSize = function(size) {
    var template = this.page('#cell-template'); 

    this.page('table#grid tr').remove();
        
    var table = this.page('table#grid');    
    for (var row = 0; row < size; row ++) {
        var line = '';
        for (var column = 0; column < size ; column ++) {
            var cell = '<td class="' + template.attr('class') + '" onclick="' + template.attr('onclick') + '"" id="cell-' + (row+1) + 'x' + (column+1) + '" /">';
            line += cell;
        }
        table.append('<tr>' + line + '</tr>');
    }
};

var module = module || {}

module.exports = GridCreator;

