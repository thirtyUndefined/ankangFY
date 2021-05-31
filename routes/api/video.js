const express = require('express');
const router = express.Router();

const videoService = require('../../service/video');
const { asyncHandler } = require('../getSendResult');

// 上传动态api
router.post("/sendVideo", asyncHandler(async (req, res) => {
    return await videoService.videoAdd(req.body);
}));

// 获取动态api
router.get("/", asyncHandler(async (req, res) => {
    return await videoService.videoFindAll();
}))

module.exports = router;