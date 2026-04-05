<template>
  <div class="project-detail-container">
    <h1>项目详情</h1>
    <div class="project-detail">
      <div class="project-header">
        <h2>{{ project.title }}</h2>
        <div class="project-tags">
          <span v-if="project.isHot" class="tag tag-hot">热门</span>
          <span v-if="project.isNew" class="tag tag-new">新发布</span>
        </div>
      </div>
      <div class="project-content">
        <div class="project-info">
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
          <div class="info-item">
            <span class="info-label">项目状态:</span>
            <span :class="['status-badge', project.status]">{{ project.statusText }}</span>
          </div>
        </div>
        <div class="project-description">
          <h3>项目描述</h3>
          <p>{{ project.description }}</p>
          <h3>项目详情</h3>
          <p>{{ project.details }}</p>
        </div>
        <div class="project-attachments">
          <h3>相关附件</h3>
          <div class="attachment-list">
            <div class="attachment-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10,9 9,9 8,9"></polyline></svg>
              <span>项目可行性报告.pdf</span>
              <a href="#" class="btn btn-secondary">下载</a>
            </div>
            <div class="attachment-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10,9 9,9 8,9"></polyline></svg>
              <span>项目规划图.pdf</span>
              <a href="#" class="btn btn-secondary">下载</a>
            </div>
          </div>
        </div>
      </div>
      <div class="project-actions">
        <router-link :to="`/bid/${project.id}`" class="btn btn-primary">参与投标</router-link>
        <button class="btn btn-secondary" @click="shareProject">分享项目</button>
        <button class="btn btn-secondary" @click="saveProject">收藏项目</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',
  data() {
    return {
      project: {
        id: 'SQ2026001',
        title: '商丘市梁园区谢集镇杨波村宅基地出租',
        description: '本项目为商丘市梁园区谢集镇杨波村宅基地出租项目，适合建设农村住房或相关配套设施。',
        details: '项目位于商丘市梁园区谢集镇杨波村，占地面积约200平方米，周边环境优美，交通便利。宅基地使用权期限为30年，可用于建设农村住房或相关配套设施。项目适合有意在农村发展的个人或企业投资。',
        area: '商丘市梁园区谢集镇',
        date: '2024-12-15',
        contactPerson: '张久良',
        contactInfo: '18768442084',
        status: 'processing',
        statusText: '交易中',
        isHot: true,
        isNew: false
      }
    }
  },
  methods: {
    shareProject() {
      alert('项目链接已复制到剪贴板！');
    },
    saveProject() {
      alert('项目已收藏！');
    }
  }
}
</script>

<style scoped>
.project-detail-container {
  padding: 20px;
}

.project-detail {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.project-header {
  padding: 30px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.project-header h2 {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: #333;
  flex: 1;
}

.project-content {
  padding: 30px;
}

.project-info {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 200px;
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

.project-description {
  margin-bottom: 30px;
}

.project-description h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 10px 0;
  color: #333;
}

.project-description p {
  margin: 0 0 20px 0;
  color: #666;
  line-height: 1.5;
}

.project-attachments {
  margin-bottom: 30px;
}

.project-attachments h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 15px 0;
  color: #333;
}

.attachment-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.attachment-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
}

.attachment-item svg {
  flex-shrink: 0;
}

.attachment-item span {
  flex: 1;
  color: #333;
}

.project-actions {
  padding: 20px 30px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 15px;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .project-header {
    flex-direction: column;
    gap: 15px;
  }
  
  .project-header h2 {
    font-size: 20px;
  }
  
  .project-content {
    padding: 20px;
  }
  
  .project-info {
    flex-direction: column;
    gap: 15px;
  }
  
  .info-item {
    min-width: 100%;
  }
  
  .project-actions {
    flex-direction: column;
  }
  
  .project-actions button,
  .project-actions a {
    width: 100%;
  }
}
</style>