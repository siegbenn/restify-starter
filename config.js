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
	},
	'acl': {
		'enabled': true,
		'rules': [{
			'roles': ['admin'],
			'allows': [{
				'resources': [
					'*'
				],
				'permissions': '*'
			}]
		}, {
			'roles': ['user'],
			'allows': [{
				'resources': [
					'*',
				],
				'permissions': '*'
			}]
		}, {
			'roles': ['anonymous'],
			'allows': [{
				'resources': '/',
				'permissions': 'get'
			}]
		}]
	}
};

module.exports = config;