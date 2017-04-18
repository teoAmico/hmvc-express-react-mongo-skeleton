'use-strict'
var BaseController = require('./BaseController')
var path = require('path')
var self = this

class HomeController extends BaseController {

    constructor(HomeService) {
        super()
        self.HomeService = HomeService
    }

    index(req, res, next) {
        // example use HomeService with promisise
        // self.HomeService.readPosts().then(posts => {
        //     console.log(posts)
        //     var data = {
        //         title: 'Skeleton'
        //     }
        //     res.render(path.join(__dirname, '/../resources/views/index.ejs'), data)
        // }).catch(error => {
        //     console.log(error)
        //     res.send('500 An error occured!')
        // })
        
        var data = {
                title: 'Scaffolding App'
        }
        res.render(path.join(__dirname, '/../resources/views/index.ejs'), data)
    }
}

module.exports = HomeController