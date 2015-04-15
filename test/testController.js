var should = require('chai').should();
var supertest = require('supertest');
var api = supertest('http://localhost:8000');
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