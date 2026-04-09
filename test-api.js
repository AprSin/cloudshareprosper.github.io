import axios from 'axios';

async function testRegister() {
  try {
    const response = await axios.post('http://localhost:3000/api/auth/register', {
      username: 'testuser',
      password: '123456',
      name: '测试用户',
      phone: '13800138000',
      email: 'test@example.com'
    });
    console.log('注册成功:', response.data);
  } catch (error) {
    console.error('注册失败:', error.response?.data || error.message);
  }
}

async function testLogin() {
  try {
    const response = await axios.post('http://localhost:3000/api/auth/login', {
      username: 'testuser',
      password: '123456'
    });
    console.log('登录成功:', response.data);
  } catch (error) {
    console.error('登录失败:', error.response?.data || error.message);
  }
}

testRegister().then(testLogin);