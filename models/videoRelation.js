const Comment = require('./videoCommen');
const Video = require('./video');
const Replay = require('./videoComReplay');
const User = require('./user');

User.hasMany(Video);
User.hasMany(Replay);
Video.hasMany(Comment);
Comment.hasMany(Replay);
console.log("用户上传图片作品表关联成功");