const sequelize = require('./db');
const {
    DataTypes
} = require('sequelize');

//  遗产项目表
const Project = sequelize.define("Project", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    report: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pretect: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    createdAt: "createTime",
    updatedAt: "updateTime",
    paranoid: true,
});

module.exports = Project;