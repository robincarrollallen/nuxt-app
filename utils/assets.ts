export const getAsset = (path: string) => new URL(`~/assets/${path}`, import.meta.url).href
