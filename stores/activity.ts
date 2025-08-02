import activityListData from "./data/activityList.json"
import lobbySidebarBannerListData from "./data/lobbySidebarBannerList.json"

export const useActivityStore = defineStore('activity', () => {
	const activityList = ref(activityListData)
	const sideBarActivityList = ref(lobbySidebarBannerListData)

	return { activityList, sideBarActivityList }
})
