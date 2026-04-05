<template>
  <div class="bid-container">
    <h1>参与投标</h1>
    <div class="bid-content">
      <div class="project-info">
        <h2>{{ project.title }}</h2>
        <div class="info-item">
          <span class="info-label">项目编号:</span>
          <span class="info-value">{{ project.id }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">所在地区:</span>
          <span class="info-value">{{ project.area }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">发布日期:</span>
          <span class="info-value">{{ project.date }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">联系人:</span>
          <span class="info-value">{{ project.contactPerson }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">联系方式:</span>
          <span class="info-value">{{ project.contactInfo }}</span>
        </div>
      </div>
      <div class="bid-form">
        <h3>投标信息</h3>
        <form @submit.prevent="submitBid">
          <div class="form-group">
            <label>投标金额 (万元)</label>
            <input type="number" v-model="bid.amount" min="0" step="0.01" required>
          </div>
          <div class="form-group">
            <label>投标期限</label>
            <select v-model="bid.term" required>
              <option value="1">1年</option>
              <option value="3">3年</option>
              <option value="5">5年</option>
              <option value="10">10年</option>
              <option value="20">20年</option>
              <option value="30">30年</option>
            </select>
          </div>
          <div class="form-group">
            <label>投标说明</label>
            <textarea v-model="bid.description" rows="5" placeholder="请输入投标说明"></textarea>
          </div>
          <div class="form-group">
            <label>联系人</label>
            <input type="text" v-model="bid.contactName" required>
          </div>
          <div class="form-group">
            <label>联系电话</label>
            <input type="tel" v-model="bid.contactPhone" required>
          </div>
          <div class="form-group">
            <label>联系邮箱</label>
            <input type="email" v-model="bid.contactEmail" required>
          </div>
          <button type="submit" class="btn btn-primary">提交投标</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bid',
  data() {
    return {
      project: {
        id: 'SQ2026001',
        title: '商丘市梁园区谢集镇杨波村宅基地出租',
        area: '商丘市梁园区谢集镇',
        date: '2024-12-15',
        contactPerson: '张久良',
        contactInfo: '18768442084'
      },
      bid: {
        amount: '',
        term: '',
        description: '',
        contactName: '',
        contactPhone: '',
        contactEmail: ''
      }
    }
  },
  methods: {
    submitBid() {
      // 模拟投标提交
      setTimeout(() => {
        alert('投标提交成功！我们会尽快与您联系。');
        this.$router.push('/projects');
      }, 500);
    }
  }
}
</script>

<style scoped>
.bid-container {
  padding: 20px;
}

.bid-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.project-info {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}

.project-info h2 {
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 20px 0;
  color: #333;
}

.info-item {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.info-label {
  font-weight: 500;
  color: #333;
  width: 100px;
}

.info-value {
  color: #666;
  flex: 1;
}

.bid-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.bid-form h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 10px 0;
  color: #333;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4CAF50;
}

@media (max-width: 768px) {
  .bid-content {
    grid-template-columns: 1fr;
    padding: 20px;
  }
  
  .project-info h2 {
    font-size: 18px;
  }
}
</style>