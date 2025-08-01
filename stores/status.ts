import { LanguageSupport, type LanguageType } from '~/enums/language'

export const useStatusStore = defineStore('status', () => {
	const showMainLeftDrawer = ref(false)

	/**
	 * Set whether to show the main left drawer
	 */
	const setShowMainLeftDrawer = (status = false) => {
		showMainLeftDrawer.value = status
	}

	return { showMainLeftDrawer, setShowMainLeftDrawer }
})
