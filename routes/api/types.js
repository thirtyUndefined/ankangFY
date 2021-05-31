const express = require('express');
const router = express.Router();

// types的业务逻辑处理
const typesService = require('../../service/types');
const { asyncHandler } = require('../getSendResult');

router.get("/", asyncHandler(async (req, res) => {
    return await typesService.typesFindAll();
}));
module.exports = router;