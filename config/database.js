'use-strict'
const constants = require('../.env')

const database = {
    mongodb: {
            database: constants.MONGODB_URL,
            user: constants.MONGODB_USER,
            password: constants.MONGODB_PASSWORD
    }
}

module.exports = database
