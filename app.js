'use-strict'
var config = require('./config')
var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
// var favicon = require('serve-favicon');
var logger = require('morgan')
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
//app modules
var application = require('./modules/application/module')
var auth = require('./modules/auth/module')
var ejsLayouts = require("express-ejs-layouts")

//connect mongoose to database
mongoose.connect(config.db.mongodb.database)

//create new express app
var app = express()

//log url request
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(logger('dev'))

//give access to public folder
app.use(express.static(path.join(__dirname, 'public')))
//give access to storage/app/public folder to upload files
app.use(express.static(path.join(__dirname, 'storage/app/public')))
//setup template engine
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.set('layout', '../modules/application/resources/views/partials/layout.ejs');

//load all app modules
app.use(auth)
app.use(application)

module.exports = app
