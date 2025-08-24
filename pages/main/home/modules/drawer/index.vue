<script setup lang="ts">
import Sidebar from '~/widgets/sidebar/index.vue'

const statusStore = useStatusStore()
</script>

<template>
	<van-popup
		round
		position="left"
		teleport="#__main"
		overlay-class="sidebar-overlay"
		v-model:show="statusStore.showMainLeftDrawer"
		:style="{ height: '100%' }"
	>
		<Sidebar/>
	</van-popup>
</template>

<style lang="less" scoped>
@import './index.less';
</style>
