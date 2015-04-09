function TestController(req, res, next) {

	this.sendPong = function() {
		res.send(200, 'pong');
	};
}

module.exports = TestController;