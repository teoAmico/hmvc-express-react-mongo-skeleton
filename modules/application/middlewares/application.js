var middleware = {}

middleware.test = function(req,res,next){
    console.log("Call application middleware: test")
    next();
}

module.exports = middleware
