import tenantInfoData from './data/tenantInfo.json'
import mainMediaListData from './data/mainMediaList.json'

export const useTenantStore = defineStore('tenant', () => {
	const tenantInfo = ref(tenantInfoData)
	const mainMediaList = ref(mainMediaListData)

	return { tenantInfo, mainMediaList }
})
