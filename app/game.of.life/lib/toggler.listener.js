var require = require || function() {};
var $ = $ || require('jquery');

function Toggler() {  
};

Toggler.prototype.toggle = function(id) {
    var cell = $('#' + id);
    if (cell.attr('class') === 'alive' ) {
        cell.attr('class', 'empty');
    }
    else {
        cell.attr('class', 'alive');
    }
};

var module = module || {}

module.exports = Toggler;