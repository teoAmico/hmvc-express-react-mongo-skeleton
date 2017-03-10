var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//globals constant available in each config modules folder
CONFIG = require('./config');
//require all modules
var application = require('./modules/application/module');

//create app
var app = express();

//give access to public folder
app.use(express.static(path.join(__dirname, 'public')));

//load all module
app.use(application.app);


if(CONFIG.app.application_env === 'local'){
    console.log('Loaded module: ' + application.info.name );
}

module.exports = app;
