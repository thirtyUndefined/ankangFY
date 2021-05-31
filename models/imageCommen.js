const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const ImageComment = sequelize.define("ImageComment", {
    com_content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    createdAt: "creatTime",
});

module.exports = ImageComment;  