const sequelize = require('./db');
const {
    DataTypes
} = require('sequelize');

// 视频表                  
const Video = sequelize.define("Video", {
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
    videoUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    createdAt: "createTime",
    paranoid: true,
});

module.exports = Video;