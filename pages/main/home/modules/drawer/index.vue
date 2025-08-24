<script setup lang="ts">
import type { ComponentConfig } from '~/theme/componentConfig'
import SideBar from '~/widgets/sidebar/index.vue'

const statusStore = useStatusStore()

const props = defineProps({
	components: {
		type: Array as PropType<ComponentConfig[]>,
		default: () => []
	},
})
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
		<SideBar :components="props.components" />
	</van-popup>
</template>

<style lang="less" scoped>
@import './index.less';
</style>
