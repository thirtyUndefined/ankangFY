const sequelize = require('./db');
const { DataTypes } = require('sequelize');

//  用户注册信息表
const User = sequelize.define("User", {
    loginId: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
    }
}, {
    createdAt: "createTime",
    updatedAt: "updateTime",
    paranoid: true,
});

module.exports = User;