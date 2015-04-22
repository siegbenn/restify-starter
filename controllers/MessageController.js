// Import the test controller functions.
var MessageFunctions = require('./MessageFunctions');

/** @module MessageController */
/** @class */
function MessageController(req, res, next) {

	messageFunctions = new MessageFunctions();

	/** Sends a 200 HTTP header and messages object. */
	this.getMessages = function() {	
		messageFunctions.allMessages(function(err, data) {
			if (err) {
				res.send(500, err);
			} else {
				res.send(200, data);
			}
		})
	};
}

module.exports = MessageController;