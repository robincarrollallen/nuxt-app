import hotList from 'public/data/hotList.json'
import homeListData from 'public/data/homeList.json'
import platformListData from 'public/data/platformList.json'

export const useGameStore = defineStore('game', () => {
	const homeList = ref<Recordable[]>(homeListData) // Home list
	const homeHotList = ref<Recordable[]>(hotList.filter(item => item.logoFlag)) // Home hot game list

	const homePlatformList = computed(() => {
		return platformListData.sort((a, b) => b.sort - a.sort).map((item) => {
			const { gameTypes = [], ...rest } = item
			let platformTotal = 0
			const newGameTypes = gameTypes.sort((a, b) => b.gameTypeSort - a.gameTypeSort).reduce((acc, cur) => {
				const { gameCount, target } = cur as Recordable
				if (target === 'hall') {
					platformTotal += 1
					acc.push({
						...rest,
						...cur,
					})
				}
				if (target !== 'hall' && gameCount) {
					platformTotal += gameCount
					acc.push({
						...rest,
						...cur,
					})
				}
				return acc
			}, [])
			return {
				...rest,
				total: platformTotal,
				gameTypes: newGameTypes,
			}
		})
	})

	return { homePlatformList, homeHotList, homeList }
})
