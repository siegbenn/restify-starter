// Import the test controller functions.
var TestFunctions = require('./TestFunctions');

/** @module TestController */
/** @class */
function TestController(req, res, next) {

	testFunctions = new TestFunctions();

	/** Sends a 200 HTTP header and 'pong'. */
	this.sendPong = function() {	
		res.send(200, testFunctions.pong());
	};
}

module.exports = TestController;
