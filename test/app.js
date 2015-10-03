var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /account/login', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/login')
      .expect(200, done);
  });
});

describe('GET /account/signup', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/signup')
      .expect(200, done);
  });
});

describe('GET /api', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/api')
      .expect(200, done);
  });
});

describe('GET /contact', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/contact')
      .expect(200, done);
  });
});

describe('GET /random-url', function() {
  it('should return 404', function(done) {
    request(app)
      .get('/reset')
      .expect(404, done);
  });
});


describe('Sensors REST API', function () {

  describe('GET /REST/sensors', function () {

    it('should return 200 OK', function (done) {
      request(app).get('/rest/sensors').expect(200, done);


    });
    
  });

  describe('GET /REST/sensors/:senserId', function () {

    it('should return 200 OK', function (done) {
      request(app).get('/REST/sensors/560e8df074ec51e6489ec5dd').expect(200, done);


    });
    
  });

  describe('POST /REST/sensors  - create a sensor', function () {

    it('should return 200 OK', function (done) {
      request(app).post('/REST/sensors').expect(200, done);


    });
    
  });
  
});