import { useI18n } from 'vue-i18n'

export const useActivityAgentLogic = () => {
	const { t } = useI18n()

	/**
 	* Activity condition type
 	*/
	const CONDITION_NAME = {
		firstRechargeAmount: t('activity.agent16'),
		recharge: t('activity.agent17'),
		bet: t('activity.agent18'),
		rechargeDays: t('activity.agent19'),
		rechargeCount: t('activity.agent20'),
	} as const

	return {
		CONDITION_NAME
	}
}
