import hotList from './data/hotList.json'
import platformList from './data/platformList.json'
import homeListData from './data/homeList.json'

export const useGameStore = defineStore('game', () => {
	const homeList = ref<Recordable[]>(homeListData) // Home list
	const homeHotList = ref<Recordable[]>(hotList.filter(item => item.logoFlag)) // Home hot game list
	const homePlatformList = ref<Recordable[]>(platformList) // Home platform list

	return { homePlatformList, homeHotList, homeList }
})
