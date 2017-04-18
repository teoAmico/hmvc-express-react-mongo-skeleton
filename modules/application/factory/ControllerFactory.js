
'use-strict'
var ServiceFactory = require('./ServiceFactory')
var HomeController = require('../controllers/HomeController')
var self = this

class ControllerFactory {

    constructor() {
        self.serviceFactory = new ServiceFactory
    }

    createHomeController() {
        return new HomeController(self.serviceFactory.createHomeService())
    }
}
module.exports = ControllerFactory