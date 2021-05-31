const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Types = sequelize.define("Types", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    count: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    createdAt: "createTime",
    updatedAt: "updateTime",
    paranoid: true,
});

module.exports = Types;

