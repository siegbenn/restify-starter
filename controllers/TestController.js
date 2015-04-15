// Import the test controller functions.
var TestFunctions = require('./TestFunctions');

function TestController(req, res, next) {

	testFunctions = new TestFunctions();

	this.sendPong = function() {	
		res.send(200, testFunctions.pong());
	};
}

module.exports = TestController;
