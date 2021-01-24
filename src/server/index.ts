import config from 'config';
import fastify, {FastifyInstance} from 'fastify';

const server: FastifyInstance = fastify({logger: true});

server.register(require('fastify-nextjs')).after(() => {
  server.next('/hello');
});

server.listen(config.port);
