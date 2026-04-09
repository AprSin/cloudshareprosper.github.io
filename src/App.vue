<template>
  <div class="app-container">
    <!-- 顶部导航栏 -->
    <header class="header">
      <!-- 平台昵称和Logo -->
      <div class="top-bar">
        <div class="top-container">
          <div class="logo-section">
            <img src="https://i.postimg.cc/YCfLYWDq/9b4d50260b05d6441d441d5a9b346550.png" alt="云上共富" class="logo-image">
            <div class="platform-info">
              <h1 class="platform-name">云上共富</h1>
              <p class="platform-subtitle">基于AIOT的农村集体经济数字化平台</p>
            </div>
          </div>
          <div class="user-section">
            <div v-if="isLoggedIn" class="user-info" @click="goToUserCenter">
              <span class="user-name">{{ userInfo.name || userInfo.username }}</span>
            </div>
            <div v-else class="login-btn" @click="showLoginDialog = true">
              <div class="avatar-placeholder">
                <span>登录</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 导航菜单 -->
      <div class="nav-container">
        <nav class="nav">
          <div class="nav-grid">
            <router-link to="/" class="nav-item">
              <span class="nav-text">首页</span>
            </router-link>
            <router-link to="/projects" class="nav-item">
              <span class="nav-text">交易项目</span>
            </router-link>
            <router-link to="/products" class="nav-item">
              <span class="nav-text">农产品交易</span>
            </router-link>
            <router-link to="/notices" class="nav-item">
              <span class="nav-text">通知公告</span>
            </router-link>

            <router-link to="/data" class="nav-item">
              <span class="nav-text">交易大数据</span>
            </router-link>
            <router-link to="/guide" class="nav-item">
              <span class="nav-text">交易指南</span>
            </router-link>
            <router-link to="/download" class="nav-item">
              <span class="nav-text">资料下载</span>
            </router-link>
            <router-link to="/contact" class="nav-item">
              <span class="nav-text">联系我们</span>
            </router-link>
          </div>
        </nav>
      </div>
    </header>

    <!-- 主内容区 -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="https://i.postimg.cc/YCfLYWDq/9b4d50260b05d6441d441d5a9b346550.png" alt="云上共富">
          <div class="footer-info">
            <h2>云上共富</h2>
            <p>基于AIOT的农村集体经济数字化平台</p>
          </div>
        </div>
        <div class="footer-links">
          <router-link to="/">首页</router-link>
          <router-link to="/projects">交易项目</router-link>
          <router-link to="/products">农产品交易</router-link>
          <router-link to="/notices">通知公告</router-link>
          <router-link to="/data">交易大数据</router-link>
          <router-link to="/guide">交易指南</router-link>
          <router-link to="/download">资料下载</router-link>
          <router-link to="/contact">联系我们</router-link>
        </div>
        <div class="footer-bottom">
          <p>赋能农村经济数字化</p>
          <p>由共富云创团队制</p>
          <p>Copyright © 2026 All Right Reserved</p>
        </div>
      </div>
    </footer>

    <!-- 登录弹窗 -->
    <div v-if="showLoginDialog" class="login-dialog">
      <div class="login-dialog-content">
        <h3>用户登录</h3>
        <div class="login-form">
          <div class="form-group">
            <label for="username">用户名</label>
            <input type="text" id="username" v-model="loginForm.username" placeholder="请输入用户名">
          </div>
          <div class="form-group">
            <label for="password">密码</label>
            <input type="password" id="password" v-model="loginForm.password" placeholder="请输入密码">
          </div>
          <div class="form-actions">
            <button @click="login">登录</button>
            <button @click="showLoginDialog = false">取消</button>
          </div>
          <div class="form-footer">
            <span>还没有账号？</span>
            <a @click="showRegisterDialog = true; showLoginDialog = false">立即注册</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 注册弹窗 -->
    <div v-if="showRegisterDialog" class="login-dialog">
      <div class="login-dialog-content">
        <h3>用户注册</h3>
        <div class="login-form">
          <div class="form-group">
            <label for="reg-username">用户名</label>
            <input type="text" id="reg-username" v-model="registerForm.username" placeholder="请输入用户名">
          </div>
          <div class="form-group">
            <label for="reg-password">密码</label>
            <input type="password" id="reg-password" v-model="registerForm.password" placeholder="请输入密码">
          </div>
          <div class="form-group">
            <label for="reg-name">姓名</label>
            <input type="text" id="reg-name" v-model="registerForm.name" placeholder="请输入姓名">
          </div>
          <div class="form-group">
            <label for="reg-phone">电话</label>
            <input type="text" id="reg-phone" v-model="registerForm.phone" placeholder="请输入电话">
          </div>
          <div class="form-group">
            <label for="reg-email">邮箱</label>
            <input type="email" id="reg-email" v-model="registerForm.email" placeholder="请输入邮箱">
          </div>
          <div class="form-actions">
            <button @click="register">注册</button>
            <button @click="showRegisterDialog = false">取消</button>
          </div>
          <div class="form-footer">
            <span>已有账号？</span>
            <a @click="showLoginDialog = true; showRegisterDialog = false">立即登录</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authApi } from './api';

export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false,
      userInfo: {},
      showLoginDialog: false,
      showRegisterDialog: false,
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        password: '',
        name: '',
        phone: '',
        email: ''
      }
    }
  },
  mounted() {
    // 检查用户是否已登录
    this.checkLoginStatus();
  },
  methods: {
    goToUserCenter() {
      this.$router.push('/user')
    },
    async checkLoginStatus() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await authApi.getUserInfo();
          this.isLoggedIn = true;
          this.userInfo = response.user;
        } catch (error) {
          //  token无效，清除token
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          this.isLoggedIn = false;
          this.userInfo = {};
        }
      }
    },
    async login() {
      try {
        const response = await authApi.login(this.loginForm);
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.isLoggedIn = true;
        this.userInfo = response.user;
        this.showLoginDialog = false;
        alert('登录成功');
      } catch (error) {
        alert('登录失败：' + (error.response?.data?.message || '用户名或密码错误'));
      }
    },
    async register() {
      try {
        const response = await authApi.register(this.registerForm);
        this.showRegisterDialog = false;
        this.showLoginDialog = true;
        alert('注册成功，请登录');
      } catch (error) {
        alert('注册失败：' + (error.response?.data?.message || '注册失败'));
      }
    }
  }
}
</script>

<style scoped>
/* 登录弹窗样式 */
.login-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.login-dialog-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
}

.login-dialog-content h3 {
  margin-top: 0;
  text-align: center;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group label {
  font-size: 14px;
  color: #666;
}

.form-group input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.form-actions button {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.form-actions button:first-child {
  background-color: #4CAF50;
  color: white;
}

.form-actions button:last-child {
  background-color: #f5f5f5;
  color: #333;
}

.form-footer {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  color: #666;
}

.form-footer a {
  color: #4CAF50;
  cursor: pointer;
  text-decoration: none;
}

.form-footer a:hover {
  text-decoration: underline;
}
</style>

<style scoped>
/* 导航链接激活状态 */
.nav-item {
  text-decoration: none;
}

.nav-item.router-link-active .nav-text {
  color: #4CAF50;
  font-weight: bold;
}

/* 页面过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .main-content {
    padding-top: 10px;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding-top: 5px;
  }
}
</style>