function Toggler($) {  
    this.page = $;
};

Toggler.prototype.toggle = function(id) {
    var cell = this.page('#' + id);
    if (cell.attr('class') === 'alive' ) {
        cell.attr('class', 'empty');
    }
    else {
        cell.attr('class', 'alive');
    }
};

var module = module || {}

module.exports = Toggler;