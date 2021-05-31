const Project = require('../models/project');

exports.projectFindAll = async function() {
    const result = await Project.findAll();
    return result;
};

exports.projectAdd = async function(project) {
    const result = await Project.create(project);
    return result.toJSON();
};