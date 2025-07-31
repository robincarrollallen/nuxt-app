// Theme type enum
export enum ThemeTypeEnum {
  DEFAULT = 'default',
  DARK = 'dark',
  BLUE = 'blue',
  GREEN = 'green',
  PURPLE = 'purple'
}

// Theme type
export type ThemeType = `${ThemeTypeEnum}`

// Supported themes array
export const ThemeSupport = Object.values(ThemeTypeEnum) as ThemeType[]
