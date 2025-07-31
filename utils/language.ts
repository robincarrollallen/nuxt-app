import { useAppStore } from '~/stores/app'

/**
 * @description Get language name for specified language
 * @param language Language tag
 * @param showLanguage Display language
 */
export function getLanguageName(language: string, showLanguage: string): string {
	const lang = showLanguage.split('-')[0]
	const languageNames = new Intl.DisplayNames([lang], { type: 'language' })
	return languageNames.of(language) ?? 'Unknown'
}
