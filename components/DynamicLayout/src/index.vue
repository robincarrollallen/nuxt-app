<script setup lang="ts">
import type { ComponentConfig } from '~/theme/componentConfig'

const props = defineProps({
	components: {
		type: Array as PropType<ComponentConfig[]>,
		default: () => []
	},
})

</script>

<template>
  <div class="dynamic-layout">
    <component
      v-for="(item, index) in props.components"
      :key="index"
      :is="defineAsyncComponent(item.component)"
      v-bind="item.options"
    />
  </div>
</template>

<style scoped lang="less">
@media (min-width: 540px) {
  .nav-bar {
		display: none !important;
	}
}

</style>
