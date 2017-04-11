const Hapi = require('hapi');
const handlebars = require('handlebars');
const vision = require('vision')

const routes = require('./routes');

// The validation function(s) you have written
const basicValidate = require('../lib/validate');

var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 4000
});

server.register([vision], function (err) {
  if (err) throw err;

  server.views({
    engines: { hbs: handlebars },
    path: 'views'
  });

  // Add an authentication strategy here

  server.route(routes);
});

module.exports = server;
