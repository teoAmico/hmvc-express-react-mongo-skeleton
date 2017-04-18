'use-strict'
var BaseService = require('./BaseService')
var bcrypt = require('bcrypt')
var self = this

class UserService extends BaseService {

    constructor() {
        super()
        self.mongoose = this.mongoose()
    }

    user() {
        var UserSchema = this.getUserSchema()
        UserSchema.pre('save', this.hashPassword)
        UserSchema.methods.comparePassword = this.comparePassword
        var user = self.mongoose.model('User', UserSchema)
        return user
    }

    hashPassword(next) {
        var user = this
        if (this.isModified('password') || this.isNew) {
            bcrypt.genSalt(10, function (err, salt) {
                if (err) {
                    return next(err)
                }
                bcrypt.hash(user.password, salt, function (err, hash) {
                    if (err) {
                        return next(err)
                    }
                    user.password = hash
                    return next()
                })
            })
        } else {
            return next()
        }
    }

    comparePassword(pw,cb){
        bcrypt.compare(pw, self.password, function(err, isMatch){
            if(err){
                return cb(err)
            }
            return cb(null, isMatch)
        })
    }

    getUserSchema(){
        return new self.mongoose.Schema({
            email: {
                type: 'String',
                lowercase: true,
                unique: true,
                required: true
            },
            password: {
                type: 'String',
                required: true
            },
            role: {
                type: 'String',
                enum: ['client', 'admin'],
                default: 'client'
            }
        })
    }
}

module.exports = UserService