import tenantInfoData from 'public/data/tenantInfo.json'
import mainMediaListData from 'public/data/mainMediaList.json'
import bannerListData from 'public/data/bannerList.json'

export const useTenantStore = defineStore('tenant', () => {
	const tenantInfo = ref(tenantInfoData)
	const mainMediaList = ref(mainMediaListData)
	const bannerList = ref(bannerListData)

	return { tenantInfo, mainMediaList, bannerList }
})
