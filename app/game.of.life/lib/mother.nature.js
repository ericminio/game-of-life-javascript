function MotherNature() {  
};

MotherNature.prototype.after = function(cells) {
    return [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],        
    ];
};

var module = module || {}

module.exports = MotherNature;