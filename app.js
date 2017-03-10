var express = require('express');
var path = require('path');

// available node modules
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');

//globals constant available in each config modules folder
CONFIG = require('./config');
//require all modules
var application = require('./modules/application/module');

//create app
var app = express();

//give access to public folder
app.use(express.static(path.join(__dirname, 'public')));

//give access to storage/app/public folder for uploaded file
app.use(express.static(path.join(__dirname, 'storage/app/public')));

//load all module
app.use(application.app);

//show log messages when application run on local enviroment
if(CONFIG.app.application_env === 'local'){
    console.log('Loaded module: ' + application.info.name );
}

module.exports = app;
