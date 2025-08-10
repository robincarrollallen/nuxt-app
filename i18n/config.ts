import { LanguageSupport } from "~/enums/language"

export default defineI18nConfig(() => ({
	legacy: false,
	fallbackLocale: LanguageSupport[0] as any,
}))
