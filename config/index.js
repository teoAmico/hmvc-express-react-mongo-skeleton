var app = require("./app");
var database = require("./database");

//load all global configuration
var config = {
    app : app,
    database: database
};

module.exports = config;
