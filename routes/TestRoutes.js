var restify = require('restify');
var config = require('../config');
var TestController = require('../controllers/TestController');
// Create a redis client
var redisClient = require("redis").createClient()

function rateLimit(req, res, next) {
	var rate = 1
	var burst = 10
	var ip = req.connection.remoteAddress;
	var url = req.url
	var id = ip + url
	var throttle = require("tokenthrottle-redis")({rate: rate, burst: burst, expiry: 3600, prefix: 'throttle'}, redisClient)

	throttle.rateLimit(id, function (err, limited) {
		if (limited) {
			var message = new restify.errors.TooManyRequestsError('You have exceeded your request rate of ' + rate + ' r/s.')
			res.send(message)
		} else {
			next()
		}
	})
}
function TestRoutes(server) {
	server.get('/ping', rateLimit, function(req, res, next) {
		var testController = new TestController(req, res, next);

		testController.sendPong();
	});
}

module.exports.routes = TestRoutes;