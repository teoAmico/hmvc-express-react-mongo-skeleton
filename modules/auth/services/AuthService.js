'use-strict'
var BaseService = require('./BaseService')
var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt
var jwt = require('jsonwebtoken')
var config = require('../config/config')
var self = this

class AuthService extends BaseService {

    constructor(userService) {
        super()
        self.userService = userService
    }

    authentication(passport){
        var User = self.userService.user()
        var opts= {}
        opts.jwtFromRequest = ExtractJwt.fromAuthHeader()
        opts.secretOrKey = config.app.app_key
        passport.use(new JwtStrategy(opts, function(jwt_payload, done){
            User.findOne({id: jwt_payload.id},function(err, user){
                if(err){
                    return done(err,false)
                }
                if(user){
                    return done(null, user)
                }
                return done(null, false)
            })
        }))
    }
  
}

module.exports = AuthService