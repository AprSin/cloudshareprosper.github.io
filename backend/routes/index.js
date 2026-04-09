const express = require('express');
const router = express.Router();

// 导入各模块路由
const authRoutes = require('./authRoutes');
const projectRoutes = require('./projectRoutes');
const productRoutes = require('./productRoutes');
const noticeRoutes = require('./noticeRoutes');
const transactionRoutes = require('./transactionRoutes');

// 注册路由
router.use('/auth', authRoutes);
router.use('/projects', projectRoutes);
router.use('/products', productRoutes);
router.use('/notices', noticeRoutes);
router.use('/transactions', transactionRoutes);

module.exports = router;