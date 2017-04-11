module.exports = {
  method: ["GET", "POST"],
  path: "/restricted",
  config: {
    auth: {
      scope: "admin",
    },
    handler: function (request, reply) {
      reply.view("secret");
    }
  }
};
