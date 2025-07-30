import { useSystemStore } from '~/stores/system'

// 插件启动时立即执行
export default defineNuxtPlugin(() => {
	const systemStore = useSystemStore()

	// 在这里执行需要等待 Nuxt 完全初始化的逻辑
	onNuxtReady(() => {
		systemStore.updateScreenSize()
		window.addEventListener('resize', systemStore.updateScreenSize)
	})
})
