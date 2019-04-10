const Joi = require('joi')

module.exports = {
  name: 'testRoute',
  version: '0.0.1',
  register (server) {
    server.route({
      method: 'POST',
      path: '/',
      config: {
        tags: ['api'],
        handler () {
          return {
            message: 'Hello world!'
          }
        },
        response: {
          modify: true,
          options: {
            stripUnknown: true
          },
          schema: Joi.object().keys({
            message: Joi.string().required()
          })
        },
        validate: {
          payload: Joi.object().keys({
            name: Joi.string().required()
          })
        }
      }
    })
  }
}
