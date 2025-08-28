import agentActivityDetailData from "public/data/agentActivityDetail.json"
import lobbySidebarBannerListData from "public/data/lobbySidebarBannerList.json"

export const useActivityStore = defineStore('activity', () => {
	const activityStore = useActivityStore()

	const sideBarActivityData = ref(lobbySidebarBannerListData)
	const agentActivityDetail = ref(agentActivityDetailData)
	const activityList = ref<Recordable[]>([])

	const sideBarActivityList = computed(() => sideBarActivityData.value.map(item => {
		const { id, iconUrlType, defaultIconUrl, customIconUrl, imageUrl, name, targetType, targetValue: targetValueString, showName, shortName } = item
		let value: number | string | undefined = ''
		let valueType: string = ''
		if (targetType == 'internal') {
			const targetValue = JSON.parse(targetValueString)
			value = handleInlineNavigation(targetValue)
			valueType = handleSideValueType(targetValue)
		} else {
			value = targetValueString
		}

		let newName = shortName
		if (valueType == 'ACTIVITY') {
			const activity = activityStore.activityList?.find((item: any) => item.id == value)
			if (!activity) {
				return null
			}
		}
		if (['ACTIVITY', 'CODE'].includes(valueType)) {
			newName = shortName ? shortName : translateActivityName(valueType, value)
		}

		return {
			id,
			name,
			value,
			showName,
			valueType,
			image: imageUrl,
			shortName: newName,
			logoSrc: iconUrlType === 'default' ? defaultIconUrl : customIconUrl,
			type: handleSidebarJumpType(targetType),
		}
	}).filter(Boolean))

	return { sideBarActivityList, agentActivityDetail, activityList }
})

/**
 * @description 翻译活动名称
 */
const translateActivityName = (type: string, val: string | number) => {
	const { t } = useI18n()
	const activityStore = useActivityStore()

	if (type == 'ACTIVITY') {
		const { type: activeType, name } = activityStore.activityList.find((item: any) => item.id == val) || {}
		if (activeType === 'Custom') return name
		return activeType ? t(`activity1.${activeType}`) : ''
	}
	if (type == 'CODE') {
		const code = camelCase(`${val}`) || 'mainInicio'
		return t(`activity1.${code}`) || ''
	}
}
