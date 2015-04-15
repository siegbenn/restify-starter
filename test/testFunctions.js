var expect = require('chai').expect;
var TestFunctions = require('../controllers/TestFunctions');

testFunctions = new TestFunctions();

describe('TestFunctions', function () {
	describe('#pong', function() {
		it('returns pong', function() {
			var x = testFunctions.pong();
			expect(x).to.equal('pong');
		});
	});
});