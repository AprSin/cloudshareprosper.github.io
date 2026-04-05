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
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false,
      userInfo: {},
      showLoginDialog: false
    }
  },
  methods: {
    goToUserCenter() {
      this.$router.push('/user')
    }
  }
}
</script>

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