<template>
  <div class="data-container">
    <h1>交易大数据</h1>
    
    <div class="time-filter">
      <label>时间范围</label>
      <select v-model="timeRange">
        <option value="week">近一周</option>
        <option value="month">近一个月</option>
        <option value="quarter">近三个月</option>
        <option value="year">近一年</option>
        <option value="all">全部</option>
      </select>
    </div>
    
    <div class="data-overview">
      <div class="stat-card">
        <div class="stat-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
        </div>
        <div class="stat-content">
          <div class="stat-number">{{ totalProjects }}</div>
          <div class="stat-label">累计交易项目</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </div>
        <div class="stat-content">
          <div class="stat-number">{{ totalAmount }}</div>
          <div class="stat-label">累计交易金额 (万元)</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <div class="stat-content">
          <div class="stat-number">{{ successRate }}%</div>
          <div class="stat-label">交易成功率</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </div>
        <div class="stat-content">
          <div class="stat-number">{{ activeUsers }}</div>
          <div class="stat-label">活跃用户数</div>
        </div>
      </div>
    </div>
    
    <div class="chart-section">
      <div class="chart-card">
        <h2>交易趋势</h2>
        <div class="chart-container">
          <canvas id="transactionTrendChart"></canvas>
        </div>
      </div>
      <div class="chart-card">
        <h2>交易类型分布</h2>
        <div class="chart-container">
          <canvas id="transactionTypeChart"></canvas>
        </div>
      </div>
    </div>
    
    <div class="chart-section">
      <div class="chart-card">
        <h2>地区分布</h2>
        <div class="chart-container">
          <canvas id="regionDistributionChart"></canvas>
        </div>
      </div>
      <div class="chart-card">
        <h2>交易金额分布</h2>
        <div class="chart-container">
          <canvas id="amountDistributionChart"></canvas>
        </div>
      </div>
    </div>
    
    <div class="data-details">
      <h2>交易详情</h2>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>项目编号</th>
              <th>项目名称</th>
              <th>交易类型</th>
              <th>交易金额 (万元)</th>
              <th>交易日期</th>
              <th>交易状态</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in transactionDetails" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.date }}</td>
              <td>
                <span :class="['status-badge', item.status]">
                  {{ item.statusText }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Data',
  data() {
    return {
      timeRange: 'month',
      totalProjects: 128,
      totalAmount: 580,
      successRate: 80,
      activeUsers: 2500,
      transactionDetails: [
        {
          id: 'SQ2026001',
          name: '商丘市梁园区谢集镇杨波村宅基地出租',
          type: '宅基地',
          amount: 120,
          date: '2024-12-15',
          status: 'success',
          statusText: '交易成功'
        },
        {
          id: 'SQ2026002',
          name: '商丘市梁园区谢集镇东街村村中心广场西侧厂房出租',
          type: '厂房',
          amount: 85,
          date: '2024-12-10',
          status: 'success',
          statusText: '交易成功'
        },
        {
          id: 'SQ2026003',
          name: '商丘市梁园区谢集镇常庄村村部北侧厂房出租',
          type: '厂房',
          amount: 75,
          date: '2024-12-05',
          status: 'success',
          statusText: '交易成功'
        },
        {
          id: 'SQ2026004',
          name: '商丘市梁园区谢集镇王步口村闲置厂房出租',
          type: '厂房',
          amount: 95,
          date: '2024-12-01',
          status: 'processing',
          statusText: '交易中'
        },
        {
          id: 'SQ2026005',
          name: '商丘市梁园区谢集镇朱庄寨村主干道旁临街厂房出租',
          type: '厂房',
          amount: 110,
          date: '2024-11-25',
          status: 'success',
          statusText: '交易成功'
        }
      ]
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      // 交易趋势图表
      const trendCtx = document.getElementById('transactionTrendChart')
      if (trendCtx) {
        new Chart(trendCtx, {
          type: 'line',
          data: {
            labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            datasets: [{
              label: '交易项目数',
              data: [8, 12, 15, 10, 18, 20, 15, 22, 18, 25, 30, 35],
              borderColor: '#4CAF50',
              backgroundColor: 'rgba(76, 175, 80, 0.1)',
              tension: 0.4,
              fill: true
            }, {
              label: '交易金额 (万元)',
              data: [200, 350, 420, 300, 500, 550, 480, 600, 520, 700, 850, 950],
              borderColor: '#2196F3',
              backgroundColor: 'rgba(33, 150, 243, 0.1)',
              tension: 0.4,
              fill: true,
              yAxisID: 'y1'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: false
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: '项目数'
                }
              },
              y1: {
                beginAtZero: true,
                position: 'right',
                title: {
                  display: true,
                  text: '金额 (万元)'
                },
                grid: {
                  drawOnChartArea: false
                }
              }
            }
          }
        })
      }
      
      // 交易类型分布图表
      const typeCtx = document.getElementById('transactionTypeChart')
      if (typeCtx) {
        new Chart(typeCtx, {
          type: 'pie',
          data: {
            labels: ['厂房', '宅基地', '土地', '其他'],
            datasets: [{
              data: [45, 30, 20, 5],
              backgroundColor: [
                '#4CAF50',
                '#2196F3',
                '#FFC107',
                '#9E9E9E'
              ]
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
              }
            }
          }
        })
      }
      
      // 地区分布图表
      const regionCtx = document.getElementById('regionDistributionChart')
      if (regionCtx) {
        new Chart(regionCtx, {
          type: 'bar',
          data: {
            labels: ['谢集镇', '前进街道', '其他地区'],
            datasets: [{
              label: '交易项目数',
              data: [65, 35, 28],
              backgroundColor: '#4CAF50'
            }, {
              label: '交易金额 (万元)',
              data: [2100, 1050, 410],
              backgroundColor: '#2196F3'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              }
            },
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        })
      }
      
      // 交易金额分布图表
      const amountCtx = document.getElementById('amountDistributionChart')
      if (amountCtx) {
        new Chart(amountCtx, {
          type: 'bar',
          data: {
            labels: ['0-50万', '50-100万', '100-200万', '200万以上'],
            datasets: [{
              label: '交易项目数',
              data: [45, 35, 25, 23],
              backgroundColor: '#4CAF50'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              }
            },
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.data-container {
  padding: 20px;
}

.time-filter {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.time-filter label {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

.time-filter select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.data-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.stat-icon {
  background-color: rgba(76, 175, 80, 0.1);
  padding: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-content {
  flex: 1;
}

.stat-number {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 14px;
  color: #666;
}

.chart-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.chart-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.chart-card h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.chart-container {
  height: 300px;
  position: relative;
}

.data-details {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.data-details h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.table-responsive {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.data-table th {
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

@media (max-width: 768px) {
  .data-overview {
    grid-template-columns: 1fr;
  }
  
  .chart-section {
    grid-template-columns: 1fr;
  }
  
  .chart-container {
    height: 250px;
  }
  
  .time-filter {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .time-filter select {
    width: 100%;
  }
}
</style>