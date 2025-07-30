# Nuxt Layout 嵌套详解

## 概述

在Nuxt中，真正的layout嵌套是通过在layout文件中使用`<NuxtLayout>`来实现的，而不是通过组件slot的方式。

## 嵌套结构

```
layouts/default.vue (根Layout)
└── layouts/main.vue (主Layout)
    └── layouts/main-inner.vue (内层Layout)
        └── pages/main/home/index.vue (页面内容)
```

## 文件结构说明

### 1. 根Layout: `layouts/default.vue`
- 提供应用的整体结构
- 包含全局Header和Footer
- 使用`<NuxtPage />`渲染子路由

### 2. 主Layout: `layouts/main.vue`
- 为`/main/*`路由提供特定布局
- 包含顶部导航和底部Tabber
- 使用`<NuxtPage />`渲染页面内容

### 3. 内层Layout: `layouts/main-inner.vue`
- 为特定页面提供更细粒度的布局
- 包含页面级别的Header和Footer
- 使用`<NuxtPage />`渲染最终页面内容

## 使用方法

### 在页面中指定Layout

```vue
<script setup lang="ts">
defineOptions({
  name: 'YourPageName',
  layout: 'main-inner'  // 指定使用内层layout
})
</script>

<template>
  <div>
    <!-- 页面内容 -->
  </div>
</template>
```

### Layout嵌套的工作流程

1. **路由匹配**: 访问`/main/home`
2. **根Layout**: `layouts/default.vue` 被加载
3. **主Layout**: `layouts/main.vue` 通过`<NuxtPage />`被加载
4. **内层Layout**: `layouts/main-inner.vue` 通过`<NuxtPage />`被加载
5. **页面内容**: `pages/main/home/index.vue` 最终被渲染

## 关键特点

### 1. 使用`<NuxtPage />`而不是slot
```vue
<!-- 正确的layout嵌套方式 -->
<template>
  <div class="layout">
    <header>Header</header>
    <main>
      <NuxtPage /> <!-- 这里会渲染子layout或页面 -->
    </main>
    <footer>Footer</footer>
  </div>
</template>
```

### 2. Layout的自动嵌套
- Nuxt会根据路由自动选择合适的layout
- 每个layout都可以有自己的`<NuxtPage />`
- 形成真正的嵌套结构

### 3. 样式隔离
- 每个layout都有自己的scoped样式
- 不会相互干扰

## 路由和Layout的对应关系

```
/                    → layouts/default.vue
/main               → layouts/default.vue + layouts/main.vue
/main/home          → layouts/default.vue + layouts/main.vue + layouts/main-inner.vue
/main/about         → layouts/default.vue + layouts/main.vue + layouts/main-inner.vue
```

## 优势

1. **真正的嵌套**: 每个layout都是独立的，有自己的生命周期
2. **路由驱动**: 根据路由自动选择合适的layout
3. **代码复用**: 不同页面可以共享相同的layout结构
4. **维护性好**: 每个layout职责单一，易于维护

## 注意事项

1. **性能**: 嵌套层级不宜过深，会影响性能
2. **复杂度**: 过多的layout嵌套会增加代码复杂度
3. **调试**: 嵌套layout的调试相对复杂

## 最佳实践

1. **合理分层**: 通常2-3层嵌套就足够了
2. **职责明确**: 每个layout应该有明确的职责
3. **命名规范**: 使用清晰的命名约定
4. **文档完善**: 为复杂的layout结构编写文档
