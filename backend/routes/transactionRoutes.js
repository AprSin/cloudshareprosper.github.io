const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const auth = require('../middleware/auth');

// 获取所有交易记录
router.get('/', auth, transactionController.getAllTransactions);

// 获取单个交易记录
router.get('/:id', auth, transactionController.getTransactionById);

// 创建交易记录（需要认证）
router.post('/', auth, transactionController.createTransaction);

// 更新交易记录（需要认证）
router.put('/:id', auth, transactionController.updateTransaction);

// 删除交易记录（需要认证）
router.delete('/:id', auth, transactionController.deleteTransaction);

// 获取交易统计数据
router.get('/stats/summary', transactionController.getTransactionStats);

module.exports = router;