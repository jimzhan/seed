const server = require('fastify')({ logger: true })

server.register(require('fastify-nextjs')).after(() => {
  server.next('/home')
})

module.exports = server
