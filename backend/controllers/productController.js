const { Product } = require('../models');

// 获取所有农产品
const getAllProducts = async (req, res) => {
  try {
    const { page = 1, pageSize = 10, isHot, isNew } = req.query;
    
    const where = {};
    if (isHot) where.isHot = isHot === 'true';
    if (isNew) where.isNew = isNew === 'true';
    
    const offset = (page - 1) * pageSize;
    
    const { count, rows } = await Product.findAndCountAll({
      where,
      limit: parseInt(pageSize),
      offset: parseInt(offset),
      order: [['createdAt', 'DESC']]
    });
    
    res.status(200).json({
      total: count,
      page: parseInt(page),
      pageSize: parseInt(pageSize),
      products: rows
    });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 获取单个农产品
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: '农产品不存在' });
    }
    
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 创建农产品
const createProduct = async (req, res) => {
  try {
    const { productId, name, price, origin, stock, sales, description, details, plantingInfo, image, isHot, isNew } = req.body;
    
    // 检查productId是否已存在
    const existingProduct = await Product.findOne({ where: { productId } });
    if (existingProduct) {
      return res.status(400).json({ message: '产品编号已存在' });
    }
    
    const product = await Product.create({
      productId,
      name,
      price,
      origin,
      stock,
      sales,
      description,
      details,
      plantingInfo,
      image,
      isHot,
      isNew
    });
    
    res.status(201).json({ message: '农产品创建成功', product });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 更新农产品
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, origin, stock, sales, description, details, plantingInfo, image, isHot, isNew } = req.body;
    
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: '农产品不存在' });
    }
    
    await product.update({
      name,
      price,
      origin,
      stock,
      sales,
      description,
      details,
      plantingInfo,
      image,
      isHot,
      isNew
    });
    
    res.status(200).json({ message: '农产品更新成功', product });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 删除农产品
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: '农产品不存在' });
    }
    
    await product.destroy();
    
    res.status(200).json({ message: '农产品删除成功' });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};