const Hapi    = require('hapi');

const basicValidate = require('../lib/validate');
const routes = require('./routes');

var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 4000
});

server.register(/* plugin goes here */, function (err) {
  if (err) throw err;

  // Add an authentication strategy here

  server.route(routes);
});

module.exports = server;
