import { LanguageSupport } from "~/common/enum/language"

export default defineI18nConfig(() => ({
	legacy: false,
	fallbackLocale: LanguageSupport[0]
}))
