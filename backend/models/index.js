const User = require('./User');
const Project = require('./Project');
const Product = require('./Product');
const Notice = require('./Notice');
const Transaction = require('./Transaction');

// 定义模型之间的关系
// Transaction 与 User 的关系
Transaction.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Transaction, { foreignKey: 'userId' });

module.exports = {
  User,
  Project,
  Product,
  Notice,
  Transaction
};