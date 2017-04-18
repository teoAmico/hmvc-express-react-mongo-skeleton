'use-strict'
var BaseController = require('./BaseController')
var self = this
const path = require('path')

class HomeController extends BaseController {

    constructor(HomeService) {
        super()
        self.HomeService = HomeService
    }

    index(req, res, next) {
        self.HomeService.readPosts().then(posts => {
            console.log(posts)
            var data = {
                title: 'Skeleton'
            }
            res.render(path.join(__dirname, '/../resources/views/index.ejs'), data)
        }).catch(error => {
            console.log(error)
            res.send('500 An error occured!')
        })
    }
}

module.exports = HomeController