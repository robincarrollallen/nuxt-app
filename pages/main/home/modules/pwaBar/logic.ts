export const usePwaBarLogic = () => {
	const tenantStore = useTenantStore()
	const tenantInfo = computed(() => tenantStore.tenantInfo)

	return {
		tenantInfo
	}
}
