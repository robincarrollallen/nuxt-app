import { LanguageSupport, type LanguageType } from '~/common/enum/language'

export const useAppStore = defineStore('app', () => {
	const locale = ref<LanguageType>(LanguageSupport[0])

	/**
	 * 设置语言
	 */
	const setLocale = (language: string) => {
		const { $i18n } = useNuxtApp()

		locale.value = LanguageSupport.includes(language as any)
			? (language as LanguageType)
			: LanguageSupport[0]

		$i18n.setLocale(locale.value)
		useCookie('lang').value = locale.value
	}

	return { locale, setLocale }
})
