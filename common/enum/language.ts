// 支持的语言枚举
export enum LanguageEnum {
  "en-US" = 'English',
  "pt-BR" = 'Português',
}

// 支持的语言类型
export type LanguageType = keyof typeof LanguageEnum;

// 支持的语言数组
export const LanguageSupport = Object.keys(LanguageEnum) as LanguageType[]
