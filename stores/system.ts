
import { setFontSize } from '~/common/variable'

export const useSystemStore = defineStore('system', () => {
	const fontSize = ref(16) // Font size
	const screenWidth = ref(window.innerWidth) // Screen width
	const screenHeight = ref(window.innerHeight) // Screen height

	/**
	 * Update screen information
	 */
	const updateScreenSize = () => {
		screenWidth.value = window.innerWidth
		screenHeight.value = window.innerHeight
		setRemBase()
	}

	/**
	 * Set rem base
	 */
	function setRemBase() {
		const baseWidth = 390 // Design width
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
