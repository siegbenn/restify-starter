// Packages.
var config = require('./config');
var path = require('path');
var restify = require('restify')
var bunyan = require('bunyan');
var fs = require('fs');

// Logging setup.
var logglyStream = require('./loggly');
var log = bunyan.createLogger({
	name: config.server.name,
	serializers: {
		req: bunyan.stdSerializers.req,
		res: bunyan.stdSerializers.res
	},
	streams: [{
		level: config.logging.level,
		type: 'rotating-file',
		path: path.join('./logs/' + config.server.name + '.log'),
		period: '1d',
		count: 100
	}, {
		type: 'raw',
		stream: new logglyStream()
	}]
});

// Server setup.
var server = restify.createServer({
	name: config.server.name,
	log: log
})
server.use(restify.bodyParser())
server.use(restify.queryParser())

// CORS.
server.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	return next();
});

// Load all routes.
fs.readdirSync('./routes').forEach(function (curFile) {
	// Only load .js files.
	if(curFile.substr(-3) === '.js') {
		route = require('./routes/' + curFile);
		route.routes(server);
	}
});

// Start server.
server.listen(config.server.port, function() {
	var startMessage = server.name + ' is listening on port ' + config.server.port + '.'
	console.log(startMessage)
})