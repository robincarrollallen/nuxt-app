import activityListData from "./data/activityList.json"
import agentActivityDetailData from "./data/agentActivityDetail.json"
import lobbySidebarBannerListData from "./data/lobbySidebarBannerList.json"

export const useActivityStore = defineStore('activity', () => {
	const activityList = ref(activityListData)
	const sideBarActivityList = ref(lobbySidebarBannerListData)
	const agentActivityDetail = ref(agentActivityDetailData)

	return { activityList, sideBarActivityList, agentActivityDetail }
})
