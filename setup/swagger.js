const pack = require('../package.json')
const HapiSwagger = require('hapi-swagger')
const options = {
  info: {
    title: 'Pointing Poker API',
    version: pack.version
  }
}
module.exports = {
  options,
  plugin: HapiSwagger
}
