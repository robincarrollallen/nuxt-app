<script setup lang="ts">
import { getComponentConfig } from '@/theme/componentConfig'

const tenantStore = useTenantStore()

defineOptions({
	name: 'HomePage'
})

definePageMeta({
	layout: 'main',
	keepalive: true
})

const homeHeaderComponent = computed(() => getComponentConfig(tenantStore.theme, 'HomeHeaderComponent')) // 首页头部组件配置
const homeContentComponent = computed(() => getComponentConfig(tenantStore.theme, 'HomeContentComponent')) // 首页内容组件配置
const homeDrawerComponent = computed(() => getComponentConfig(tenantStore.theme, 'HomeDrawerComponent')) // 首页抽屉组件配置
</script>

<template>
  <div class="home-page" v-bind="homeContentComponent.options">
		<header>
			<component v-for="(item, index) in homeHeaderComponent.children" :key="index" :is="defineAsyncComponent(item.component)" v-bind="{...item.options, components: item.children}"/>
		</header>

		<main class="main-warp" v-bind="homeContentComponent.options">
			<component v-for="(item, index) in homeContentComponent.children" :key="index" :is="defineAsyncComponent(item.component)" v-bind="{...item.options, components: item.children}"/>
		</main>

		<!-- 左侧抽屉 -->
		<ClientOnly>
			<component :is="defineAsyncComponent(homeDrawerComponent.component)" v-bind="{...homeDrawerComponent.options, components: homeDrawerComponent.children}"/>
		</ClientOnly>
  </div>
</template>

<style scoped lang="less">
.home-page {
	height: 100%;
	position: relative;
	z-index: 0;
	display: flex;
	flex-direction: column;

	.main-warp {
		display: grid;
		grid-template-columns: 100%;
		gap: 1rem;
		padding: .5rem 1rem 0;
		flex: 1;
		overflow: hidden auto;
	}
}

</style>
