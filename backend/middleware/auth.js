const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
  try {
    // 从请求头中获取token
    const token = req.header('Authorization').replace('Bearer ', '');
    
    // 验证token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 将用户信息存储在请求对象中
    req.user = decoded;
    
    next();
  } catch (error) {
    res.status(401).json({ message: '认证失败，请重新登录' });
  }
};

module.exports = auth;