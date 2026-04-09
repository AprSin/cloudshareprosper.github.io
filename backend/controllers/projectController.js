const { Project } = require('../models');

// 获取所有交易项目
const getAllProjects = async (req, res) => {
  try {
    const { page = 1, pageSize = 10, type, status } = req.query;
    
    const where = {};
    if (type) where.type = type;
    if (status) where.status = status;
    
    const offset = (page - 1) * pageSize;
    
    const { count, rows } = await Project.findAndCountAll({
      where,
      limit: parseInt(pageSize),
      offset: parseInt(offset),
      order: [['createdAt', 'DESC']]
    });
    
    res.status(200).json({
      total: count,
      page: parseInt(page),
      pageSize: parseInt(pageSize),
      projects: rows
    });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 获取单个交易项目
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: '交易项目不存在' });
    }
    
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 创建交易项目
const createProject = async (req, res) => {
  try {
    const { projectId, title, description, area, contactPerson, contactInfo, date, status, type, isHot, isNew } = req.body;
    
    // 检查projectId是否已存在
    const existingProject = await Project.findOne({ where: { projectId } });
    if (existingProject) {
      return res.status(400).json({ message: '项目编号已存在' });
    }
    
    const project = await Project.create({
      projectId,
      title,
      description,
      area,
      contactPerson,
      contactInfo,
      date,
      status,
      type,
      isHot,
      isNew
    });
    
    res.status(201).json({ message: '交易项目创建成功', project });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 更新交易项目
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, area, contactPerson, contactInfo, date, status, type, isHot, isNew } = req.body;
    
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: '交易项目不存在' });
    }
    
    await project.update({
      title,
      description,
      area,
      contactPerson,
      contactInfo,
      date,
      status,
      type,
      isHot,
      isNew
    });
    
    res.status(200).json({ message: '交易项目更新成功', project });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 删除交易项目
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: '交易项目不存在' });
    }
    
    await project.destroy();
    
    res.status(200).json({ message: '交易项目删除成功' });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
};