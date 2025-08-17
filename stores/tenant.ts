import tenantInfoData from './data/tenantInfo.json'
import mainMediaListData from './data/mainMediaList.json'
import bannerListData from './data/bannerList.json'

export const useTenantStore = defineStore('tenant', () => {
	const tenantInfo = ref(tenantInfoData)
	const mainMediaList = ref(mainMediaListData)
	const bannerList = ref(bannerListData)

	return { tenantInfo, mainMediaList, bannerList }
})
