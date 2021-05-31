const express = require("express");
const router = express.Router();
const path = require('path');
// 当如multer  multipart消息体解析中间件
const multer = require('multer');
// const upload = multer({
//     dest: path.resolve(__dirname, "../../public/upload"),
// })

// 配置存储形式文件名称
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, "../../public/upload"));
    },
    filename: function (req, file, cb) {
        // 存储的文件名称  时间戳-随机六位字符-文件后缀名
        const timeStamp = Date.now();
        const randomStr = Math.random().toString(36).slice(-6);
        // 获取上传文件后缀名
        const ext = path.extname(file.originalname);
        const filename = `${timeStamp}-${randomStr}${ext}`
        cb(null, filename);
    }
});

const upload = multer({
    storage,
    limits: {
        // 最多200M
        fileSize:  200*1024 * 1024,
    }
});

const {
    asyncHandler
} = require('../getSendResult');
router.post("/", upload.single("img"), asyncHandler(async (req, res) => {
    return await `/upload/${req.file.filename}`;
}));

module.exports = router;