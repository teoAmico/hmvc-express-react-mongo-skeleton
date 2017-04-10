
'use-strict'
var TestMiddleware = require('../middlewares/TestMiddleware');

class MiddlewareFactory {
    createTestMiddleware(){
        return new TestMiddleware()
    }
}

module.exports = MiddlewareFactory