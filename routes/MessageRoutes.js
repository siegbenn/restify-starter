var restify = require('restify');
var config = require('../config');
var MessageController = require('../controllers/MessageController');
// Create a redis client
var redisClient = require("redis").createClient(config.redis.port, config.redis.host, config.redis.options)

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

function MessageRoutes(server) {
	server.get('/messages', rateLimit, function(req, res, next) {
		var messageController = new MessageController(req, res, next);

		messageController.getMessages();
	});
}

module.exports.routes = MessageRoutes;