var config = {
	'server': {
		'name': "base-server",
		'port': 8000
	},
	'redis': {
		'host': '127.0.0.1',
		'port': 6379,
		'options': {}
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
	},
	'acl': {
		'enabled': true,
		'rules': [{
			roles: ['guest', 'member'],
			allows: [{
				resources: 'blogs',
				permissions: 'get'
			}, {
				resources: ['forums', 'news'],
				permissions: ['get', 'put', 'delete']
			}]
		}, {
			roles: ['gold', 'silver'],
			allows: [{
				resources: 'cash',
				permissions: ['sell', 'exchange']
			}, {
				resources: ['account', 'deposit'],
				permissions: ['put', 'delete']
			}]
		}]
	}
};

module.exports = config;