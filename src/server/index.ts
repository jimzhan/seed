import config from 'config';
import fastify from 'fastify';

const server = fastify({logger: true});

server.register(require('fastify-nextjs')).after(() => {
  server.next('/hello');
});

server.listen(config.port, config.host);
