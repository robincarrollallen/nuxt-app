import { LanguageSupport } from "~/enums"

export default defineI18nConfig(() => ({
	legacy: false,
	fallbackLocale: LanguageSupport[0]
}))
