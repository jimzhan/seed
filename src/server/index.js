const config = require('config')
const server = require('fastify')({ logger: true })

server.register(require('fastify-nextjs')).after(() => {
  server.next('/hello')
})

server.listen(config.port, config.host)
