var router = require('./lib/router.js');

describe('Router', function() {

    describe('Prod configuration:', function() {
	
		it('has routes', function() {
			expect(router.routes.length).toBeGreaterThan(0);
		});

		it('maps home to the game of life simulator', function() {
			expect(router.endPointOf({ url: '/' })).toBe(require('./game.of.life/lib/simulator.endpoint'));
		});
		
        it('serves static content, for example the main.css', function() {
            expect(router.endPointOf({ url: '/lib/public/main.css' }).toString()).toBe(require('./lib/serve.static.content')().toString());
        });
	});
		
});