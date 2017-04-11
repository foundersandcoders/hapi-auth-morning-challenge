module.exports = {
  method: ['GET', 'POST'],
  path: '/restricted',
  handler: function (request, reply) {
    reply.view('secret');
  }
}
