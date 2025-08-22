import { THEME_TYPE, type ThemeType } from "~/theme"
import * as STYLE_18 from './style_18'
import type { AsyncComponentLoader } from "vue"

export type ComponentConfig = {
	component?: AsyncComponentLoader
	options?: Recordable
	children?: ComponentConfig[]
}

// 静态导入映射，确保构建时能正确分析
const configMap = {
	[THEME_TYPE.STYLE_18]: STYLE_18,
}

/** 获取组件配置 */
export const getComponentConfig = (skinTwoType: ThemeType, componentName: string): ComponentConfig => {
	const module = configMap[skinTwoType]
	return module[componentName]
}
