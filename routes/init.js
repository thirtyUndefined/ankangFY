const express = require('express');
const app = express();
const path = require("path");
// 导入用户api
const userApi = require('./api/user');
const uploadApi = require('./api/upload');
const typesApi = require('./api/types');
const projectApi = require('./api/project');
const videoApi = require('./api/video');
// 处理跨域问题
app.use(require('./corsMiddle'));

// 登录验证中间件 jwt验证
app.use(require('./tokenMiddle'));

// 处理静态资源中间件
const staticPublic = path.resolve(__dirname, "../public");
app.use(express.static(staticPublic));

//  获取url传递参数中间件
app.use(express.urlencoded({
    //  允许json格式 body 传参
    extended: true,
}));

// 获取JSON格式发送的数据中间件
app.use(express.json());

// 用户api
app.use("/api/user", userApi);
app.use("/api/upload", uploadApi);
app.use("/api/types", typesApi);
app.use("/api/project", projectApi);
app.use("/api/video", videoApi);

// 导入错误处理中间件， app.use 可以捕获baseUrl
app.use("/api/user", require('./erroMiddle'));

// 服务器端口号
const port = 3033;

app.listen(port, () => {
    console.log(`${port}端口已被监听!`)
})