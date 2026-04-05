<template>
  <div class="order-container">
    <h1>我的订单</h1>
    <div class="order-filters">
      <button class="filter-btn" :class="{ active: activeFilter === 'all' }" @click="activeFilter = 'all'">全部</button>
      <button class="filter-btn" :class="{ active: activeFilter === 'pending' }" @click="activeFilter = 'pending'">待付款</button>
      <button class="filter-btn" :class="{ active: activeFilter === 'processing' }" @click="activeFilter = 'processing'">处理中</button>
      <button class="filter-btn" :class="{ active: activeFilter === 'completed' }" @click="activeFilter = 'completed'">已完成</button>
      <button class="filter-btn" :class="{ active: activeFilter === 'cancelled' }" @click="activeFilter = 'cancelled'">已取消</button>
    </div>
    <div class="order-list">
      <div v-for="order in filteredOrders" :key="order.id" class="order-item">
        <div class="order-header">
          <div class="order-info">
            <span class="order-id">订单编号: {{ order.id }}</span>
            <span class="order-date">下单时间: {{ order.date }}</span>
          </div>
          <span class="order-status" :class="'status-' + order.status">{{ getStatusText(order.status) }}</span>
        </div>
        <div class="order-content">
          <div v-for="item in order.items" :key="item.id" class="order-item-detail">
            <div class="item-image">
              <img :src="item.image" :alt="item.name">
            </div>
            <div class="item-info">
              <h3>{{ item.name }}</h3>
              <div class="item-meta">
                <span class="item-price">¥{{ item.price }}</span>
                <span class="item-quantity">x{{ item.quantity }}</span>
              </div>
            </div>
            <div class="item-total">¥{{ (item.price * item.quantity).toFixed(2) }}</div>
          </div>
        </div>
        <div class="order-footer">
          <div class="order-total">
            总计: <span class="total-price">¥{{ order.total }}</span>
          </div>
          <div class="order-actions">
            <button v-if="order.status === 'pending'" class="btn btn-primary">立即付款</button>
            <button v-if="order.status === 'pending'" class="btn btn-secondary">取消订单</button>
            <button v-if="order.status === 'completed'" class="btn btn-secondary">查看详情</button>
            <button v-if="order.status === 'completed'" class="btn btn-secondary">再次购买</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="filteredOrders.length === 0" class="empty-state">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
      <p>暂无订单</p>
      <button class="btn btn-primary" @click="$router.push('/products')">去购物</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  data() {
    return {
      activeFilter: 'all',
      orders: [
        {
          id: '20241215001',
          date: '2024-12-15 10:30',
          status: 'completed',
          total: 125.00,
          items: [
            {
              id: '1',
              name: '商丘市梁园区优质小麦',
              price: 2.5,
              quantity: 50,
              image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=high%20quality%20wheat%20grains%20in%20farm&image_size=square'
            }
          ]
        },
        {
          id: '20241214002',
          date: '2024-12-14 15:45',
          status: 'processing',
          total: 85.00,
          items: [
            {
              id: '2',
              name: '商丘市梁园区新鲜玉米',
              price: 1.7,
              quantity: 50,
              image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20corn%20cobs%20in%20farm&image_size=square'
            }
          ]
        },
        {
          id: '20241213003',
          date: '2024-12-13 09:15',
          status: 'pending',
          total: 60.00,
          items: [
            {
              id: '3',
              name: '商丘市梁园区红薯',
              price: 1.2,
              quantity: 50,
              image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20sweet%20potatoes%20in%20farm&image_size=square'
            }
          ]
        }
      ]
    }
  },
  computed: {
    filteredOrders() {
      if (this.activeFilter === 'all') {
        return this.orders;
      }
      return this.orders.filter(order => order.status === this.activeFilter);
    }
  },
  methods: {
    getStatusText(status) {
      const statusMap = {
        pending: '待付款',
        processing: '处理中',
        completed: '已完成',
        cancelled: '已取消'
      };
      return statusMap[status] || status;
    }
  }
}
</script>

<style scoped>
.order-container {
  padding: 20px;
}

.order-filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
}

.filter-btn:hover {
  border-color: #4CAF50;
  color: #4CAF50;
}

.filter-btn.active {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

.order-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order-item {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}

.order-info {
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: #666;
}

.order-status {
  font-size: 14px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 12px;
}

.status-pending {
  background-color: #FFF3E0;
  color: #FF9800;
}

.status-processing {
  background-color: #E3F2FD;
  color: #2196F3;
}

.status-completed {
  background-color: #E8F5E8;
  color: #4CAF50;
}

.status-cancelled {
  background-color: #EEEEEE;
  color: #999;
}

.order-content {
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.order-item-detail {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
}

.order-item-detail:last-child {
  border-bottom: none;
}

.item-image {
  width: 80px;
  height: 80px;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-info {
  flex: 1;
}

.item-info h3 {
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 8px 0;
  color: #333;
}

.item-meta {
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: #666;
}

.item-price {
  font-weight: 500;
}

.item-total {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.order-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

.order-total {
  font-size: 16px;
  color: #333;
}

.total-price {
  font-weight: bold;
  color: #F44336;
  font-size: 18px;
}

.order-actions {
  display: flex;
  gap: 10px;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.empty-state svg {
  margin-bottom: 20px;
}

.empty-state p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .order-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .order-info {
    flex-direction: column;
    gap: 5px;
  }
  
  .order-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .order-actions {
    width: 100%;
    justify-content: space-between;
  }
  
  .order-actions button {
    flex: 1;
  }
}
</style>