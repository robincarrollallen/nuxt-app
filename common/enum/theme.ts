// 主题类型枚举
export enum ThemeTypeEnum {
  DEFAULT = 'default',
  DARK = 'dark',
  BLUE = 'blue',
  GREEN = 'green',
  PURPLE = 'purple'
}

// 主题类型
export type ThemeType = `${ThemeTypeEnum}`

// 支持的主题数组
export const ThemeSupport = Object.values(ThemeTypeEnum) as ThemeType[]
