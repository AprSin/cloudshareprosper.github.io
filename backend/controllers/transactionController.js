const { Transaction, User } = require('../models');

// 获取所有交易记录
const getAllTransactions = async (req, res) => {
  try {
    const { page = 1, pageSize = 10, type, status, userId } = req.query;
    
    const where = {};
    if (type) where.type = type;
    if (status) where.status = status;
    if (userId) where.userId = userId;
    
    const offset = (page - 1) * pageSize;
    
    const { count, rows } = await Transaction.findAndCountAll({
      where,
      limit: parseInt(pageSize),
      offset: parseInt(offset),
      include: [{
        model: User,
        attributes: ['id', 'username', 'name']
      }],
      order: [['transactionDate', 'DESC']]
    });
    
    res.status(200).json({
      total: count,
      page: parseInt(page),
      pageSize: parseInt(pageSize),
      transactions: rows
    });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 获取单个交易记录
const getTransactionById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const transaction = await Transaction.findByPk(id, {
      include: [{
        model: User,
        attributes: ['id', 'username', 'name']
      }]
    });
    if (!transaction) {
      return res.status(404).json({ message: '交易记录不存在' });
    }
    
    res.status(200).json({ transaction });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 创建交易记录
const createTransaction = async (req, res) => {
  try {
    const { transactionId, userId, type, itemId, amount, status } = req.body;
    
    // 检查transactionId是否已存在
    const existingTransaction = await Transaction.findOne({ where: { transactionId } });
    if (existingTransaction) {
      return res.status(400).json({ message: '交易编号已存在' });
    }
    
    const transaction = await Transaction.create({
      transactionId,
      userId,
      type,
      itemId,
      amount,
      status
    });
    
    res.status(201).json({ message: '交易记录创建成功', transaction });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 更新交易记录
const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const transaction = await Transaction.findByPk(id);
    if (!transaction) {
      return res.status(404).json({ message: '交易记录不存在' });
    }
    
    await transaction.update({ status });
    
    res.status(200).json({ message: '交易记录更新成功', transaction });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 删除交易记录
const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    
    const transaction = await Transaction.findByPk(id);
    if (!transaction) {
      return res.status(404).json({ message: '交易记录不存在' });
    }
    
    await transaction.destroy();
    
    res.status(200).json({ message: '交易记录删除成功' });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

// 获取交易统计数据
const getTransactionStats = async (req, res) => {
  try {
    // 总交易金额
    const totalAmountResult = await Transaction.sum('amount', {
      where: { status: 'completed' }
    });
    const totalAmount = totalAmountResult || 0;
    
    // 交易成功率
    const totalTransactions = await Transaction.count();
    const completedTransactions = await Transaction.count({
      where: { status: 'completed' }
    });
    const successRate = totalTransactions > 0 ? (completedTransactions / totalTransactions) * 100 : 0;
    
    // 交易类型分布
    const typeDistribution = await Transaction.findAll({
      attributes: ['type', [Transaction.sequelize.fn('COUNT', Transaction.sequelize.col('id')), 'count']],
      group: ['type']
    });
    
    // 月度交易趋势
    const monthlyTrend = await Transaction.findAll({
      attributes: [
        [Transaction.sequelize.fn('DATE_FORMAT', Transaction.sequelize.col('transactionDate'), '%Y-%m'), 'month'],
        [Transaction.sequelize.fn('SUM', Transaction.sequelize.col('amount')), 'amount']
      ],
      where: { status: 'completed' },
      group: ['month'],
      order: [['month', 'ASC']]
    });
    
    res.status(200).json({
      totalAmount,
      successRate: parseFloat(successRate.toFixed(1)),
      typeDistribution,
      monthlyTrend
    });
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

module.exports = {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactionStats
};