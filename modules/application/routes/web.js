'use-strict'
var express = require('express');
var app = express();


var MiddlewareFactory = require('../factory/MiddlewareFactory');
var middlewareFactory = new MiddlewareFactory() 

var testMiddleware = middlewareFactory.createTestMiddleware()
app.use(testMiddleware.test);


var ControllerFactory = require('../factory/ControllerFactory');
var controllerFactory = new ControllerFactory()

var homeController = controllerFactory.createHomeController()

//set up module routes
app.get('/',  homeController.index);

module.exports = app;