//  cros 处理跨域问题
module.exports = function(req, res, next) {
    // 处理预检请求
    if(req.method === "OPTIONS") {
        console.log("预检请求")
        res.header("access-control-allow-methods", req.headers["access-control-request-method"]);
        res.header("access-control-allow-headers", req.headers["access-control-request-headers"]);
    }
    req.header("Access-Control-Allow-Credentials", true);
    // 简单请求
    if('origin' in req.headers) {
        res.header("access-control-allow-origin", req.headers.origin)
    }
    next();
}