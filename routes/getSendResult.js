// 封装错误返回格式
exports.getErro = function( err = "server internal error", errCode = 500) {
    return {
        code: errCode,
        msg: err,
    }
};

// 封装返回格式
exports.getResult = function(result) {
    return {
        code: 0,
        msg: "",
        data: result
    }
};

// 处理异步函数，解决报错问题

exports.asyncHandler = function(handler) {
    return async (req, res, next) => {
        try {
            const result = await handler(req, res, next);
            res.send(exports.getResult(result))
        }catch(err) {
            next(err)
        }
    }
};