var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        'public/js/app' : __dirname + "/assets/js/app.js",
        'modules/application/public/js/application' : __dirname + "/modules/application/resources/assets/js/module.js"
    },
    output: {
        path: __dirname + '/',
        filename: "[name].min.js"
    }
}