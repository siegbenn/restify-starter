var pg = require('pg');
var conString = "postgres://gmsw:gmsw2015@vaps.cbxyqfgxpfct.us-east-1.rds.amazonaws.com/vaps";

/** @module MessageFunctions */
/** @class */
function MessageFunctions() {

	/** 
	 * Returns messages JSON object.
	 * @returns {Json} messages
	 */
	this.allMessages = function(callback) {

		pg.connect(conString, function(err, client, done) {
			if (err) {
				callback('error fetching client from pool', err);
			}
			client.query('SELECT $1::int AS number', ['1'], function(err, result) {
				done();

				if (err) {
					callback('error running query', err);
				}
				var result = (result.rows[0].number);
				callback(result)
			});
		});
	}
}

module.exports = MessageFunctions;