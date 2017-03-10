var express = require('express');
var application = require('../middlewares/application');
var app = express();

//require middleware
app.use(application.test);

//set up module routes
var home = require('../controllers/homeController');
app.get('/',  home.index);

module.exports = app;