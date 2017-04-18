'use-strict'
var BaseService = require('./BaseService')
var self = this

class HomeService extends BaseService {
    
    constructor(){
        super()
    }

    createPost(post){
        return this.mongo(function(db){
            return db.collection('post').insertOne(post).then(function(result){
                return result.ops[0]._id
            })
        })
    }

    readPosts(){
        return this.mongo(function(db){
            return db.collection('post').find().toArray()
        })
    }

    deletePost(id){
        return this.mongo(function(db){
            return db.collection('post').deleteOne({ _id : id}).then(function(result){
                return true
            })
        })
    }
}

module.exports = HomeService
