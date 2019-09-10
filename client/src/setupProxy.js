const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy(['/auth', '/auth/google'], { target: 'http://localhost:5000' }))
  app.use(proxy(['/api', '/api/current_user'], { target: 'http://localhost:5000' }))
}
