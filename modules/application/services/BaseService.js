'use-strict'
const mongodb = require('../config/config').db.mongodb
var Promise = require('rsvp').Promise;
var mongo = require('mongodb')

class BaseService {

    mongodb(callback){
        return new Promise(function (resolve, reject) {
            mongo.connect(mongodb.database, mongodb.user, mongodb.password, function (error, db) {
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
}

module.exports = BaseService