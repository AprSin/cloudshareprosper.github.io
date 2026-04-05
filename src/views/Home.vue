<template>
  <div class="home-container">
    <!-- 轮播图 -->
    <div class="carousel" ref="carousel">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="carousel-item">
          <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20rural%20economic%20digital%20platform%20banner%20with%20AIOT%20technology%20elements&image_size=landscape_16_9" alt="轮播图1">
          <div class="carousel-caption">
            <h3>云上共富</h3>
            <p>基于AIOT的农村集体经济数字化平台</p>
            <router-link to="/projects" class="btn btn-primary">立即交易</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20agriculture%20technology%20in%20rural%20area%20with%20digital%20dashboard&image_size=landscape_16_9" alt="轮播图2">
          <div class="carousel-caption">
            <h3>数据驱动</h3>
            <p>AIOT技术助力农村经济数字化转型</p>
            <router-link to="/data" class="btn btn-primary">查看数据</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=rural%20revitalization%20through%20digital%20technology%20with%20modern%20village%20scene&image_size=landscape_16_9" alt="轮播图3">
          <div class="carousel-caption">
            <h3>数字化赋能</h3>
            <p>推动农村集体经济高质量发展</p>
            <router-link to="/guide" class="btn btn-primary">了解更多</router-link>
          </div>
        </div>
      </div>
      <div class="carousel-controls">
        <div class="carousel-control" @click="prevSlide">&lt;</div>
        <div class="carousel-control" @click="nextSlide">&gt;</div>
      </div>
    </div>

    <!-- 平台优势 -->
    <section class="platform-advantages">
      <div class="section-header">
        <h2>平台优势</h2>
        <p>我们致力于为农村集体经济提供全方位数字化解决方案</p>
      </div>
      <div class="grid">
        <div class="card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <h3 class="card-title">AIOT技术</h3>
          <p class="card-content">运用人工智能和物联网技术，实现农村资产智能化管理和实时监控</p>
        </div>
        <div class="card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
          </div>
          <h3 class="card-title">安全可靠</h3>
          <p class="card-content">多重安全保障，区块链技术确保交易过程安全透明可追溯</p>
        </div>
        <div class="card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          </div>
          <h3 class="card-title">高效便捷</h3>
          <p class="card-content">在线交易，智能匹配，大幅提高交易效率和成功率</p>
        </div>
        <div class="card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path></svg>
          </div>
          <h3 class="card-title">数据驱动</h3>
          <p class="card-content">大数据分析，为决策提供科学依据，优化资源配置</p>
        </div>
      </div>
    </section>

    <!-- 最新动态 -->
    <section class="latest-updates">
      <div class="section-header">
        <h2>最新动态</h2>
      </div>
      <div class="grid">
        <!-- 交易项目 -->
        <div class="update-section">
          <h3>交易项目</h3>
          <div class="project-list">
            <div v-for="project in projects" :key="project.id" class="project-item">
              <div class="project-tags">
                <span v-if="project.isHot" class="tag tag-hot">热门</span>
                <span v-if="project.isNew" class="tag tag-new">新发布</span>
              </div>
              <h4>{{ project.title }}</h4>
              <p>{{ project.description }}</p>
              <div class="project-meta">
                <span>项目编号: {{ project.id }}</span>
                <span>发布日期: {{ project.date }}</span>
              </div>
              <router-link :to="`/project/detail/${project.id}`" class="btn btn-secondary">查看详情</router-link>
            </div>
          </div>
          <router-link to="/projects" class="more-link">更多 →</router-link>
        </div>

        <!-- 农产品交易 -->
        <div class="update-section">
          <h3>农产品交易</h3>
          <div class="product-list">
            <div v-for="product in products" :key="product.id" class="product-item">
              <img :src="product.image" :alt="product.name" class="product-image">
              <div class="product-info">
                <h4 class="product-name">{{ product.name }}</h4>
                <p class="product-price">¥{{ product.price }}/斤</p>
                <p class="product-description">{{ product.description }}</p>
                <router-link :to="`/product/detail/${product.id}`" class="btn btn-primary">立即购买</router-link>
              </div>
            </div>
          </div>
          <router-link to="/products" class="more-link">更多 →</router-link>
        </div>

        <!-- 通知公告 -->
        <div class="update-section">
          <h3>通知公告</h3>
          <div class="notice-list">
            <div v-for="notice in notices" :key="notice.id" class="notice-item">
              <div class="notice-tags">
                <span v-if="notice.isImportant" class="tag tag-important">重要</span>
              </div>
              <h4 class="notice-title">{{ notice.title }}</h4>
              <p class="notice-date">{{ notice.date }}</p>
              <p class="notice-content">{{ notice.content }}</p>
              <router-link :to="`/notice/detail/${notice.id}`" class="btn btn-secondary">查看详情</router-link>
            </div>
          </div>
          <router-link to="/notices" class="more-link">更多 →</router-link>
        </div>
      </div>
    </section>

    <!-- 交易数据概览 -->
    <section class="data-overview">
      <div class="section-header">
        <h2>交易数据概览</h2>
      </div>
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-number">{{ stats.totalProjects }}</div>
          <div class="stat-label">累计交易项目</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">{{ stats.totalAmount }}</div>
          <div class="stat-label">累计交易金额 (万元)</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">{{ stats.successRate }}%</div>
          <div class="stat-label">交易成功率</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">{{ stats.activeUsers }}</div>
          <div class="stat-label">活跃用户数</div>
        </div>
      </div>
      <router-link to="/data" class="btn btn-primary view-data-btn">查看详细数据</router-link>
    </section>

    <!-- 服务承诺 -->
    <section class="service-promises">
      <div class="section-header">
        <h2>服务承诺</h2>
      </div>
      <div class="promise-grid">
        <div class="promise-item">
          <div class="promise-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <h3 class="promise-title">专业服务</h3>
          <p class="promise-description">提供专业的农村产权交易服务，确保交易过程规范透明</p>
        </div>
        <div class="promise-item">
          <div class="promise-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          </div>
          <h3 class="promise-title">高效响应</h3>
          <p class="promise-description">7*24小时在线服务，快速响应客户需求</p>
        </div>
        <div class="promise-item">
          <div class="promise-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"></path><path d="M14 17H5"></path><path d="M20 17h-9"></path><path d="M14 7H5"></path><path d="M12 12h.01"></path></svg>
          </div>
          <h3 class="promise-title">安全保障</h3>
          <p class="promise-description">多重安全措施，保障交易资金和信息安全</p>
        </div>
      </div>
    </section>

    <!-- 合作伙伴 -->
    <section class="partners">
      <div class="section-header">
        <h2>合作伙伴</h2>
      </div>
      <div class="partner-logos">
        <div class="partner-logo">
          <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20company%20logo%20for%20rural%20economic%20development&image_size=square" alt="合作伙伴1">
        </div>
        <div class="partner-logo">
          <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20company%20logo%20for%20agriculture%20technology&image_size=square" alt="合作伙伴2">
        </div>
        <div class="partner-logo">
          <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20company%20logo%20for%20digital%20platform&image_size=square" alt="合作伙伴3">
        </div>
        <div class="partner-logo">
          <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20company%20logo%20for%20financial%20services&image_size=square" alt="合作伙伴4">
        </div>
        <div class="partner-logo">
          <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20company%20logo%20for%20rural%20revitalization&image_size=square" alt="合作伙伴5">
        </div>
        <div class="partner-logo">
          <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20company%20logo%20for%20smart%20agriculture&image_size=square" alt="合作伙伴6">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      currentSlide: 0,
      slideCount: 3,
      projects: [
        {
          id: 'SQ2026001',
          title: '商丘市梁园区谢集镇杨波村宅基地出租项目',
          description: '本项目为商丘市梁园区谢集镇杨波村宅基地出租项目，适合建设农村住房或相关配套设施。',
          date: '2024-12-15',
          isHot: true,
          isNew: false
        },
        {
          id: 'SQ2026002',
          title: '商丘市梁园区谢集镇东街村村中心广场西侧厂房出租项目',
          description: '本项目为商丘市梁园区谢集镇东街村村中心广场西侧厂房出租项目，适合兴办小型加工企业。',
          date: '2024-12-10',
          isHot: false,
          isNew: false
        },
        {
          id: 'SQ2026003',
          title: '商丘市梁园区谢集镇常庄村村部北侧厂房出租项目',
          description: '本项目为商丘市梁园区谢集镇常庄村村部北侧厂房出租项目，适合仓储或小型加工。',
          date: '2024-12-05',
          isHot: false,
          isNew: false
        },
        {
          id: 'SQ2026004',
          title: '商丘市梁园区谢集镇王步口村闲置厂房出租项目',
          description: '本项目为商丘市梁园区谢集镇王步口村闲置厂房出租项目，适合规模化生产加工。',
          date: '2024-12-01',
          isHot: false,
          isNew: true
        }
      ],
      products: [
        {
          id: '1',
          name: '商丘市梁园区优质小麦',
          price: 2.5,
          description: '商丘市梁园区优质小麦，颗粒饱满，品质优良，适合制作各种面食。',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=high%20quality%20wheat%20grains%20in%20farm&image_size=square'
        },
        {
          id: '2',
          name: '商丘市梁园区绿色蔬菜',
          price: 3.0,
          description: '商丘市梁园区绿色蔬菜，无农药残留，新鲜健康，营养丰富。',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20green%20vegetables%20in%20farm&image_size=square'
        },
        {
          id: '3',
          name: '商丘市梁园区特色水果',
          price: 5.0,
          description: '商丘市梁园区特色水果，口感甜美，品质上乘，深受消费者喜爱。',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20fruits%20in%20farm&image_size=square'
        },
        {
          id: '4',
          name: '商丘市梁园区优质玉米',
          price: 1.8,
          description: '商丘市梁园区优质玉米，颗粒饱满，淀粉含量高，适合饲料和食品加工。',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=high%20quality%20corn%20cobs%20in%20farm&image_size=square'
        }
      ],
      notices: [
        {
          id: '1',
          title: '商丘市梁园区人民政府 关于印发《商丘市梁园区农村产权交易市场体系建设方案》《商丘市梁园区农村产权流转交易运营管理办法（试行）》的通知',
          content: '为规范农村产权交易行为，保障交易双方合法权益，促进农村产权流转交易市场健康发展，特制定本方案和管理办法。',
          date: '2024-06-01',
          isImportant: true
        },
        {
          id: '2',
          title: '商丘市梁园区农村产权流转交易运营管理办法（试行）',
          content: '本办法旨在规范农村产权流转交易行为，维护交易秩序，保障交易双方合法权益，促进农村产权流转交易市场健康发展。',
          date: '2024-05-01',
          isImportant: false
        },
        {
          id: '3',
          title: '关于进一步规范农村产权交易行为的通知',
          content: '为进一步规范农村产权交易行为，提高交易效率，保障交易安全，现对农村产权交易有关事项通知如下。',
          date: '2024-04-15',
          isImportant: false
        },
        {
          id: '4',
          title: '2024年农村产权交易平台操作培训通知',
          content: '为提高农村产权交易平台使用效率，现组织开展2024年农村产权交易平台操作培训，具体事项通知如下。',
          date: '2024-03-20',
          isImportant: false
        }
      ],
      stats: {
        totalProjects: 128,
        totalAmount: 3560,
        successRate: 98.5,
        activeUsers: 2500
      }
    }
  },
  mounted() {
    // 自动轮播
    this.startAutoSlide()
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slideCount
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount
    },
    startAutoSlide() {
      setInterval(() => {
        this.nextSlide()
      }, 5000)
    }
  }
}
</script>

<style scoped>
.home-container {
  padding-bottom: 40px;
}

.section-header {
  text-align: center;
  margin-bottom: 30px;
}

.section-header h2 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.section-header p {
  font-size: 14px;
  color: #666;
}

.card {
  text-align: center;
  padding: 30px 20px;
}

.card-icon {
  margin-bottom: 20px;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.view-data-btn {
  display: block;
  margin: 0 auto;
  width: 200px;
}

.update-section {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.update-section h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
}

.more-link {
  display: block;
  text-align: right;
  margin-top: 15px;
  color: #4CAF50;
  text-decoration: none;
  font-weight: 500;
}

.more-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .stat-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .carousel-item img {
    height: 250px;
  }

  .carousel-caption h3 {
    font-size: 18px;
  }

  .carousel-caption p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .stat-grid {
    grid-template-columns: 1fr;
  }

  .carousel-item img {
    height: 200px;
  }

  .carousel-caption {
    padding: 20px;
  }

  .carousel-caption h3 {
    font-size: 16px;
  }

  .carousel-caption p {
    font-size: 12px;
  }
}
</style>