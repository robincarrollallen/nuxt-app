import agencyConfigData from "./data/agencyConfig.json"
import software from "./data/software.json"

export const useAgentStore = defineStore('agent', () => {
	const shareConfig = ref({
		software: software
	})

	const agencyConfig = ref(agencyConfigData)

	return { shareConfig, agencyConfig }
})
