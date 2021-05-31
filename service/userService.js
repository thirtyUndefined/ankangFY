
const User = require('../models/user');
// md5加密库 我们用于对用户密码的加密
const md5 = require('md5');
// 信息验证
const validate = require('validate.js');


// 用户登录
exports.userLogin = async function(loginId, loginPwd) {
    loginPwd = md5(loginPwd);
    const result = await User.findOne({
        where: {
            loginId,
            loginPwd,
        }
    });
    if( result && result.loginId === loginId ) {
        return result.toJSON();
    }
};

// 添加用户
exports.userAdd = async function(userObj) {
    // 验证规则
    const rule = {
        loginId: {
            presence: {
                allowEmpty: false,
            },
            type: "string",
            length: 7
        },
        loginPwd: {
            presence: {
                allowEmpty: false,
            },
            type: "string",
            length: {
                minimum: 8,
                maximum: 16,
            }
        },
        name: {
            presence: {
                allowEmpty: false,
            },
            type: "string",
            length:{
                maximum: 10
            }  
        }
    }
    await validate.async(userObj, rule);
    // 对密码进行MD5加密
    userObj.loginPwd = md5(userObj.loginPwd);
    const result = await User.create(userObj);
    return result.toJSON();
};

// 修改用户
exports.userUpdate = async function(id, userObj) {
    if(userObj.loginPwd){
        userObj.loginPwd = md5(userObj.loginPwd);
    }
    const result = await User.update(userObj, {
        where: {
            id,
        }
    });
    return result;
}
// 删除用户
exports.userDelete = async function(id) {
    const result = await User.destroy({
        where: {
            id,
        }
    });
    return result;
};


// 查询用户
exports.userFindById = async function(id) {
    const result = await User.findByPk(id);
    if(result) {
        return result.toJSON();
    }else {
        return null;
    }
}