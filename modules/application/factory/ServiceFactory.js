'use-strict'
var HomeService = require('../services/HomeService')
var self = this

class ServiceFactory {

    createHomeService(){
        return new HomeService()
    }
}
module.exports = ServiceFactory