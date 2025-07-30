import tenantInfoData from './data/tenantInfo.json'

export const useTenantStore = defineStore('tenant', () => {
	const tenantInfo = ref(tenantInfoData)

	return { tenantInfo }
})
