const Image = require('./image');
const User = require('./user');
const ImageComment = require('./imageCommen');
const ImageComReplay = require('./imageComReplay');

User.hasMany(Image);
Image.hasMany(ImageComment);
ImageComment.hasMany(ImageComReplay);
User.hasMany(ImageComReplay);
console.log("用户上传视频作品表关联成功");