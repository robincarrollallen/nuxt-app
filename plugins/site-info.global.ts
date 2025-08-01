import { themeManager } from "~/theme"
import { ThemeSupport } from "~/enums/theme"
import { LanguageSupport } from "~/enums/language"

// Global plugin, used to set website information <Execute once when the page is first loaded>
export default defineNuxtPlugin(async (to) => {
	const { $i18n } = useNuxtApp()
	const cookieLocale = useCookie('lang')
	let siteInfo = null

	if (import.meta.client) {
		const appStore = useAppStore()
		siteInfo = useState('siteInfo')
		appStore.locale = siteInfo.value.language
		themeManager.setTheme(siteInfo.value.theme)
	} else {
		const { data: tenant } = await useFetch('/api/tenant')

		siteInfo = useState('siteInfo', () => ({
			pwa: tenant.value?.pwa ? { name: tenant.value.pwa.name } : null,
			language: cookieLocale.value || tenant.value?.language || LanguageSupport[0],
			theme: tenant.value?.theme || ThemeSupport[0]
		}))
	}

	$i18n.locale.value = siteInfo.value.language
})
