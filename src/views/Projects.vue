<template>
  <div class="projects-container">
    <h1>交易项目</h1>
    <div class="filter-section">
      <div class="filter-item">
        <label>项目类型</label>
        <select v-model="filter.type">
          <option value="">全部</option>
          <option value="宅基地">宅基地</option>
          <option value="厂房">厂房</option>
        </select>
      </div>
      <div class="filter-item">
        <label>所在地区</label>
        <select v-model="filter.area">
          <option value="">全部</option>
          <option value="谢集镇">谢集镇</option>
        </select>
      </div>
      <div class="filter-item">
        <label>发布时间</label>
        <input type="date" v-model="filter.date">
      </div>
      <div class="filter-item">
        <button class="btn btn-primary" @click="resetFilter">重置</button>
      </div>
    </div>
    
    <div class="project-list">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <div class="project-header">
          <h2>{{ project.title }}</h2>
          <div class="project-tags">
            <span v-if="project.isHot" class="tag tag-hot">热门</span>
            <span v-if="project.isNew" class="tag tag-new">新发布</span>
          </div>
        </div>
        <div class="project-content">
          <p class="project-description">{{ project.description }}</p>
          <div class="project-details">
            <div class="detail-item">
              <span class="detail-label">项目编号:</span>
              <span class="detail-value">{{ project.projectId }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">所在地区:</span>
              <span class="detail-value">{{ project.area }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">发布日期:</span>
              <span class="detail-value">{{ project.date }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">联系人:</span>
              <span class="detail-value">{{ project.contactPerson }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">联系方式:</span>
              <span class="detail-value">{{ project.contactInfo }}</span>
            </div>
          </div>
        </div>
        <div class="project-footer">
          <router-link :to="`/project/detail/${project.id}`" class="btn btn-primary">查看详情</router-link>
        </div>
      </div>
    </div>
    
    <div v-if="projects.length === 0" class="empty-state">
      没有更多了哦
    </div>
    
    <div class="pagination">
      <button class="btn btn-secondary" @click="prevPage" :disabled="currentPage === 1">上一页</button>
      <span class="page-info">第 {{ currentPage }} 页，共 {{ totalPages }} 页</span>
      <button class="btn btn-secondary" @click="nextPage" :disabled="currentPage === totalPages">下一页</button>
    </div>
  </div>
</template>

<script>
import { projectApi } from '../api';

export default {
  name: 'Projects',
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      filter: {
        type: '',
        area: '',
        date: ''
      },
      projects: [],
      total: 0
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize)
    }
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      try {
        const response = await projectApi.getAllProjects({
          page: this.currentPage,
          pageSize: this.pageSize,
          type: this.filter.type,
          status: ''
        });
        this.projects = response.projects;
        this.total = response.total;
      } catch (error) {
        console.error('获取交易项目失败:', error);
        alert('获取交易项目失败，请刷新页面重试');
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getProjects();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.getProjects();
      }
    },
    resetFilter() {
      this.filter = {
        type: '',
        area: '',
        date: ''
      };
      this.currentPage = 1;
      this.getProjects();
    }
  }
}
</script>

<style scoped>
.projects-container {
  padding: 20px;
}

.filter-section {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.filter-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.filter-item label {
  font-size: 14px;
  color: #666;
}

.filter-item select,
.filter-item input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.project-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.project-header {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.project-header h2 {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #333;
}

.project-content {
  padding: 20px;
}

.project-description {
  margin-bottom: 20px;
  color: #666;
  line-height: 1.5;
}

.project-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-item {
  display: flex;
  gap: 10px;
}

.detail-label {
  font-weight: 500;
  color: #333;
  width: 100px;
}

.detail-value {
  color: #666;
  flex: 1;
}

.project-footer {
  padding: 20px;
  border-top: 1px solid #eee;
  text-align: right;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
  font-size: 16px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
}

.page-info {
  font-size: 14px;
  color: #666;
}

@media (max-width: 768px) {
  .filter-section {
    flex-direction: column;
  }
  
  .filter-item select,
  .filter-item input {
    width: 100%;
  }
  
  .project-list {
    grid-template-columns: 1fr;
  }
  
  .project-header {
    flex-direction: column;
    gap: 10px;
  }
  
  .project-header h2 {
    font-size: 16px;
  }
}
</style>