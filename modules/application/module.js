var express = require('express');
var path = require('path');
var index = require('./routes/index');
var info = require('./application.json');
var app = express();
app.use(index);
//give access to module public folder
app.use(express.static(path.join(__dirname, 'public')));

module.exports = {
    app : app,
    info : info
};