'use-strict'
var express = require('express');
var app = express();

var TestMiddleware = require('../middlewares/TestMiddleware');
var testMiddleware = new TestMiddleware() 

app.use(testMiddleware.test);

//set up module routes
var HomeController = require('../controllers/HomeController');
var HomeService = require('../services/HomeService');
var home = new HomeController(new HomeService())

app.get('/',  home.index);

module.exports = app;