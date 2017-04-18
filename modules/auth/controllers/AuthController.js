'use-strict'
var BaseController = require('./BaseController')
var self = this

class AuthController extends BaseController{
    
    constructor(authService){
        super()
        self.authService = authService
    }

    login(req, res, next){
        res.send('login todo')
    }

}

module.exports = AuthController