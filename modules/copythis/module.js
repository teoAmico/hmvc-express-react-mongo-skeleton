'use-strict'
var express = require('express')
var path = require('path')
var info = require('./info.json')
var config = require('./config/config')
var webRoutes = require('./routes/web')

var app = express()

//routes
app.use(webRoutes)
//give access to module public folder
app.use(express.static(path.join(__dirname, 'public')))


if(config.app.application_env === 'local'){
    console.log('Loaded module: ' + info.name )
}

module.exports = {
    app : app,
    info : info
}