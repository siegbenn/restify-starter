var config = require('../config');
var acl = require('acl')
var redisClient = require("redis").createClient(config.redis.port, config.redis.host, config.redis.options)
acl = new acl(new acl.redisBackend(redisClient, "acl~"))

/** @module AclFunctions */
/** @class */
function AclFunctions() {
	
	this.isAllowed = function(user, resource, permissions) {
		acl.isAllowed(user, resource, permissions, function (err, allowed) {
			if (err) {
				return err
			} else {
				return allowed
			}
		})
	}
}

module.exports = AclFunctions;

ACL = new AclFunctions()
aclTest = ACL.isAllowed("guest", "blogs", "get");
console.log(aclTest)