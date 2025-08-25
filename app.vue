<script setup lang="ts">
const { data: meta } = await useFetch('/api/meta')

useHead({
	title: meta.value?.title,
	meta: [
		{ name: 'description', content: meta.value?.description }
	],
	link: [
		{ rel: 'icon', type: 'image/x-icon', href: meta.value?.icon }
	]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="less">
@import '@/assets/css/global.css';
@import '@/assets/css/animate.css';
</style>
