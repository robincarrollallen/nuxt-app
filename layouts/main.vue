<script setup lang="ts">
import { TabbarComponent } from '@/theme/componentConfig/style_18'
</script>

<template>
  <NuxtLayout name="default">
		<div id="__main">
			<NuxtPage keepalive />
		</div>
		<component :is="defineAsyncComponent(TabbarComponent.component)" />
  </NuxtLayout>
</template>

<style scoped lang="less">
#__main {
	flex: 1;
	position: relative;
	height: 100%;
}
</style>
