
'use-strict'
var ServiceFactory = require('./ServiceFactory')
var AuthController = require('../controllers/AuthController')
var self = this

class ControllerFactory {

    constructor(){
        self.serviceFactory = new ServiceFactory()
    }

    createAuthController(){
        return new AuthController(self.serviceFactory.createAuthService())
    }

}

module.exports = ControllerFactory