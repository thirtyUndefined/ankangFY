// 用来验证token的中间件

// 错误格式
const { getErro } = require("./getSendResult");
// 验证规则库
const { pathToRegexp } = require('path-to-regexp');
// 导入jwt严格验证
const jwt = require('./jwt');

const needTokenApi = [{
    method: "GET",
    path: "/api/user/whoami"
}];

module.exports = (req, res, next) => {
    // 过滤掉不需要验证的api
    const apis = needTokenApi.filter(api => {
        const reg = pathToRegexp(api.path);
        return api.method === req.method && reg.test(req.path);
    });
    // 如果apis的长度0 说明没有需要验证的api， 直接向下移交
   
    if(apis.length === 0) {
        next();
        return;
    };
    
    //  否则说明需要验证 jwt验证
    const result = jwt.verify(req);
    if(result) {
        req.userId = result.id;
        next();
    }else {
        // 认证失败
        return handleNoToken(req, res, next);
    }
};

function handleNoToken(req, res, next) {
    res.status(403).send(getErro("you don have any token to access api", 403));
}