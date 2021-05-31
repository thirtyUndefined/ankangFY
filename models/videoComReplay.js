const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const VideoReplay = sequelize.define("VideoReplay", {
    replay_content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = VideoReplay;