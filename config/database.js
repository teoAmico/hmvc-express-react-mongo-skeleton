'use-strict'
const config = require('../.env')

module.exports = {
    mongodb: {
        database: config.MONGODB_URL,
        user: config.MONGODB_USER,
        password: config.MONGODB_PASSWORD
    },
    mysql: {
        //configuration here
    },
    mssql: {
        //configuration here
    }
}