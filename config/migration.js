//https://github.com/emirotin/mongodb-migrations
const config = require('../.env')
module.exports = {
    url: config.MONGODB_URL,
    directory: "/database/migrations"
}