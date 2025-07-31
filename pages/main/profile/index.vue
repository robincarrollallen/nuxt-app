<script setup lang="ts">
defineOptions({
	name: 'ProfilePage'
})

// Use main layout
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
            John Doe
          </h2>
          <p class="user-email">
            john.doe@example.com
          </p>
        </div>
      </div>
    </div>

    <div class="profile-content">
      <div class="section-card">
        <h3 class="section-title">
          Personal Information
        </h3>
        <div class="info-list">
          <div class="info-item">
            <span class="label">Name</span>
            <span class="value">John Doe</span>
          </div>
          <div class="info-item">
            <span class="label">Phone</span>
            <span class="value">138****5678</span>
          </div>
          <div class="info-item">
            <span class="label">Email</span>
            <span class="value">john.doe@example.com</span>
          </div>
          <div class="info-item">
            <span class="label">Registration Date</span>
            <span class="value">January 1, 2024</span>
          </div>
        </div>
      </div>

      <div class="section-card">
        <h3 class="section-title">
          Account Settings
        </h3>
        <div class="setting-list">
          <div class="setting-item">
            <div class="setting-icon">
              🔐
            </div>
            <div class="setting-content">
              <h4>Change Password</h4>
              <p>Update your account password</p>
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
              <h4>Bind Phone</h4>
              <p>Manage your phone number</p>
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
              <h4>Email Settings</h4>
              <p>Manage your email address</p>
            </div>
            <div class="setting-arrow">
              →
            </div>
          </div>
        </div>
      </div>

      <div class="section-card">
        <h3 class="section-title">
          Privacy Settings
        </h3>
        <div class="setting-list">
          <div class="setting-item">
            <div class="setting-icon">
              🔒
            </div>
            <div class="setting-content">
              <h4>Privacy Policy</h4>
              <p>View our privacy policy</p>
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
              <h4>Security Settings</h4>
              <p>Manage your security options</p>
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
