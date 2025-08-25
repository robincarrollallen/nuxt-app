import { gameList } from '../../data'

export const useSortTabLogic = () => {

	const gameStore = useGameStore()
	const systemStore = useSystemStore()

	const active = ref(0)

	const homeHotList = computed(() => gameStore.homeHotList) // Home hot game list
	const tabsOffsetTop = computed(() => { // Tabs offset top
		if (systemStore.screenWidth >= 540) {
			return 3.125 * systemStore.fontSize
		}

		return 6.25 * systemStore.fontSize
	})
	const homePlatformList = computed(() => { // Home platform list
		const platformList = deepClone(gameStore.homePlatformList)

		platformList.unshift({
			id: 0,
			name: 'POPULAR',
			code: 'POPULAR',
			logo: '@/assets/svg/sort/POPULAR.svg',
			status: 'ON',
			openType: true,
			type: 'sort',
			sort: 12,
		})

		return platformList
	})

	/** get game list by platform */
	const getGameListByPlatform = (platformId: number) => {
		return getOrSetCache('game', `platform_${platformId}`, () => {
			const list = gameList.filter(item =>
				item.gameList[0]?.platformId === platformId
			)

			let result = []
			if (list.length > 1) {
				list.forEach(item => {
					result.push(...item.gameList)
				})
			} else if (list.length === 1) {
				result = list[0].gameList
			}

			return result
		})
	}

	let navComplete: HTMLElement | null = null
	let isDown = false
	let startX
	let scrollLeft
	let hasMoved = false // 标记是否发生了拖拽移动

	/** 鼠标按下 */
	const handleMouseDown = (e) => {
		isDown = true
		hasMoved = false // 重置移动标记
		navComplete.style.cursor = 'grabbing'
		startX = e.pageX - navComplete.offsetLeft
		scrollLeft = navComplete.scrollLeft
		e.preventDefault() // 防止文本选择
	}

	/** 鼠标离开事件 */
	const handleMouseLeave = () => {
		isDown = false
		navComplete.style.cursor = 'grab'
	}

	/** 鼠标松开事件 */
	const handleMouseUp = (e) => {
		isDown = false
		navComplete.style.cursor = 'grab'

		// 如果发生了拖拽移动，阻止点击事件
		if (hasMoved) {
			e.preventDefault()
			e.stopPropagation()
		}
	}

	/** 鼠标移动事件 */
	const handleMouseMove = (e) => {
		if (!isDown) return
		e.preventDefault()

		const x = e.pageX - navComplete.offsetLeft
		const walk = (x - startX) * 1 // 滚动速度倍数

		// 如果移动距离超过阈值，标记为已移动, 5px的容错范围
		if (Math.abs(walk) > 5) {
			hasMoved = true
		}

		navComplete.scrollLeft = scrollLeft - walk
	}

	/** 鼠标点击事件 */
	const handleClick = (e) => {
		if (hasMoved) {
			e.preventDefault()
			e.stopPropagation()
			hasMoved = false // 重置标记
		}
	}

	onMounted(() => {
		navComplete = document.querySelector('.segment-tabs .van-tabs__nav--complete')
		if (!navComplete) return

		// 监听鼠标按下
		navComplete.addEventListener('mousedown', handleMouseDown)

		// 监听鼠标离开
		navComplete.addEventListener('mouseleave', handleMouseLeave)

		// 监听鼠标松开
		navComplete.addEventListener('mouseup', handleMouseUp)

		// 监听鼠标移动
		navComplete.addEventListener('mousemove', handleMouseMove)

		// 额外的点击事件拦截（双重保险）
		navComplete.addEventListener('click', handleClick, true) // 使用捕获阶段，确保最先执行

		// 设置初始鼠标样式
		navComplete.style.cursor = 'grab'
		navComplete.style.userSelect = 'none' // 防止文本选择
	})

	onBeforeUnmount(() => {
		if (navComplete) {
			navComplete.removeEventListener('mousedown', handleMouseDown)
			navComplete.removeEventListener('mouseleave', handleMouseLeave)
			navComplete.removeEventListener('mouseup', handleMouseUp)
			navComplete.removeEventListener('mousemove', handleMouseMove)
			navComplete.removeEventListener('click', handleClick, true)
		}
	})

	return {
		active,
		homeHotList,
		tabsOffsetTop,
		homePlatformList,
		getGameListByPlatform,
	}
}
