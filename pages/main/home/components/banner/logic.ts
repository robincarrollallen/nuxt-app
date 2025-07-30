import { useTenantStore } from '~/stores/tenant'

export const useBannerLogic = () => {
	const tenantStore = useTenantStore()
	const autoplay = { delay: 2500, disableOnInteraction: false } as any

	const bannerList = computed(() => tenantStore.tenantInfo.bannerList)

	return {
		bannerList,
		autoplay
	}
}
