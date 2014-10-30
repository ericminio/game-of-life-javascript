var servecontent = require('./serve.static.content.js');
var array        = require('../utils/lib/array.utils');

var matching = function(url) {
	return function(route) {
		return route.pattern.test(url);
	}
};

module.exports = {
	
    routes: [
        {
            pattern: /^\/$/,
            target: require('../game.of.life/lib/simulator.endpoint')
        },        
    ],
    
	endPointOf: function(request) {
	    var endPoint = array.firstItemIn(this.routes, matching(request.url));
	    return endPoint === undefined ? servecontent('app') : endPoint.target;
	}
};

