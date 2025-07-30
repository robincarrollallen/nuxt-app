import { LanguageSupport, type LanguageType } from '~/common/enum/language'

export const useStatusStore = defineStore('status', () => {
	const showMainLeftDrawer = ref(false)

	/**
	 * 设置语言
	 */
	const setShowMainLeftDrawer = (status = false) => {
		showMainLeftDrawer.value = status
	}

	return { showMainLeftDrawer, setShowMainLeftDrawer }
})
