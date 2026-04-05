<template>
  <div class="product-detail-container">
    <h1>农产品详情</h1>
    <div class="product-detail">
      <div class="product-header">
        <h2>{{ product.name }}</h2>
        <div class="product-tags">
          <span v-if="product.isHot" class="tag tag-hot">热销</span>
          <span v-if="product.isNew" class="tag tag-new">新品</span>
        </div>
      </div>
      <div class="product-content">
        <div class="product-image">
          <img :src="product.image" :alt="product.name">
        </div>
        <div class="product-info">
          <div class="info-item">
            <span class="info-label">价格:</span>
            <span class="info-value price">{{ product.price }}元/斤</span>
          </div>
          <div class="info-item">
            <span class="info-label">产地:</span>
            <span class="info-value">{{ product.origin }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">发布日期:</span>
            <span class="info-value">{{ product.date }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">库存:</span>
            <span class="info-value">{{ product.stock }}斤</span>
          </div>
          <div class="info-item">
            <span class="info-label">销量:</span>
            <span class="info-value">{{ product.sales }}斤</span>
          </div>
          <div class="info-item">
            <span class="info-label">联系人:</span>
            <span class="info-value">{{ product.contactPerson }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">联系方式:</span>
            <span class="info-value">{{ product.contactInfo }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">产品状态:</span>
            <span :class="['status-badge', product.status]">{{ product.statusText }}</span>
          </div>
        </div>
      </div>
      <div class="product-description">
        <h3>产品描述</h3>
        <p>{{ product.description }}</p>
        <h3>产品详情</h3>
        <p>{{ product.details }}</p>
        <h3>种植信息</h3>
        <p>{{ product.plantingInfo }}</p>
      </div>
      <div class="product-actions">
        <div class="quantity-control">
          <button @click="decreaseQuantity" :disabled="quantity <= 1">-</button>
          <input type="number" v-model="quantity" min="1" :max="product.stock">
          <button @click="increaseQuantity" :disabled="quantity >= product.stock">+</button>
        </div>
        <router-link :to="`/buy/${product.id}`" class="btn btn-primary">立即购买</router-link>
        <button class="btn btn-secondary" @click="addToCart">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
      quantity: 1,
      product: {
        id: '1',
        name: '商丘市梁园区优质小麦',
        price: 2.5,
        description: '商丘市梁园区优质小麦，颗粒饱满，品质优良，适合制作各种面食。',
        details: '商丘市梁园区优质小麦，生长在肥沃的土壤中，采用科学种植方法，无农药残留，颗粒饱满，蛋白质含量高，面筋质量好，适合制作面条、馒头、包子等各种面食。',
        plantingInfo: '种植于商丘市梁园区的优质农田，采用轮作制度，合理施肥，科学灌溉，严格控制农药使用，确保小麦品质安全。',
        origin: '商丘市梁园区',
        date: '2024-12-15',
        stock: 10000,
        sales: 5000,
        contactPerson: '张久良',
        contactInfo: '18768442084',
        status: 'success',
        statusText: '在售',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=high%20quality%20wheat%20grains%20in%20farm&image_size=square',
        isHot: true,
        isNew: false
      }
    }
  },
  methods: {
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    increaseQuantity() {
      if (this.quantity < this.product.stock) {
        this.quantity++
      }
    },
    addToCart() {
      alert(`已将 ${this.quantity} 斤 ${this.product.name} 加入购物车！`)
    }
  }
}
</script>

<style scoped>
.product-detail-container {
  padding: 20px;
}

.product-detail {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.product-header {
  padding: 30px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.product-header h2 {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: #333;
  flex: 1;
}

.product-content {
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  border-bottom: 1px solid #eee;
}

.product-image {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
}

.product-image img {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 8px;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
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

.info-value.price {
  font-size: 24px;
  font-weight: bold;
  color: #F44336;
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

.product-description {
  padding: 30px;
  border-bottom: 1px solid #eee;
}

.product-description h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 10px 0;
  color: #333;
}

.product-description p {
  margin: 0 0 20px 0;
  color: #666;
  line-height: 1.5;
}

.product-actions {
  padding: 30px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.quantity-control button {
  width: 40px;
  height: 40px;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.quantity-control button:hover {
  background-color: #e0e0e0;
}

.quantity-control button:disabled {
  background-color: #f0f0f0;
  cursor: not-allowed;
  color: #999;
}

.quantity-control input {
  width: 60px;
  height: 40px;
  border: none;
  text-align: center;
  font-size: 14px;
  outline: none;
}

@media (max-width: 768px) {
  .product-header {
    flex-direction: column;
    gap: 15px;
  }
  
  .product-header h2 {
    font-size: 20px;
  }
  
  .product-content {
    grid-template-columns: 1fr;
    padding: 20px;
  }
  
  .product-description {
    padding: 20px;
  }
  
  .product-actions {
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
  }
  
  .quantity-control {
    justify-content: center;
  }
  
  .product-actions button,
  .product-actions a {
    width: 100%;
  }
}
</style>