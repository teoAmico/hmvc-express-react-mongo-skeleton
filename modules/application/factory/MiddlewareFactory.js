'use-strict'
var TestMiddleware = require('../middlewares/TestMiddleware')
var self = this

class MiddlewareFactory {

    createTestMiddleware() {
        return new TestMiddleware()
    }
}

module.exports = MiddlewareFactory