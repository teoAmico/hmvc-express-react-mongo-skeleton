'use-strict'
var AuthService = require('../services/AuthService')
var UserService = require('../services/UserService')
var self = this

class ServiceFactory {
    
    createAuthService() {
        return new AuthService(new UserService)
    } 

}

module.exports = ServiceFactory