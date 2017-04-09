var constants = require('../.env');
var database = {
    mongodb: {
            database: constants.MONGODB_URL,
            user: constants.MONGODB_USER,
            password: constants.MONGODB_PASSWORD
    }
}

module.exports = database;
