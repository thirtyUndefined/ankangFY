// 导入orm框架， sequelize, 数据库驱动程序，更好的管理数据库
const { Sequelize } = require('sequelize');

// 创建sequelize实例，链接到本地数据库(数据库名称，用户名， 密码， {})
const sequelize = new Sequelize("ankang_map", "root", "wl2602756824", {
    host: "localhost",
    dialect: "mysql",
    logging: false,  // 不适用日志记录
})

module.exports = sequelize;