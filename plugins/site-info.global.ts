import { themeManager } from "~/theme"
import { ThemeSupport } from "~/common/enum/theme"
import { LanguageSupport } from "~/common/enum/language"

// 全局插件，用于设置网站信息<页面初次加载时执行一次>
export default defineNuxtPlugin(async (to) => {
	const { $i18n } = useNuxtApp()
	const cookieLocale = useCookie('lang')
	let siteInfo = null

	if (!import.meta.client) {
		const { data: tenant } = await useFetch('/api/tenant')

		siteInfo = useState('siteInfo', () => ({
			pwa: tenant.value?.pwa ? { name: tenant.value.pwa.name } : null,
			language: cookieLocale.value || tenant.value?.language || LanguageSupport[0],
			theme: tenant.value?.theme || ThemeSupport[0]
		}))
	} else {
		const appStore = useAppStore()
		siteInfo = useState('siteInfo')
		appStore.locale = siteInfo.value.language
		themeManager.setTheme(siteInfo.value.theme)
	}

	$i18n.locale.value = siteInfo.value.language
})
