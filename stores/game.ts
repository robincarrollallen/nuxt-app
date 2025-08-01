import hotList from './data/hotList.json'
import platformList from './data/platformList.json'

export const useGameStore = defineStore('game', () => {
	const homeHotList = ref<Recordable[]>(hotList.filter(item => item.logoFlag)) // Home hot game list
	const homePlatformList = ref<Recordable[]>(platformList) // Home platform list

	return { homePlatformList, homeHotList }
})
