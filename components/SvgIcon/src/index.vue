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
				svgContent.value = await response.text() // SVG file
			} else {
				svgContent.value = `<img src="${props.url}" />`// Non-SVG file, use img tag
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
