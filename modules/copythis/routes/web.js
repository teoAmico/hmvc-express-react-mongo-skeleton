'use-strict'
var express = require('express')
var app = express()

var MiddlewareFactory = require('../factory/MiddlewareFactory')
var middlewareFactory = new MiddlewareFactory() 

var ControllerFactory = require('../factory/ControllerFactory')
var controllerFactory = new ControllerFactory()

var ServiceFactory = require('../factory/ServiceFactory')
var serviceFactory = new ServiceFactory()


//set up module routes
app.get('/',  function(req,res,next){})

module.exports = app