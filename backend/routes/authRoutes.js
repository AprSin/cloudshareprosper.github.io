const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// 注册
router.post('/register', authController.register);

// 登录
router.post('/login', authController.login);

// 获取用户信息（需要认证）
router.get('/userinfo', auth, authController.getUserInfo);

module.exports = router;