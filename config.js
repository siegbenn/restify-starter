var config = {
	'server': {
		'name': "base-server",
		'port': 8000
	},
	'logging': {
		'level': 'trace',
		'loggly': {
			'enabled': false,
			'tags': ['base-server'],
			'endpoint': 'https://logs-01.loggly.com/inputs/xxxxx-xxx-xxx-xxxxxx'
		}
	},
	'throttle': {
		'burst': 1,
		'rate': 1,
		'ip': true
	}
};

module.exports = config;