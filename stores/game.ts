import { hotList } from './data/hotList'
import { platformList } from './data/platformList'
import gameTypeListData from './data/gameTypeList.json'

export const useGameStore = defineStore('game', () => {
	const homePlatformList = ref<Recordable[]>(platformList) // 首页平台列表
	const homeHotList = ref<Recordable[]>(hotList.filter(item => item.logoFlag)) // 首页热门游戏列表
	const gameTypeList = ref<string[]>(gameTypeListData.map((type) => type.gameType)) // 游戏类型

	return { homePlatformList, homeHotList, gameTypeList }
})
