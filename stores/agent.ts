import software from "./data/software.json"
import inviteInfoData from "./data/inviteInfo.json"
import myAgentInfoData from "./data/myAgentInfo.json"
import agencyConfigData from "./data/agencyConfig.json"

export const useAgentStore = defineStore('agent', () => {
	const shareConfig = ref({
		software: software
	})

	const inviteInfo = ref(inviteInfoData)
	const agencyConfig = ref(agencyConfigData)
	const myAgentInfo = ref(myAgentInfoData.info)

	return { shareConfig, inviteInfo, agencyConfig, myAgentInfo }
})
