// 提交登录
document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // 在这里添加处理登录的逻辑
  // 可以使用 AJAX 或 Fetch API 发送登录请求到后端服务器

  // 示例：使用 Fetch API 发送登录请求
  fetch('api.bilibili.com/x/web-interface/nav', { // 假设这是登录的 API 接口
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(response => response.json())
    .then(data => {
      // 登录成功，进行相应的操作
      console.log('登录成功:', data);
      // 这里可以跳转到其他页面或执行其他逻辑
    })
    .catch(error => {
      // 登录失败，处理错误信息
      console.error('登录失败:', error);
      // 这里可以显示错误提示或执行其他逻辑
    });
});
