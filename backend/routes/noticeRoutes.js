const express = require('express');
const router = express.Router();
const noticeController = require('../controllers/noticeController');
const auth = require('../middleware/auth');

// 获取所有通知公告
router.get('/', noticeController.getAllNotices);

// 获取单个通知公告
router.get('/:id', noticeController.getNoticeById);

// 创建通知公告（需要认证）
router.post('/', auth, noticeController.createNotice);

// 更新通知公告（需要认证）
router.put('/:id', auth, noticeController.updateNotice);

// 删除通知公告（需要认证）
router.delete('/:id', auth, noticeController.deleteNotice);

module.exports = router;