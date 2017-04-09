var assert = require('assert')

var service = {}

service.getMessage = function(){
    return mongodb(function(db){
         return db.collection('post').find().toArray()
    })
}
service.getCountMessages = function(){
    return mongodb(function(db){
        return db.collection('post').count()
    })
}

service.setMessage = function(message){
    return mongodb(function(db){
        return db.collection('post').insertOne({'message': message}).then(function(result){
            return result.ops[0]._id
        })
    })
}
module.exports = service
