const Types = require('../models/types');

// const validate = require('validate.js');

// 添加非遗类型
exports.typesAdd = async function(type) {
    const result = await Types.create(type);
    return result.toJSON();
};

exports.typesFindAll = async function() {
    const result = await Types.findAll();
    return result;
}