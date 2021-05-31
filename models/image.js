const sequelize = require('./db');
const {
    DataTypes
} = require('sequelize');

// 视频表                  
const Image = sequelize.define("Image", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    biaoqian: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    introduction: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    describe: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    createdAt: "createTime",
    paranoid: true,
});

module.exports = Image;