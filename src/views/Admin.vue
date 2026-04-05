<template>
  <div class="admin-container">
    <h1>后台管理</h1>
    <div class="admin-content">
      <div class="admin-sidebar">
        <ul class="admin-menu">
          <li @click="activeTab = 'dashboard'" :class="{ active: activeTab === 'dashboard' }">仪表盘</li>
          <li @click="activeTab = 'projects'" :class="{ active: activeTab === 'projects' }">项目管理</li>
          <li @click="activeTab = 'products'" :class="{ active: activeTab === 'products' }">农产品管理</li>
          <li @click="activeTab = 'users'" :class="{ active: activeTab === 'users' }">用户管理</li>
          <li @click="activeTab = 'orders'" :class="{ active: activeTab === 'orders' }">订单管理</li>
          <li @click="activeTab = 'notices'" :class="{ active: activeTab === 'notices' }">通知管理</li>
          <li @click="activeTab = 'settings'" :class="{ active: activeTab === 'settings' }">系统设置</li>
        </ul>
      </div>
      <div class="admin-main">
        <div v-if="activeTab === 'dashboard'">
          <h2>仪表盘</h2>
          <div class="dashboard-stats">
            <div class="stat-card">
              <div class="stat-number">{{ stats.totalProjects }}</div>
              <div class="stat-label">总项目数</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">{{ stats.totalProducts }}</div>
              <div class="stat-label">总农产品数</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">{{ stats.totalUsers }}</div>
              <div class="stat-label">总用户数</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">{{ stats.totalOrders }}</div>
              <div class="stat-label">总订单数</div>
            </div>
          </div>
          <div class="recent-activity">
            <h3>最近活动</h3>
            <div class="activity-list">
              <div class="activity-item">
                <span class="activity-time">2024-12-15 10:00</span>
                <span class="activity-content">用户张三发布了新的交易项目</span>
              </div>
              <div class="activity-item">
                <span class="activity-time">2024-12-14 15:30</span>
                <span class="activity-content">用户李四购买了农产品</span>
              </div>
              <div class="activity-item">
                <span class="activity-time">2024-12-13 09:15</span>
                <span class="activity-content">管理员发布了新的通知</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activeTab === 'projects'">
          <h2>项目管理</h2>
          <div class="admin-actions">
            <button class="btn btn-primary">添加项目</button>
          </div>
          <table class="admin-table">
            <thead>
              <tr>
                <th>项目编号</th>
                <th>项目名称</th>
                <th>发布日期</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SQ2026001</td>
                <td>商丘市梁园区谢集镇杨波村宅基地出租</td>
                <td>2024-12-15</td>
                <td><span class="status-badge processing">交易中</span></td>
                <td>
                  <button class="btn btn-secondary">编辑</button>
                  <button class="btn btn-danger">删除</button>
                </td>
              </tr>
              <tr>
                <td>SQ2026002</td>
                <td>商丘市梁园区谢集镇东街村村中心广场西侧厂房出租</td>
                <td>2024-12-10</td>
                <td><span class="status-badge success">已完成</span></td>
                <td>
                  <button class="btn btn-secondary">编辑</button>
                  <button class="btn btn-danger">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="activeTab === 'products'">
          <h2>农产品管理</h2>
          <div class="admin-actions">
            <button class="btn btn-primary">添加农产品</button>
          </div>
          <table class="admin-table">
            <thead>
              <tr>
                <th>产品ID</th>
                <th>产品名称</th>
                <th>价格</th>
                <th>发布日期</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>商丘市梁园区优质小麦</td>
                <td>¥2.5/斤</td>
                <td>2024-12-15</td>
                <td><span class="status-badge success">在售</span></td>
                <td>
                  <button class="btn btn-secondary">编辑</button>
                  <button class="btn btn-danger">删除</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>商丘市梁园区绿色蔬菜</td>
                <td>¥3.0/斤</td>
                <td>2024-12-10</td>
                <td><span class="status-badge success">在售</span></td>
                <td>
                  <button class="btn btn-secondary">编辑</button>
                  <button class="btn btn-danger">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="activeTab === 'users'">
          <h2>用户管理</h2>
          <table class="admin-table">
            <thead>
              <tr>
                <th>用户ID</th>
                <th>用户名</th>
                <th>电话</th>
                <th>邮箱</th>
                <th>注册日期</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>张三</td>
                <td>13800138000</td>
                <td>zhangsan@example.com</td>
                <td>2024-12-01</td>
                <td>
                  <button class="btn btn-secondary">编辑</button>
                  <button class="btn btn-danger">删除</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>李四</td>
                <td>13900139000</td>
                <td>lisi@example.com</td>
                <td>2024-12-02</td>
                <td>
                  <button class="btn btn-secondary">编辑</button>
                  <button class="btn btn-danger">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="activeTab === 'orders'">
          <h2>订单管理</h2>
          <table class="admin-table">
            <thead>
              <tr>
                <th>订单编号</th>
                <th>商品名称</th>
                <th>用户</th>
                <th>数量</th>
                <th>总价</th>
                <th>下单日期</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ORD20241215001</td>
                <td>商丘市梁园区优质小麦</td>
                <td>李四</td>
                <td>100斤</td>
                <td>¥250.00</td>
                <td>2024-12-15</td>
                <td><span class="status-badge success">已完成</span></td>
                <td>
                  <button class="btn btn-secondary">查看</button>
                </td>
              </tr>
              <tr>
                <td>ORD20241210001</td>
                <td>商丘市梁园区绿色蔬菜</td>
                <td>张三</td>
                <td>50斤</td>
                <td>¥150.00</td>
                <td>2024-12-10</td>
                <td><span class="status-badge success">已完成</span></td>
                <td>
                  <button class="btn btn-secondary">查看</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="activeTab === 'notices'">
          <h2>通知管理</h2>
          <div class="admin-actions">
            <button class="btn btn-primary">添加通知</button>
          </div>
          <table class="admin-table">
            <thead>
              <tr>
                <th>通知ID</th>
                <th>标题</th>
                <th>发布日期</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>商丘市梁园区人民政府关于印发《商丘市梁园区农村产权交易市场体系建设方案》的通知</td>
                <td>2024-06-01</td>
                <td>
                  <button class="btn btn-secondary">编辑</button>
                  <button class="btn btn-danger">删除</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>关于进一步规范农村产权交易行为的通知</td>
                <td>2024-04-15</td>
                <td>
                  <button class="btn btn-secondary">编辑</button>
                  <button class="btn btn-danger">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="activeTab === 'settings'">
          <h2>系统设置</h2>
          <form class="settings-form">
            <div class="form-group">
              <label>网站标题</label>
              <input type="text" v-model="settings.siteTitle" placeholder="请输入网站标题">
            </div>
            <div class="form-group">
              <label>网站描述</label>
              <textarea v-model="settings.siteDescription" rows="3" placeholder="请输入网站描述"></textarea>
            </div>
            <div class="form-group">
              <label>联系电话</label>
              <input type="tel" v-model="settings.contactPhone" placeholder="请输入联系电话">
            </div>
            <div class="form-group">
              <label>联系邮箱</label>
              <input type="email" v-model="settings.contactEmail" placeholder="请输入联系邮箱">
            </div>
            <button type="submit" class="btn btn-primary">保存设置</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      activeTab: 'dashboard',
      stats: {
        totalProjects: 128,
        totalProducts: 50,
        totalUsers: 2500,
        totalOrders: 1200
      },
      settings: {
        siteTitle: '云上共富-基于AIOT的农村集体经济数字化平台',
        siteDescription: '基于AIOT的农村集体经济数字化平台，为农村产权交易提供全方位服务',
        contactPhone: '13783766231',
        contactEmail: '3368320196@qq.com'
      }
    }
  }
}
</script>

