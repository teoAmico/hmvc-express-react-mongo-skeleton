var config = require('../config/config')
//Services
var homeService = require('../services/homeService')


//Actions Controller
var actions = {}

actions.index = function(req, res, next){
    homeService.setMessage('Hello world form MONGODB').then(function(result) {
        if (result) {
            homeService.getCountMessages().then(function(total){
                homeService.getMessage().then(function (result) {
                    var list = '';
                    result.forEach(function (value, err) {
                        list = list + value.message.toString() + '<br/>'
                    })
                    res.send('Enviroment: ' + config.app.application_env + '<br/>' +
                            'Show Records: ' + '<br/>' +
                        'Total records saved: ' + total + '<br/>' +
                        list)
                })
            })

        }else{
            res.send('Message not saved!')
        }
    },function (error) {
        console.log(error)
        res.send('Error see log')
    })
}


module.exports = actions
