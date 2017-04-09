
class TestMiddleware {
    test(req,res,next){
        console.log("Call application middleware: test")
        next();
    }
}

module.exports = TestMiddleware
