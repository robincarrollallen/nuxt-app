/**
 * Theme type enum
 */
export const THEME_TYPE = {
	/** Default theme */
	DEFAULT: 'default',
	/** Dark theme */
	DARK: 'dark',
	/** Blue theme */
	BLUE: 'blue',
	/** Green theme */
	GREEN: 'green',
	/** Purple theme */
	PURPLE: 'purple'
} as const

// Theme type
export type ThemeType = typeof THEME_TYPE[keyof typeof THEME_TYPE]

// Supported themes array
export const ThemeSupport = Object.values(THEME_TYPE)
