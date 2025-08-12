<script setup lang="ts">
defineOptions({
	name: 'DepositPage'
})

// Use main layout
definePageMeta({
	layout: 'main'
})
</script>

<template>
  <div class="agent-page">
    <ClientOnly>

		</ClientOnly>
  </div>
</template>

<style lang="less" scoped>
.agent-page {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden auto;
}
</style>
