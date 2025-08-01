import { defineNuxtConfig } from 'nuxt/config'
import { LANGUAGE_TYPE, LanguageSupport } from './enums/language'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: false },
	modules: ['@vant/nuxt', '@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/icon'],
	icon: {
		collections: [
			{
				name: 'local',
				path: './assets/svg'
			} as any,
		],
	},
	vue: {
		compilerOptions: {
			isCustomElement: tag => tag === 'micro-app'
		}
	},
	vite: {
		esbuild: { target: 'esnext' },
		plugins: [],
	},
	experimental: {
		payloadExtraction: false
	},
	app: {
		pageTransition: {
			name: 'slide',
			mode: 'out-in'
		}
	},
	i18n: {
		locales: Object.entries(LANGUAGE_TYPE).map(([code, name]) => ({
			code,
			name,
			iso: code,
			file: `${code.split('-')[0]}_${code.split('-')[1].toUpperCase()}.json`
		})),
		defaultLocale: LanguageSupport[0],
		vueI18n: 'config.ts',
		strategy: 'no_prefix',
		detectBrowserLanguage: false,
		lazy: true,
		compilation: {
			strictMessage: false,
			escapeHtml: true
		}
	},
	css: ['swiper/css', 'swiper/css/autoplay']
})
