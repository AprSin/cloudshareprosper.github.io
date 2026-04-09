const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const auth = require('../middleware/auth');

// 获取所有交易项目
router.get('/', projectController.getAllProjects);

// 获取单个交易项目
router.get('/:id', projectController.getProjectById);

// 创建交易项目（需要认证）
router.post('/', auth, projectController.createProject);

// 更新交易项目（需要认证）
router.put('/:id', auth, projectController.updateProject);

// 删除交易项目（需要认证）
router.delete('/:id', auth, projectController.deleteProject);

module.exports = router;