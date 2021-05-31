require('./project');
require('./types');
require('./user');
require('./video');
require('./videoCommen');
require('./videoComReplay');
require('./image');
require('./imageCommen');
require('./imageComReplay');
const sequelize = require('./db');

sequelize.sync({ alter: true }).then(() => {
    console.log("所有模型同步完成！") 
})