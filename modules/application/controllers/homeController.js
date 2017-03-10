var config = require('../config/config');
//Services
var homeService = require('../services/homeService');


//Actions Controller
var actions = {};

actions.index = function(req, res, next){
    res.send(homeService.getMessage() + ' Enviroment: ' + config.app.application_env);
}


module.exports = actions;
