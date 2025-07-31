// Supported language enum
export enum LanguageEnum {
  "en-US" = 'English',
  "pt-BR" = 'Português',
}

// Supported language type
export type LanguageType = keyof typeof LanguageEnum;

// Supported languages array
export const LanguageSupport = Object.keys(LanguageEnum) as LanguageType[]
