const express = require('express');
// 使用路由
const router = express.Router();

// 导入jwt 登录时颁发jwt
const jwt = require('../jwt');

// 导入user业务逻辑处理
const userService = require('../../service/userService');
// 导入消息封装模块
const { asyncHandler } = require('../getSendResult');
router.post("/login", asyncHandler(async (req, res) => {
    const result = await userService.userLogin(req.body.loginId, req.body.loginPwd);
    if(result) {
        let value = result.id;
        jwt.publish(res, undefined, {id: value});
    }
    return result;
}));

router.get("/whoami", asyncHandler(async (req, res) => {
    return await userService.userFindById(req.userId);
}))

// 注册接口
router.post("/regist", asyncHandler(async (req, res) => {
    return await userService.userAdd(req.body);
}))

module.exports = router;