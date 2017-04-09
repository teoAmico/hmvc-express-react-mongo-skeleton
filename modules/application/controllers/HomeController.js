'use-strict'
var BaseController = require('./BaseController')
var self = this

class HomeController extends BaseController{

    constructor(HomeService){
        super()
        self.HomeService = HomeService
    }

    index(req, res, next){
        self.HomeService.readPosts().then(posts => {
            console.log(posts)
            res.send(posts)
        }).catch(error => {
            console.log(error)
            res.send('500 An error occured!')
        })
    }
}

module.exports = HomeController