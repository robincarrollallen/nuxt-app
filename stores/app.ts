import { LanguageSupport, type LanguageType } from '@/enums/language'

export const useAppStore = defineStore('app', () => {
	const token = ref('')
	const locale = ref<LanguageType>(LanguageSupport[0])

	/**
	 * Set language
	 * @param language - The language to set
	 */
	const setLocale = (language: string) => {
		const { $i18n } = useNuxtApp()

		locale.value = LanguageSupport.includes(language as any)
			? (language as LanguageType)
			: LanguageSupport[0]

		$i18n.setLocale(locale.value)
		useCookie('lang').value = locale.value
	}

	const setToken = (value: string = '') => {
		token.value = value
	}

	const getToken = () => {
		return token.value
	}

	return { token, locale, setLocale, setToken, getToken }
})
