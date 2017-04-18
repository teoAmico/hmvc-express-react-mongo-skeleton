'use-strict'
var express = require('express')
var app = express()

var passport = require('passport')
app.use(passport.initialize())

var MiddlewareFactory = require('../factory/MiddlewareFactory')
var middlewareFactory = new MiddlewareFactory() 

var ControllerFactory = require('../factory/ControllerFactory')
var controllerFactory = new ControllerFactory()
var AuthController = controllerFactory.createAuthController()

var ServiceFactory = require('../factory/ServiceFactory')
var serviceFactory = new ServiceFactory()
var AuthService = serviceFactory.createAuthService()

AuthService.authentication(passport)

//set up module routes
app.get('/login', AuthController.login)

module.exports = app;