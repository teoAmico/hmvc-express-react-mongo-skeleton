var express = require('express');
var path = require('path');
var info = require('./application.json');
var config = require('./config/config')
var indexRoute = require('./routes/index');

var app = express();

//routes
app.use(indexRoute);
//give access to module public folder
app.use(express.static(path.join(__dirname, 'public')));


if(config.app.application_env === 'local'){
    console.log('Loaded module: ' + info.name );
}

module.exports = {
    app : app,
    info : info
};