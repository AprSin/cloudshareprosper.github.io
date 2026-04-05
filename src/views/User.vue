<template>
  <div class="user-container">
    <h1>个人中心</h1>
    <div class="user-content">
      <div class="user-sidebar">
        <div class="user-info">
          <div class="avatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <h2>用户中心</h2>
          <p>欢迎回来！</p>
        </div>
        <ul class="user-menu">
          <li @click="activeTab = 'profile'" :class="{ active: activeTab === 'profile' }">个人信息</li>
          <li @click="activeTab = 'projects'" :class="{ active: activeTab === 'projects' }">我的项目</li>
          <li @click="activeTab = 'products'" :class="{ active: activeTab === 'products' }">我的农产品</li>
          <li @click="activeTab = 'orders'" :class="{ active: activeTab === 'orders' }">我的订单</li>
          <li @click="activeTab = 'bids'" :class="{ active: activeTab === 'bids' }">我的投标</li>
          <li @click="activeTab = 'settings'" :class="{ active: activeTab === 'settings' }">账号设置</li>
        </ul>
      </div>
      <div class="user-main">
        <div v-if="activeTab === 'profile'">
          <h2>个人信息</h2>
          <form class="profile-form">
            <div class="form-group">
              <label>姓名</label>
              <input type="text" v-model="userInfo.name" placeholder="请输入姓名">
            </div>
            <div class="form-group">
              <label>电话</label>
              <input type="tel" v-model="userInfo.phone" placeholder="请输入电话">
            </div>
            <div class="form-group">
              <label>邮箱</label>
              <input type="email" v-model="userInfo.email" placeholder="请输入邮箱">
            </div>
            <div class="form-group">
              <label>地址</label>
              <input type="text" v-model="userInfo.address" placeholder="请输入地址">
            </div>
            <button type="submit" class="btn btn-primary">保存修改</button>
          </form>
        </div>
        <div v-if="activeTab === 'projects'">
          <h2>我的项目</h2>
          <div class="project-list">
            <div class="project-item">
              <h3>商丘市梁园区谢集镇杨波村宅基地出租</h3>
              <p>项目编号: SQ2026001</p>
              <p>发布日期: 2024-12-15</p>
              <p>状态: 交易中</p>
              <div class="project-actions">
                <a href="#" class="btn btn-secondary">查看详情</a>
                <a href="#" class="btn btn-primary">管理</a>
              </div>
            </div>
            <div class="project-item">
              <h3>商丘市梁园区谢集镇东街村村中心广场西侧厂房出租</h3>
              <p>项目编号: SQ2026002</p>
              <p>发布日期: 2024-12-10</p>
              <p>状态: 已完成</p>
              <div class="project-actions">
                <a href="#" class="btn btn-secondary">查看详情</a>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activeTab === 'products'">
          <h2>我的农产品</h2>
          <div class="product-list">
            <div class="product-item">
              <h3>商丘市梁园区优质小麦</h3>
              <p>价格: ¥2.5/斤</p>
              <p>发布日期: 2024-12-15</p>
              <p>状态: 在售</p>
              <div class="product-actions">
                <a href="#" class="btn btn-secondary">查看详情</a>
                <a href="#" class="btn btn-primary">管理</a>
              </div>
            </div>
            <div class="product-item">
              <h3>商丘市梁园区绿色蔬菜</h3>
              <p>价格: ¥3.0/斤</p>
              <p>发布日期: 2024-12-10</p>
              <p>状态: 在售</p>
              <div class="product-actions">
                <a href="#" class="btn btn-secondary">查看详情</a>
                <a href="#" class="btn btn-primary">管理</a>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activeTab === 'orders'">
          <h2>我的订单</h2>
          <div class="order-list">
            <div class="order-item">
              <h3>订单编号: ORD20241215001</h3>
              <p>商品: 商丘市梁园区优质小麦</p>
              <p>数量: 100斤</p>
              <p>总价: ¥250.00</p>
              <p>下单日期: 2024-12-15</p>
              <p>状态: 已完成</p>
              <div class="order-actions">
                <a href="#" class="btn btn-secondary">查看详情</a>
              </div>
            </div>
            <div class="order-item">
              <h3>订单编号: ORD20241210001</h3>
              <p>商品: 商丘市梁园区绿色蔬菜</p>
              <p>数量: 50斤</p>
              <p>总价: ¥150.00</p>
              <p>下单日期: 2024-12-10</p>
              <p>状态: 已完成</p>
              <div class="order-actions">
                <a href="#" class="btn btn-secondary">查看详情</a>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activeTab === 'bids'">
          <h2>我的投标</h2>
          <div class="bid-list">
            <div class="bid-item">
              <h3>项目: 商丘市梁园区谢集镇杨波村宅基地出租</h3>
              <p>投标金额: ¥120000.00</p>
              <p>投标日期: 2024-12-16</p>
              <p>状态: 投标中</p>
              <div class="bid-actions">
                <a href="#" class="btn btn-secondary">查看详情</a>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activeTab === 'settings'">
          <h2>账号设置</h2>
          <form class="settings-form">
            <div class="form-group">
              <label>用户名</label>
              <input type="text" v-model="settings.username" placeholder="请输入用户名">
            </div>
            <div class="form-group">
              <label>密码</label>
              <input type="password" v-model="settings.password" placeholder="请输入密码">
            </div>
            <div class="form-group">
              <label>确认密码</label>
              <input type="password" v-model="settings.confirmPassword" placeholder="请确认密码">
            </div>
            <button type="submit" class="btn btn-primary">保存修改</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      activeTab: 'profile',
      userInfo: {
        name: '',
        phone: '',
        email: '',
        address: ''
      },
      settings: {
        username: '',
        password: '',
        confirmPassword: ''
      }
    }
  }
}
</script>

<style scoped>
.user-container {
  padding: 20px;
}

.user-content {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;
  margin-top: 30px;
}

.user-sidebar {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.user-info {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.avatar {
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
}

.user-info h2 {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 5px 0;
  color: #333;
}

.user-info p {
  margin: 0;
  color: #666;
  font-size: 14px;
}

.user-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.user-menu li {
  padding: 12px 15px;
  margin-bottom: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;
}

.user-menu li:hover {
  background-color: #f5f5f5;
  color: #4CAF50;
}

.user-menu li.active {
  background-color: #4CAF50;
  color: white;
}

.user-main {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.user-main h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #4CAF50;
}

.project-list,
.product-list,
.order-list,
.bid-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.project-item,
.product-item,
.order-item,
.bid-item {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
}

.project-item h3,
.product-item h3,
.order-item h3,
.bid-item h3 {
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 10px 0;
  color: #333;
}

.project-item p,
.product-item p,
.order-item p,
.bid-item p {
  margin: 0 0 5px 0;
  color: #666;
  font-size: 14px;
}

.project-actions,
.product-actions,
.order-actions,
.bid-actions {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}

@media (max-width: 768px) {
  .user-content {
    grid-template-columns: 1fr;
  }
  
  .user-sidebar {
    order: 2;
  }
  
  .user-main {
    order: 1;
  }
  
  .user-menu {
    display: flex;
    overflow-x: auto;
    gap: 10px;
  }
  
  .user-menu li {
    white-space: nowrap;
    margin-bottom: 0;
  }
}
</style>