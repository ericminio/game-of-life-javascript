var fs = require('fs');

module.exports = function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    var html = fs.readFileSync('./app/game.of.life/lib/simulator.html').toString();
    
    response.write(html);
    response.end();
};