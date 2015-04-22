var util = require('util');
var request = require('request');
var config = require('../config.js');

var logglyStream = function() {

	// Set loggly configuration.
	this.options = {
		enabled: config.logging.loggly.enabled,
		tags: config.logging.loggly.tags,
		endpoint: config.logging.loggly.endpoint
	};
	this.options.endpoint = util.format('%stag/%s', this.options.endpoint, this.options.tags.join(','));

};

logglyStream.prototype.write = function(record) {

	if (!this.options.enabled || typeof(record) !== 'object') {
		return;
	}

	// Create log object.
	var logObject = {
		method: 'POST',
		uri: this.options.endpoint,
		json: record
	};

	// Send to loggly.
	request(logObject, function(err) {
		if (err) {
			console.log('logglyStream - Error:');
			console.error(err);
		}
	});

};

module.exports = logglyStream;