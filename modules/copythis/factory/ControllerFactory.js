
'use-strict'
var ServiceFactory = require('./ServiceFactory')
var self = this

class ControllerFactory {

    constructor(){
        self.serviceFactory = new ServiceFactory()
    }

}
module.exports = ControllerFactory