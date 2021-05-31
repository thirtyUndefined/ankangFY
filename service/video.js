const Video = require('../models/video');

// 添加视频动态
exports.videoAdd = async function(videoObj) {
    const result = await Video.create(videoObj);
    return result;
};

// 查询所有动态
exports.videoFindAll = async function() {
    const result = await Video.findAll();
    return result;
}