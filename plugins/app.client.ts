import { useSystemStore } from '~/stores/system'

// Execute immediately when plugin starts
export default defineNuxtPlugin(() => {
	const systemStore = useSystemStore()

	// Execute logic that needs to wait for Nuxt to be fully initialized
	onNuxtReady(() => {
		systemStore.updateScreenSize()
		window.addEventListener('resize', systemStore.updateScreenSize)
	})
})
