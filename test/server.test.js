const request = require('supertest');
const app = require('../server');

describe('PortfolioSite server', function() {
  it('responds to GET / with html', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('responds to GET /api/projects with json', function(done) {
    request(app)
      .get('/api/projects')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(res => {
        if (!Array.isArray(res.body)) throw new Error('Not an array');
      })
      .end(done);
  });
});
