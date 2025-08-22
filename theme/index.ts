/** Theme type */
export const THEME_TYPE = {
	STYLE_1: 'Layout2:DarkGreen',
	STYLE_2: 'Layout2:GoldenYellow',
	STYLE_3: 'Layout2:BluePurple',
	STYLE_4: 'Layout3:AmberPurple',
	STYLE_5: 'Layout1:Blue',
	STYLE_6: 'Layout1:Green',
	STYLE_7: 'Layout1:BlueV01',
	STYLE_8: 'Layout1:GreenV01',
	STYLE_9: 'Layout1:GreenV02',
	STYLE_10: 'Layout1:Blue_V01',
	STYLE_11: 'Layout1:AmberPurple',
	STYLE_12: 'Layout1:PineGreenV01',
	STYLE_13: 'Layout1:PineGreenV02',
	STYLE_14: 'Layout1:BlueV02',
	STYLE_15: 'Layout1:AmberPurpleV01',
	STYLE_16: 'Layout1:AuroraYellow',
	STYLE_17: 'Layout2:PhantomBlue',
	STYLE_18: 'Layout2:NeoBlue',
	STYLE_19: 'Layout2:MystLightBlue',
	STYLE_20: 'Layout2:MidnightPurple',
	STYLE_25: 'Layout2:SupremeGreen'
} as const

// Theme type
export type ThemeType = typeof THEME_TYPE[keyof typeof THEME_TYPE]

// Supported themes array
export const ThemeSupport = Object.values(THEME_TYPE)

// 主题样式
export const THEME_STYLE = Object.fromEntries(
	Object.entries(THEME_TYPE).map(([key, value]) => [value, key.toLowerCase()])
)

class ThemeManager {
	private loadedThemes = new Set<string>()
	private currentTheme: ThemeType = THEME_TYPE.STYLE_18

	async setTheme(theme: ThemeType) {
		if (!this.loadedThemes.has(theme)) {
			const success = await this.loadThemeCSS(theme) // Lazy load theme CSS
			if (success) {
				this.loadedThemes.add(theme)
			} else {
				// If the theme fails to load and is not the default theme, fall back to the default theme
				if (theme !== THEME_TYPE.STYLE_18) {
					console.warn(`Failed to load theme ${theme}, falling back to default`)
					return this.setTheme(THEME_TYPE.STYLE_18)
				}
				return
			}
		}

		this.applyTheme(theme) // Apply theme

		this.currentTheme = theme
		localStorage.setItem('theme', theme)
	}

	private async loadThemeCSS(theme: ThemeType): Promise<boolean> {
		try {
			await import(`~/theme/variables/${THEME_STYLE[theme]}.css`) // Fix CSS file path
			return true
		} catch (error) {
			console.error(`Failed to load theme CSS: ${theme}`, error)
			return false
		}
	}

	private applyTheme(theme: ThemeType) {
		const root = document.documentElement

		root.setAttribute('data-theme', theme)
	}

	// Preload theme
	async preloadTheme(theme: ThemeType) {
		if (!this.loadedThemes.has(theme)) {
			const success = await this.loadThemeCSS(theme)
			if (success) {
				this.loadedThemes.add(theme)
			}
		}
	}

	// Preload all themes
	async preloadAllThemes() {
		await Promise.all(ThemeSupport.map(theme => this.preloadTheme(theme)))
	}

	// Check if the theme is loaded
	isThemeLoaded(theme: ThemeType): boolean {
		return this.loadedThemes.has(theme)
	}

	// Get the list of loaded themes
	getLoadedThemes(): string[] {
		return Array.from(this.loadedThemes)
	}

	// Get the current theme
	getCurrentTheme(): ThemeType {
		return this.currentTheme
	}

	// Verify theme type
	private isValidTheme(theme: string): theme is ThemeType {
		return ThemeSupport.includes(theme as ThemeType)
	}

	// Initialize
	async init() {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme && this.isValidTheme(savedTheme)) {
			await this.setTheme(savedTheme)
		} else {
			await this.setTheme(THEME_TYPE.STYLE_18)
		}
	}
}

// Factory function
const createThemeManager = () => {
	if (import.meta.client) {
		const manager = new ThemeManager()
		manager.init()
		return manager
	}
	return null
}

export const themeManager = createThemeManager()
