function Starter($) {  
    this.page = $;
};

Starter.prototype.start = function() {
    this.page('#cell-1x1').attr('class', 'empty');
};

var module = module || {}

module.exports = Starter;