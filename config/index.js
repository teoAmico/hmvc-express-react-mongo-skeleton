'use-strict'
const app = require("./app")
const database = require("./database")

const config = {
    app : app,
    db: database
}

module.exports = config
