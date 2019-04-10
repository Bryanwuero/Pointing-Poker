const Hapi = require('hapi')
const routes = require('./setup/routes')
const hapiSwagger = require('./setup/swagger')
const Inert = require('inert')
const Vision = require('vision')

const server = Hapi.server({
  port: 8000,
  host: 'localhost',
  debug: { log: ['*'], request: ['*'] }
})

server.register([
  Inert,
  Vision,
  hapiSwagger,
  ...routes
]).then(() => {
  server.start()
  console.log(`server running at , ${server.info.uri}`)
})
