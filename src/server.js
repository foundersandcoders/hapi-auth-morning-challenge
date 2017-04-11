const Hapi = require("hapi");
const handlebars = require("handlebars");
const vision = require("vision");
const basicAuth = require("hapi-auth-basic");
const validate = require("../lib/validate.js");
const routes = require("./routes");

// The validation function(s) you have written
const basicValidate = require("../lib/validate");

var server = new Hapi.Server();
server.connection({
  host: "localhost",
  port: 4000
});

server.register([vision, basicAuth], function (err) {
  if (err) throw err;

  server.views({
    engines: { hbs: handlebars },
    path: "views"
  });

  server.auth.strategy("do-a-validate", "basic", {validateFunc: validate});

  server.auth.default("do-a-validate");

  server.route(routes);
});

module.exports = server;
