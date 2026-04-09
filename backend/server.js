const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const routes = require('./routes');
const { User, Project, Product, Notice, Transaction } = require('./models');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 注册路由
app.use('/api', routes);

// 健康检查
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

// 同步数据库模型
async function syncDatabase() {
  try {
    await sequelize.sync({ alter: true });
    console.log('数据库模型同步成功');
  } catch (error) {
    console.error('数据库模型同步失败:', error);
  }
}

// 启动服务器
async function startServer() {
  try {
    // 同步数据库
    await syncDatabase();
    
    // 启动服务器
    app.listen(PORT, () => {
      console.log(`服务器运行在 http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('服务器启动失败:', error);
  }
}

startServer();