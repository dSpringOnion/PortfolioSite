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

  it('responds to GET /api/about with json', function(done) {
    request(app)
      .get('/api/about')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(res => {
        if (!res.body || !res.body.bio) throw new Error('Invalid about data')
      })
      .end(done)
  });

  it('responds to GET /projects', function(done) {
    request(app)
      .get('/projects')
      .expect('Content-Type', /html/)
      .expect(200, done)
  });

  it('responds to GET /about', function(done) {
    request(app)
      .get('/about')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('responds to GET /contact', function(done) {
    request(app)
      .get('/contact')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('responds with 404 for unknown API routes', function(done) {
    request(app)
      .get('/api/nonexistent')
      .expect('Content-Type', /json/)
      .expect(404)
      .expect(res => {
        if (!res.body || res.body.error !== 'Not found') {
          throw new Error('Incorrect error response');
        }
      })
      .end(done);
  });
});
