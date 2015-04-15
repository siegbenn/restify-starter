var config = require('../config')
var should = require('chai').should();
var supertest = require('supertest');
var api = supertest('http://localhost:' + config.server.port);
server = require('../index');

describe('TestController', function() {
	describe('#/ping', function() {
		it('returns pong', function(done) {
			api.get('/ping')
				.expect(200)
				.end(function(err, res) {
					res.body.should.equal('pong')
					done();
				})
		});
	});
});