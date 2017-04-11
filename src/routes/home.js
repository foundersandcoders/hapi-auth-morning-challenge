module.exports = {
  method: ["GET", "POST"],
  path: "/home",
  handler: function (request, reply) {
    reply.view("home");
  }
};
