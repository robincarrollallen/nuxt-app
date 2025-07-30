
import { setFontSize } from '~/common/variable'

export const useSystemStore = defineStore('system', () => {
	const fontSize = ref(16)
	const screenWidth = ref(window.innerWidth) // 屏幕宽度
	const screenHeight = ref(window.innerHeight) // 屏幕高度

	/**
	 * 更新屏幕信息
	 */
	const updateScreenSize = () => {
		screenWidth.value = window.innerWidth
		screenHeight.value = window.innerHeight
		setRemBase()
	}

	/**
	 * 设置rem基准
	 */
	function setRemBase() {
		const baseWidth = 390 // 设计稿宽度
		const html = document.documentElement
		let width = html.clientWidth
		if (486 < width && width < 769) {
			width = width - 486 + 390
		}
		if (width > 486) {
			width = 486
		}
		fontSize.value = (width / baseWidth) * 16
		html.style.fontSize = `${fontSize.value}px`

		setFontSize(fontSize.value)
	}

	return { screenWidth, screenHeight, fontSize, updateScreenSize }
})
