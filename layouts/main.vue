<script setup lang="ts">
import { getComponentConfig } from '@/theme/componentConfig'

const tenantStore = useTenantStore()

const tabbarComponent = computed(() => getComponentConfig(tenantStore.theme, 'TabbarComponent')) // 底部导航栏组件配置
</script>

<template>
  <NuxtLayout name="default">
		<div id="__main">
			<NuxtPage keepalive />
		</div>
		<component :is="defineAsyncComponent(tabbarComponent.component)" />
  </NuxtLayout>
</template>

<style scoped lang="less">
#__main {
	flex: 1;
	position: relative;
	height: 100%;
}
</style>
