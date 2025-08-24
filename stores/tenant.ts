import tenantInfoData from 'public/data/tenantInfo.json'
import mainMediaListData from 'public/data/mainMediaList.json'
import bannerListData from 'public/data/bannerList.json'
import { getCurrency } from '~/enums/currency'

export const useTenantStore = defineStore('tenant', () => {
	const tenantInfo = ref(tenantInfoData)
	const mainMediaList = ref(mainMediaListData)
	const bannerList = ref(bannerListData)

	const merchantCy = computed(() => getCurrency(tenantInfo.value.region?.currency)) // Merchant currency

	return { tenantInfo, mainMediaList, bannerList, merchantCy }
})
