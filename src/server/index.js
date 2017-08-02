'use strict';

const Hapi = require('hapi')
const Path = require('path');

const server = new Hapi.Server();

server.connection({
  port: 8080,
  host: 'localhost',
  routes: { cors: true }
})

server.register(require('inert'), () => {})

server.route({
    method: 'GET',
    path: '/products',
    handler: (request, reply) => {
      reply.file('./public/data/products.json')
    }
})

server.start((err) => {
    if (err) {
        throw err
    }

    console.log(`Server running at: ${server.info.uri}`);
});
