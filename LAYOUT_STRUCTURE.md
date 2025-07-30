# 嵌套 Layout 结构说明

## 概述

这个项目实现了两个 layout 的嵌套结构，用于 `/main/*` 路由。

## Layout 层次结构

```
layouts/main.vue (外层 Layout)
├── 整体容器和 Tabber
└── layouts/main-layout.vue (内层 Layout)
    ├── Header (导航栏)
    ├── Main Content (页面内容)
    └── Footer
```

## 文件结构

### 1. 外层 Layout: `layouts/main.vue`
- 提供整体页面容器
- 包含 KeepAlive 功能
- 显示底部的 Tabber
- 使用 `<MainLayout>` 组件作为内层layout

### 2. 内层 Layout: `layouts/main-layout.vue`
- 提供具体的页面布局结构
- 包含 Header、Content、Footer 三个区域
- 通过 `<slot />` 渲染页面内容
- 包含顶部导航菜单

### 3. 页面文件
- `pages/main/index.vue` - 主页面（展示嵌套结构）
- `pages/main/home/index.vue` - 首页
- `pages/main/about.vue` - 关于页面
- `pages/main/profile.vue` - 个人资料页面
- `pages/main/settings.vue` - 设置页面

## 使用方法

### 在页面中使用嵌套 Layout

```vue
<script setup lang="ts">
defineOptions({
  name: 'YourPageName',
  layout: 'main'  // 指定使用外层 layout
})
</script>

<template>
  <div>
    <!-- 你的页面内容 -->
  </div>
</template>
```

### 嵌套结构的工作流程

1. **外层Layout** (`layouts/main.vue`) 提供整体容器和底部Tabber
2. **内层Layout** (`layouts/main-layout.vue`) 通过 `<MainLayout>` 组件被调用
3. **页面内容** 在 `<MainLayout>` 的 `<slot />` 中渲染

### 添加新的页面

1. 在 `pages/main/` 目录下创建新的页面文件
2. 在 `defineOptions` 中设置 `layout: 'main'`
3. 在 `layouts/main-layout.vue` 的导航中添加链接

### 自定义 Layout

如果需要不同的内层 layout，可以：

1. 创建新的 layout 文件，如 `layouts/other-layout.vue`
2. 在 `layouts/main.vue` 中替换 `<MainLayout>` 为新的组件

## 样式说明

- 外层 layout 使用 `h-svh` 确保全屏高度
- 内层 layout 使用 flexbox 布局
- 页面内容通过 CSS Grid 实现响应式布局
- 使用 Tailwind CSS 进行样式设计

## 路由结构

```
/main
├── /main          - 主页面（展示嵌套结构）
├── /main/home     - 首页
├── /main/about    - 关于页面
├── /main/profile  - 个人资料页面
└── /main/settings - 设置页面
```

所有 `/main/*` 路由都会使用这个嵌套 layout 结构。

## 技术特点

- **KeepAlive**: 保持页面状态，避免重复渲染
- **Transition**: 页面切换动画效果
- **响应式设计**: 适配不同屏幕尺寸
- **组件化**: 清晰的组件分离和复用
