module.exports = {
    context: __dirname,
    entry: {
        'public/js/app' : __dirname + "/assets/js/app.jsx",
        'modules/application/public/js/application' : __dirname + "/modules/application/resources/assets/js/application.jsx"
    },
    output: {
        path: __dirname + '/',
        filename: "[name].min.js"
    },
    module: {
        rules : [
            {
                test: /\.scss$/,
                loaders: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"],
            }
        ]
    }
}