<style scoped>
.admin-container {
  padding: 20px;
}

.admin-content {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 30px;
  margin-top: 30px;
}

.admin-sidebar {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.admin-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.admin-menu li {
  padding: 12px 15px;
  margin-bottom: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;
}

.admin-menu li:hover {
  background-color: #f5f5f5;
  color: #4CAF50;
}

.admin-menu li.active {
  background-color: #4CAF50;
  color: white;
}

.admin-main {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.admin-main h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.admin-actions {
  margin-bottom: 20px;
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.stat-number {
  font-size: 24px;
  font-weight: bold;
  color: #4CAF50;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 14px;
  color: #666;
}

.recent-activity {
  margin-top: 30px;
}

.recent-activity h3 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #333;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.activity-item {
  padding: 10px;
  border-left: 3px solid #4CAF50;
  background-color: #f5f5f5;
  border-radius: 0 4px 4px 0;
}

.activity-time {
  font-size: 12px;
  color: #999;
  margin-right: 10px;
}

.activity-content {
  font-size: 14px;
  color: #333;
}

.admin-table {
  width: 100%;
  border-collapse: collapse;
}

.admin-table th,
.admin-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.admin-table th {
  background-color: #f5f5f5;
  font-weight: 500;
  color: #333;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.status-badge.success {
  background-color: rgba(76, 175, 80, 0.1);
  color: #4CAF50;
}

.status-badge.processing {
  background-color: rgba(255, 193, 7, 0.1);
  color: #FFC107;
}

.status-badge.failed {
  background-color: rgba(244, 67, 54, 0.1);
  color: #F44336;
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

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4CAF50;
}

.btn-danger {
  background-color: #F44336;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
  margin-left: 10px;
}

.btn-danger:hover {
  background-color: #d32f2f;
}

@media (max-width: 768px) {
  .admin-content {
    grid-template-columns: 1fr;
  }
  
  .admin-sidebar {
    order: 2;
  }
  
  .admin-main {
    order: 1;
  }
  
  .admin-menu {
    display: flex;
    overflow-x: auto;
    gap: 10px;
  }
  
  .admin-menu li {
    white-space: nowrap;
    margin-bottom: 0;
  }
  
  .dashboard-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>