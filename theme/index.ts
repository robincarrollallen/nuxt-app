import { ThemeSupport, type ThemeType, THEME_TYPE } from '~/enums/theme'

class ThemeManager {
	private loadedThemes = new Set<string>()
	private currentTheme: ThemeType = THEME_TYPE.DEFAULT

	async setTheme(theme: ThemeType) {
		if (!this.loadedThemes.has(theme)) {
			const success = await this.loadThemeCSS(theme) // Lazy load theme CSS
			if (success) {
				this.loadedThemes.add(theme)
			} else {
				// If the theme fails to load and is not the default theme, fall back to the default theme
				if (theme !== THEME_TYPE.DEFAULT) {
					console.warn(`Failed to load theme ${theme}, falling back to default`)
					return this.setTheme(THEME_TYPE.DEFAULT)
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
			await import(`~/theme/variables/${theme}.css`) // Fix CSS file path
			return true
		} catch (error) {
			console.error(`Failed to load theme CSS: ${theme}`, error)
			return false
		}
	}

	private applyTheme(theme: ThemeType) {
		const root = document.documentElement

		if (theme === THEME_TYPE.DEFAULT) {
			root.removeAttribute('data-theme')
		} else {
			root.setAttribute('data-theme', theme)
		}
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
			await this.setTheme(THEME_TYPE.DEFAULT)
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
