<script setup lang="ts">
import { useNavBarMenuLogic } from '../logic'

const props = defineProps({
	icon: {
		type: String,
		default: () => '@/assets/svg/menu.svg'
	}
})

const { showMainLeftDrawer } = useNavBarMenuLogic()
</script>

<template>
  <SvgIcon :url="props.icon" class="menu-svg" @click="showMainLeftDrawer" v-bind="$attrs"/>
</template>

<style scoped lang="less">
.menu-svg {
	cursor: pointer;
}
</style>
