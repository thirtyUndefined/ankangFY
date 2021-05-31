const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const VideoComment = sequelize.define("VideoComment", {
    com_content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    createdAt: "creatTime",
});

module.exports = VideoComment;  