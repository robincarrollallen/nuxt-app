import { ZNameType } from '~/enums'
import { useI18n } from 'vue-i18n'
import { generatePreviewText, getActivityDefaultName } from './data'

export const useActivityListLogic = () => {
	const activityStore = useActivityStore()
	const appStore = useAppStore()
	const { t } = useI18n()

	const ActivityStatus = {
		PENDING: t('viewsActivity.activityList03'),
		PROCESSING: t('viewsActivity.activityList02'),
		FINISHED: t('viewsActivity.activityList04'),
	} as const

	const activityList = ref([])

	const language = computed(() => appStore.locale)

	return { activityList, ActivityStatus, language }
}
