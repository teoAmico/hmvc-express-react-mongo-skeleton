const app = require("./app");
const database = require("./database");

//load all global configuration
const config = {
    app : app,
    db: database
};

module.exports = config;
