'use-strict'
var express = require('express')
var app = express()

var MiddlewareFactory = require('../factory/MiddlewareFactory')
var middlewareFactory = new MiddlewareFactory()

var TestMiddleware = middlewareFactory.createTestMiddleware()
app.use(TestMiddleware.test)

var ControllerFactory = require('../factory/ControllerFactory')
var controllerFactory = new ControllerFactory()
var HomeController = controllerFactory.createHomeController()

var ServiceFactory = require('../factory/ServiceFactory')
var serviceFactory = new ServiceFactory()

//set up module routes
app.get('/', HomeController.index)

module.exports = app