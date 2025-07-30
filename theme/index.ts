import { ThemeSupport, type ThemeType, ThemeTypeEnum } from '~/common/enum/theme'

class ThemeManager {
	private loadedThemes = new Set<string>()
	private currentTheme: ThemeType = ThemeTypeEnum.DEFAULT

	async setTheme(theme: ThemeType) {
		if (!this.loadedThemes.has(theme)) {
			const success = await this.loadThemeCSS(theme) // 懒加载主题CSS
			if (success) {
				this.loadedThemes.add(theme)
			} else {
				// 如果加载失败且不是默认主题，回退到默认主题
				if (theme !== ThemeTypeEnum.DEFAULT) {
					console.warn(`Failed to load theme ${theme}, falling back to default`)
					return this.setTheme(ThemeTypeEnum.DEFAULT)
				}
				return
			}
		}

		this.applyTheme(theme) // 应用主题

		this.currentTheme = theme
		localStorage.setItem('theme', theme)
	}

	private async loadThemeCSS(theme: ThemeType): Promise<boolean> {
		try {
			await import(`~/theme/variables/${theme}.css`) // 修正CSS文件路径
			return true
		} catch (error) {
			console.error(`Failed to load theme CSS: ${theme}`, error)
			return false
		}
	}

	private applyTheme(theme: ThemeType) {
		const root = document.documentElement

		if (theme === ThemeTypeEnum.DEFAULT) {
			root.removeAttribute('data-theme')
		} else {
			root.setAttribute('data-theme', theme)
		}
	}

	// 预加载主题
	async preloadTheme(theme: ThemeType) {
		if (!this.loadedThemes.has(theme)) {
			const success = await this.loadThemeCSS(theme)
			if (success) {
				this.loadedThemes.add(theme)
			}
		}
	}

	// 预加载所有主题
	async preloadAllThemes() {
		await Promise.all(ThemeSupport.map(theme => this.preloadTheme(theme)))
	}

	// 检查主题是否已加载
	isThemeLoaded(theme: ThemeType): boolean {
		return this.loadedThemes.has(theme)
	}

	// 获取已加载的主题列表
	getLoadedThemes(): string[] {
		return Array.from(this.loadedThemes)
	}

	// 获取当前主题
	getCurrentTheme(): ThemeType {
		return this.currentTheme
	}

	// 验证主题类型
	private isValidTheme(theme: string): theme is ThemeType {
		return ThemeSupport.includes(theme as ThemeType)
	}

	// 初始化
	async init() {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme && this.isValidTheme(savedTheme)) {
			await this.setTheme(savedTheme)
		} else {
			await this.setTheme(ThemeTypeEnum.DEFAULT)
		}
	}
}

// 工厂函数
const createThemeManager = () => {
	if (import.meta.client) {
		const manager = new ThemeManager()
		manager.init()
		return manager
	}
	return null
}

export const themeManager = createThemeManager()
