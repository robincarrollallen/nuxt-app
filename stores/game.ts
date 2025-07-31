import { hotList } from './data/hotList'
import { platformList } from './data/platformList'
import gameTypeListData from './data/gameTypeList.json'

export const useGameStore = defineStore('game', () => {
	const homePlatformList = ref<Recordable[]>(platformList) // Home page platform list
	const homeHotList = ref<Recordable[]>(hotList.filter(item => item.logoFlag)) // Home page hot games list
	const gameTypeList = ref<string[]>(gameTypeListData.map((type) => type.gameType)) // Game types

	return { homePlatformList, homeHotList, gameTypeList }
})
