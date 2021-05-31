// jwt验证 jwon WEB TOKEN 适合所有终端的验证方式

// 密钥
const key = "thirty";

// 导入第三方库 jwt
const jwt = require('jsonwebtoken');

// 颁发jwt

exports.publish = function (res, maxAge = 3600 * 24, info = {}) {
    const token = jwt.sign(info, key, {
        expiresIn: maxAge,
    });
    res.header("authorization", token);
};

// 验证jwt

exports.verify = function (req) {
    let token;
    token = req.headers.authorization;
    if (!token) {
        // 如果没有token说明没有登录
        return null;
    };
    // 服务器在严格模式下 附带的消息头会存在 bearer(附带), 因此我们在这里需要手动处理
    token = token.split(" ");
    token = token.length === 1 ? token[0] : token[1];

    // 获取token后进行严格验证
    try {
        const result = jwt.verify(token, key);
        return result;
    } catch (err) {
        return null;
    }
}