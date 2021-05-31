const express = require('express');
const router = express.Router();

// types的业务逻辑处理
const projectService = require('../../service/project');
const { asyncHandler } = require('../getSendResult');

router.get("/", asyncHandler(async (req, res) => {
    return await projectService.typesFindAll();
}));
module.exports = router;