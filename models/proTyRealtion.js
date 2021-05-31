// 将类型表和项目表关联
const Types = require('./types');
const Project = require('./project');

Project.belongsTo(Types);
Types.hasMany(Project);
console.log("项目模型关联成功");