import axios from 'axios';

// 创建axios实例
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器
api.interceptors.request.use(
  config => {
    // 从localStorage获取token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error.response && error.response.status === 401) {
      // 未授权，清除token并跳转到登录页
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// 认证相关API
export const authApi = {
  // 注册
  register: (data) => api.post('/auth/register', data),
  // 登录
  login: (data) => api.post('/auth/login', data),
  // 获取用户信息
  getUserInfo: () => api.get('/auth/userinfo')
};

// 交易项目相关API
export const projectApi = {
  // 获取所有交易项目
  getAllProjects: (params) => api.get('/projects', { params }),
  // 获取单个交易项目
  getProjectById: (id) => api.get(`/projects/${id}`),
  // 创建交易项目
  createProject: (data) => api.post('/projects', data),
  // 更新交易项目
  updateProject: (id, data) => api.put(`/projects/${id}`, data),
  // 删除交易项目
  deleteProject: (id) => api.delete(`/projects/${id}`)
};

// 农产品相关API
export const productApi = {
  // 获取所有农产品
  getAllProducts: (params) => api.get('/products', { params }),
  // 获取单个农产品
  getProductById: (id) => api.get(`/products/${id}`),
  // 创建农产品
  createProduct: (data) => api.post('/products', data),
  // 更新农产品
  updateProduct: (id, data) => api.put(`/products/${id}`, data),
  // 删除农产品
  deleteProduct: (id) => api.delete(`/products/${id}`)
};

// 通知公告相关API
export const noticeApi = {
  // 获取所有通知公告
  getAllNotices: (params) => api.get('/notices', { params }),
  // 获取单个通知公告
  getNoticeById: (id) => api.get(`/notices/${id}`),
  // 创建通知公告
  createNotice: (data) => api.post('/notices', data),
  // 更新通知公告
  updateNotice: (id, data) => api.put(`/notices/${id}`, data),
  // 删除通知公告
  deleteNotice: (id) => api.delete(`/notices/${id}`)
};

// 交易数据相关API
export const transactionApi = {
  // 获取所有交易记录
  getAllTransactions: (params) => api.get('/transactions', { params }),
  // 获取单个交易记录
  getTransactionById: (id) => api.get(`/transactions/${id}`),
  // 创建交易记录
  createTransaction: (data) => api.post('/transactions', data),
  // 更新交易记录
  updateTransaction: (id, data) => api.put(`/transactions/${id}`, data),
  // 删除交易记录
  deleteTransaction: (id) => api.delete(`/transactions/${id}`),
  // 获取交易统计数据
  getTransactionStats: () => api.get('/transactions/stats/summary')
};

export default api;