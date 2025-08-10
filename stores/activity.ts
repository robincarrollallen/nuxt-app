import agentActivityDetailData from "./data/agentActivityDetail.json"
import lobbySidebarBannerListData from "./data/lobbySidebarBannerList.json"

export const useActivityStore = defineStore('activity', () => {
	const sideBarActivityList = ref(lobbySidebarBannerListData)
	const agentActivityDetail = ref(agentActivityDetailData)
	const activityList = ref<Recordable[]>([])

	return { sideBarActivityList, agentActivityDetail, activityList }
})
