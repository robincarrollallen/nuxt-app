<script setup lang="ts">
interface Props {
	url?: string
}

const props = withDefaults(defineProps<Props>(), {
	url: ''
})

const svgContent = ref('')

// 简化的路径处理
const processPath = (url: string) => {
	const cleanPath = url.replace(/^[~@]\/+/, '')
	const parts = cleanPath.split('/')
	const fileName = parts.pop()?.replace(/\.svg$/i, '') || ''
	return [...parts, fileName]
}

// 简化的动态import
const importSvg = async (pathParts: string[]) => {
	// 根据路径长度使用不同的导入方式
	const importMap = {
		1: () => import(`~/${pathParts[0]}.svg?raw`),
		2: () => import(`~/${pathParts[0]}/${pathParts[1]}.svg?raw`),
		3: () => import(`~/${pathParts[0]}/${pathParts[1]}/${pathParts[2]}.svg?raw`),
		4: () => import(`~/${pathParts[0]}/${pathParts[1]}/${pathParts[2]}/${pathParts[3]}.svg?raw`),
		5: () => import(`~/${pathParts[0]}/${pathParts[1]}/${pathParts[2]}/${pathParts[3]}/${pathParts[4]}.svg?raw`),
		6: () => import(`~/${pathParts[0]}/${pathParts[1]}/${pathParts[2]}/${pathParts[3]}/${pathParts[4]}/${pathParts[5]}.svg?raw`)
	}

	const importFn = importMap[pathParts.length as keyof typeof importMap]
	if (!importFn) {
		throw new Error(`Unsupported path depth: ${pathParts.length}`)
	}

	const iconModule = await importFn()
	return iconModule.default
}

/**
 * Load remote SVG file
 * @param url - The URL of the SVG file
 */
const loadRemoteSvg = async (url: string) => {
	try {
		const response = await fetch(url)
		const contentType = response.headers.get('content-type')

		if (contentType?.includes('image/svg+xml')) {
			return await response.text()
		} else {
			return `<img src="${url}" />`
		}
	} catch (error) {
		console.error(`Failed to load remote SVG: ${url}`, error)
		return `<img src="${url}" />`
	}
}

/**
 * Load local SVG file
 * @param url - The URL of the SVG file
 */
const loadLocalSvg = async (url: string) => {
	// 先判断是否以.svg结尾
	if (!url.toLowerCase().endsWith('.svg')) {
		return `<img src="${url}" />`
	}

	try {
		const pathParts = processPath(url)
		return await importSvg(pathParts)
	} catch (error) {
		console.error(`Failed to load SVG from path: ${url}`, error)
		throw error
	}
}

onMounted(async () => {
	if (!props.url) {
		return console.warn('SvgIcon: url prop is required')
	}

	try {
		const isRemote = props.url.startsWith('/') || props.url.startsWith('http')
		const isLocal = props.url.startsWith('~/') || props.url.startsWith('@/')

		if (isRemote) {
			svgContent.value = await loadRemoteSvg(props.url)
		} else if (isLocal) {
			svgContent.value = await loadLocalSvg(props.url)
		} else {
			console.warn('SvgIcon: Invalid url format. Expected remote URL or local path starting with ~/ or @/')
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
