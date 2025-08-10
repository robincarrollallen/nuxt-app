import { piniaIndexedDBPlugin } from '@/stores/plugin'
import type { Pinia } from 'pinia'

export default defineNuxtPlugin((nuxtApp) => {
	const pinia = nuxtApp.$pinia as Pinia
	pinia.use(piniaIndexedDBPlugin)
})
