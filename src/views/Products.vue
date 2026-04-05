<template>
  <div class="products-container">
    <h1>农产品交易</h1>
    <div class="filter-section">
      <div class="filter-item">
        <label>产品类型</label>
        <select v-model="filter.type">
          <option value="">全部</option>
          <option value="粮食">粮食</option>
          <option value="蔬菜">蔬菜</option>
          <option value="水果">水果</option>
        </select>
      </div>
      <div class="filter-item">
        <label>价格区间</label>
        <select v-model="filter.priceRange">
          <option value="">全部</option>
          <option value="0-5">0-5元/斤</option>
          <option value="5-10">5-10元/斤</option>
          <option value="10+">10元/斤以上</option>
        </select>
      </div>
      <div class="filter-item">
        <label>排序方式</label>
        <select v-model="sortBy">
          <option value="price-asc">价格从低到高</option>
          <option value="price-desc">价格从高到低</option>
          <option value="date-desc">最新发布</option>
        </select>
      </div>
      <div class="filter-item">
        <button class="btn btn-primary" @click="resetFilter">重置</button>
      </div>
    </div>
    
    <div class="product-list">
      <div v-for="product in filteredProducts" :key="product.id" class="product-card">
        <div class="product-image-container">
          <img :src="product.image" :alt="product.name" class="product-image">
          <div v-if="product.isNew" class="product-tag tag-new">新品</div>
          <div v-if="product.isHot" class="product-tag tag-hot">热销</div>
        </div>
        <div class="product-info">
          <h2 class="product-name">{{ product.name }}</h2>
          <p class="product-price">¥{{ product.price }}/斤</p>
          <p class="product-description">{{ product.description }}</p>
          <div class="product-meta">
            <span class="meta-item">产地: {{ product.origin }}</span>
            <span class="meta-item">发布日期: {{ product.date }}</span>
          </div>
          <div class="product-actions">
            <button class="btn btn-primary" @click="addToCart(product)">加入购物车</button>
            <router-link :to="`/product/detail/${product.id}`" class="btn btn-secondary">查看详情</router-link>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="filteredProducts.length === 0" class="empty-state">
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
export default {
  name: 'Products',
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      filter: {
        type: '',
        priceRange: ''
      },
      sortBy: 'date-desc',
      products: [
        {
          id: '1',
          name: '商丘市梁园区优质小麦',
          price: 2.5,
          description: '商丘市梁园区优质小麦，颗粒饱满，品质优良，适合制作各种面食。',
          origin: '商丘市梁园区',
          date: '2024-12-15',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=high%20quality%20wheat%20grains%20in%20farm&image_size=square',
          isHot: true,
          isNew: false
        },
        {
          id: '2',
          name: '商丘市梁园区绿色蔬菜',
          price: 3.0,
          description: '商丘市梁园区绿色蔬菜，无农药残留，新鲜健康，营养丰富。',
          origin: '商丘市梁园区',
          date: '2024-12-10',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20green%20vegetables%20in%20farm&image_size=square',
          isHot: false,
          isNew: false
        },
        {
          id: '3',
          name: '商丘市梁园区特色水果',
          price: 5.0,
          description: '商丘市梁园区特色水果，口感甜美，品质上乘，深受消费者喜爱。',
          origin: '商丘市梁园区',
          date: '2024-12-05',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20fruits%20in%20farm&image_size=square',
          isHot: false,
          isNew: true
        },
        {
          id: '4',
          name: '商丘市梁园区优质玉米',
          price: 1.8,
          description: '商丘市梁园区优质玉米，颗粒饱满，淀粉含量高，适合饲料和食品加工。',
          origin: '商丘市梁园区',
          date: '2024-12-01',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=high%20quality%20corn%20cobs%20in%20farm&image_size=square',
          isHot: false,
          isNew: false
        },
        {
          id: '5',
          name: '商丘市梁园区花生',
          price: 6.5,
          description: '商丘市梁园区花生，颗粒饱满，口感香脆，营养丰富。',
          origin: '商丘市梁园区',
          date: '2024-11-25',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20peanuts%20in%20farm&image_size=square',
          isHot: false,
          isNew: false
        },
        {
          id: '6',
          name: '商丘市梁园区大豆',
          price: 4.2,
          description: '商丘市梁园区大豆，蛋白质含量高，品质优良，适合各种豆制品加工。',
          origin: '商丘市梁园区',
          date: '2024-11-20',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20soybeans%20in%20farm&image_size=square',
          isHot: false,
          isNew: false
        },
        {
          id: '7',
          name: '商丘市梁园区红薯',
          price: 1.5,
          description: '商丘市梁园区红薯，口感甜美，营养丰富，适合煮食或加工。',
          origin: '商丘市梁园区',
          date: '2024-11-15',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20sweet%20potatoes%20in%20farm&image_size=square',
          isHot: false,
          isNew: false
        },
        {
          id: '8',
          name: '商丘市梁园区大蒜',
          price: 3.5,
          description: '商丘市梁园区大蒜，品质优良，风味独特，具有较高的药用价值。',
          origin: '商丘市梁园区',
          date: '2024-11-10',
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20garlic%20in%20farm&image_size=square',
          isHot: true,
          isNew: false
        }
      ]
    }
  },
  computed: {
    filteredProducts() {
      let filtered = [...this.products]
      
      // 过滤
      if (this.filter.type) {
        filtered = filtered.filter(product => product.name.includes(this.filter.type))
      }
      
      if (this.filter.priceRange) {
        filtered = filtered.filter(product => {
          const price = product.price
          switch (this.filter.priceRange) {
            case '0-5':
              return price >= 0 && price <= 5
            case '5-10':
              return price > 5 && price <= 10
            case '10+':
              return price > 10
            default:
              return true
          }
        })
      }
      
      // 排序
      switch (this.sortBy) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price)
          break
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price)
          break
        case 'date-desc':
          filtered.sort((a, b) => new Date(b.date) - new Date(a.date))
          break
      }
      
      // 分页
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      return filtered.slice(start, end)
    },
    totalPages() {
      let filtered = [...this.products]
      
      if (this.filter.type) {
        filtered = filtered.filter(product => product.name.includes(this.filter.type))
      }
      
      if (this.filter.priceRange) {
        filtered = filtered.filter(product => {
          const price = product.price
          switch (this.filter.priceRange) {
            case '0-5':
              return price >= 0 && price <= 5
            case '5-10':
              return price > 5 && price <= 10
            case '10+':
              return price > 10
            default:
              return true
          }
        })
      }
      
      return Math.ceil(filtered.length / this.pageSize)
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    resetFilter() {
      this.filter = {
        type: '',
        priceRange: ''
      }
      this.sortBy = 'date-desc'
      this.currentPage = 1
    },
    addToCart(product) {
      alert(`已将 ${product.name} 加入购物车`)
    }
  }
}
</script>

<style scoped>
.products-container {
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

.filter-item select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.product-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.product-image-container {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-tag {
  position: absolute;
  top: 10px;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.tag-new {
  left: 10px;
  background-color: rgba(255, 193, 7, 0.9);
  color: white;
}

.tag-hot {
  right: 10px;
  background-color: rgba(244, 67, 54, 0.9);
  color: white;
}

.product-info {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-name {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px 0;
  color: #333;
}

.product-price {
  font-size: 20px;
  font-weight: bold;
  color: #F44336;
  margin: 0 0 10px 0;
}

.product-description {
  color: #666;
  line-height: 1.5;
  margin: 0 0 15px 0;
  flex: 1;
}

.product-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #999;
}

.product-actions {
  display: flex;
  gap: 10px;
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
  
  .filter-item select {
    width: 100%;
  }
  
  .product-list {
    grid-template-columns: 1fr;
  }
  
  .product-actions {
    flex-direction: column;
  }
  
  .product-actions button,
  .product-actions a {
    width: 100%;
  }
}
</style>