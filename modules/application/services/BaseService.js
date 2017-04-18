'use-strict'
const mongoConfig = require('../config/config').db.mongodb
var Promise = require('rsvp').Promise
const mongo = require('mongodb')
const mongoose = require('mongoose')
var self = this

class BaseService {

    mongo(callback) {
        return new Promise(function (resolve, reject) {
            mongo.connect(mongoConfig.database, mongoConfig.user, mongoConfig.password, function (error, db) {
                if (error) {
                    reject(error)
                } else {
                    var result = callback(db)
                    db.close()
                    resolve(result)
                }
            })
        })
    }

    mongoose() {
        return mongoose
    }
}

module.exports = BaseService