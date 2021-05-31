// 处理错误中间件
const sendMsg = require('./getSendResult');

const multer = require('multer');


module.exports = (erro, req, res, next) => {
    if (erro) {
        if (erro instanceof multer.MulterError) {
            res.status(200).send(sendMsg.getErro(erro.message));
            return;
        }
        const erroObj = erro instanceof Error ? erro.message : erro;

        res.status(500).send(sendMsg.getErro(erroObj));
    } else {
        next();
    }
}