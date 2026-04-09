const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');

// 获取所有农产品
router.get('/', productController.getAllProducts);

// 获取单个农产品
router.get('/:id', productController.getProductById);

// 创建农产品（需要认证）
router.post('/', auth, productController.createProduct);

// 更新农产品（需要认证）
router.put('/:id', auth, productController.updateProduct);

// 删除农产品（需要认证）
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;