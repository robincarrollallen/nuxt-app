<script setup lang="ts">
interface Props {
	type?: string,
  name?: string,
	url?: string
}

const props = withDefaults(defineProps<Props>(), {
	type: '',
	name: '',
	url: ''
})

const svgContent = ref('')

onMounted(async () => {
	try {
		if (props.url) {
			const response = await fetch(props.url)
			const contentType = response.headers.get('content-type')
			if (contentType && contentType.includes('image/svg+xml')) {
				svgContent.value = await response.text() // SVG 文件
			} else {
				svgContent.value = `<img src="${props.url}" />`// 非 SVG 文件，使用 img 标签
			}
		} else if (props.type) {
			const iconModule = await import(`~/assets/svg/${props.type}/${props.name}.svg?raw`)
			svgContent.value = iconModule.default
		} else if (props.name) {
			const iconModule = await import(`~/assets/svg/${props.name}.svg?raw`)
			svgContent.value = iconModule.default
		}
	} catch (error) {
		console.error('Failed to load SVG:', error)
	}
})
</script>

<template>
  <span
		v-if="svgContent"
    class="svg-icon"
    v-html="svgContent"
  />
</template>

<style scoped>
.svg-icon {
  display: inline-block;
  vertical-align: middle;
}

:global(.svg-icon svg) {
  width: 100%;
  height: 100%;
}
</style>
