<script setup lang="ts">
defineOptions({
	name: 'ProfilePage'
})

// 使用 main 布局
definePageMeta({
	layout: 'main'
})
</script>

<template>
  <div class="profile-page">
    <div class="profile-header">
      <div class="avatar-section">
        <div class="avatar">
          👤
        </div>
        <div class="user-info">
          <h2 class="user-name">
            张三
          </h2>
          <p class="user-email">
            zhangsan@example.com
          </p>
        </div>
      </div>
    </div>

    <div class="profile-content">
      <div class="section-card">
        <h3 class="section-title">
          个人信息
        </h3>
        <div class="info-list">
          <div class="info-item">
            <span class="label">姓名</span>
            <span class="value">张三</span>
          </div>
          <div class="info-item">
            <span class="label">手机号</span>
            <span class="value">138****5678</span>
          </div>
          <div class="info-item">
            <span class="label">邮箱</span>
            <span class="value">zhangsan@example.com</span>
          </div>
          <div class="info-item">
            <span class="label">注册时间</span>
            <span class="value">2024年1月1日</span>
          </div>
        </div>
      </div>

      <div class="section-card">
        <h3 class="section-title">
          账户设置
        </h3>
        <div class="setting-list">
          <div class="setting-item">
            <div class="setting-icon">
              🔐
            </div>
            <div class="setting-content">
              <h4>修改密码</h4>
              <p>更新您的账户密码</p>
            </div>
            <div class="setting-arrow">
              →
            </div>
          </div>
          <div class="setting-item">
            <div class="setting-icon">
              📱
            </div>
            <div class="setting-content">
              <h4>绑定手机</h4>
              <p>管理您的手机号码</p>
            </div>
            <div class="setting-arrow">
              →
            </div>
          </div>
          <div class="setting-item">
            <div class="setting-icon">
              📧
            </div>
            <div class="setting-content">
              <h4>邮箱设置</h4>
              <p>管理您的邮箱地址</p>
            </div>
            <div class="setting-arrow">
              →
            </div>
          </div>
        </div>
      </div>

      <div class="section-card">
        <h3 class="section-title">
          隐私设置
        </h3>
        <div class="setting-list">
          <div class="setting-item">
            <div class="setting-icon">
              🔒
            </div>
            <div class="setting-content">
              <h4>隐私政策</h4>
              <p>查看我们的隐私政策</p>
            </div>
            <div class="setting-arrow">
              →
            </div>
          </div>
          <div class="setting-item">
            <div class="setting-icon">
              🛡️
            </div>
            <div class="setting-content">
              <h4>安全设置</h4>
              <p>管理您的安全选项</p>
            </div>
            <div class="setting-arrow">
              →
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-page {
  height: 100%;
}

.profile-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

.avatar-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.user-info h2 {
  margin: 0 0 0.25rem 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.user-info p {
  margin: 0;
  opacity: 0.9;
  font-size: 0.9rem;
}

.profile-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.info-item:last-child {
  border-bottom: none;
}

.label {
  color: #64748b;
  font-size: 0.9rem;
}

.value {
  color: #1e293b;
  font-weight: 500;
  font-size: 0.9rem;
}

.setting-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.setting-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.setting-item:hover {
  background: #f1f5f9;
  transform: translateX(4px);
}

.setting-icon {
  font-size: 1.5rem;
  width: 40px;
  text-align: center;
}

.setting-content {
  flex: 1;
}

.setting-content h4 {
  color: #1e293b;
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.setting-content p {
  color: #64748b;
  margin: 0;
  font-size: 0.85rem;
}

.setting-arrow {
  color: #94a3b8;
  font-size: 1.2rem;
}
</style>
