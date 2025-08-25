import { themeManager } from "@/theme"
import { ThemeSupport } from "@/theme/type"
import { LanguageSupport } from "@/enums/language"

// Global plugin, used to set website information <Execute once when the page is first loaded>
export default defineNuxtPlugin(async (_to) => {
	const { $i18n } = useNuxtApp()
	const cookieLocale = useCookie('lang')
	let siteInfo = null

	if (import.meta.client) {
		console.log('__NUXT__ >>>>>', window.__NUXT__)
		const appStore = useAppStore()
		siteInfo = useState('tenantInfo')
		appStore.locale = siteInfo.value.appDefaultLanguage
		const savedTheme = localStorage.getItem('theme')
		themeManager.setTheme(savedTheme || siteInfo.value.skinTwoType)
	} else {
		const { data: tenant } = await useFetch('/api/tenant')
		console.log('tenant', tenant.value)

		siteInfo = useState('tenantInfo', () => ({
			...tenant.value,
			appDefaultLanguage: cookieLocale.value || tenant.value?.appDefaultLanguage || LanguageSupport[0],
			skinTwoType: tenant.value?.skinTwoType || ThemeSupport[0]
		}))
	}

	$i18n.locale.value = siteInfo.value.appDefaultLanguage
})
