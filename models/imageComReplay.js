const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const ImageReplay = sequelize.define("ImageReplay", {
    replay_content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = ImageReplay;