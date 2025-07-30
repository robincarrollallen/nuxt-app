import { hotList } from './data/hotList'
import { platformList } from './data/platformList'

export const useGameStore = defineStore('game', () => {
	const homeHotList = ref<Recordable[]>(hotList.filter(item => item.logoFlag)) // 首页热门游戏列表
	const homePlatformList = ref<Recordable[]>(platformList) // 首页平台列表

	return { homePlatformList, homeHotList }
})
