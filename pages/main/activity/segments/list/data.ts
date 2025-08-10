import type { LanguageType, ActivityType, ResetType, RechargeType } from "~/enums"
import { getLanguageCode, getRechargeActivityName, getRescueFundActivityName, getLuckyWheelActivityName, getCommissionRewardActivityName } from "~/i18n/libs/activity"

/**Generate activity name
 * @param language - Language type
 * @param activityType - Activity type
 * @param variables - Activity variables
 */
export function getActivityDefaultName(language: LanguageType, activityType: ActivityType, variables: ActivityVariables): string {
	language = getLanguageCode(language)
	if (activityType === 'Recharge') {
		return getRechargeActivityName(language, variables.resetType as ResetType, variables.rechargeType as RechargeType)
	}
	else if (activityType === 'Assistance') {
		return getRescueFundActivityName(language, variables.resetType as ResetType)
	}
	else if (activityType === 'LuckyWheel') {
		return getLuckyWheelActivityName(language, variables.resetType as ResetType)
	}
	else if (activityType === 'CommissionReward') {
		return getCommissionRewardActivityName(language, variables.resetType as ResetType)
	}

	const activityNames = {
		AgencyTwo: {
			"zh-CN": "代理活动2",
			"en-US": "Affiliate 2",
			"pt-BR": "Agente 2",
			"vi-VN": "Đại Lý 2",
			"id-ID": "Agen 2",
			"hi-IN": "एजेंट 2",
		},
		SignIn: {
			'zh-CN': '签到',
			'en-US': 'Sign in',
			'pt-BR': 'Entrar',
			'id-ID': 'Pendaftaran',
			'hi-IN': 'साइन इन',
			'vi-VN': 'Đăng nhập',
		},
		Custom: {
			'zh-CN': '自定义',
			'en-US': 'Custom event',
			'pt-BR': 'Evento personalizado',
			'id-ID': 'Disesuaikan',
			'hi-IN': 'कस्टम इवेंट',
			'vi-VN': 'Tùy chỉnh',
		},
		RechargeReward: {
			'zh-CN': '充值赠送',
			'en-US': 'Recharge discount',
			'pt-BR': 'Desconto de recarga',
			'id-ID': 'Bonus Isi Ulang',
			'hi-IN': 'रिचार्ज छूट',
			'vi-VN': 'Khuyến mãi nạp lại',
		},
		RedPacket: {
			'zh-CN': '神秘矿场',
			'en-US': 'Mysterious Mine',
			'pt-BR': 'Mina Misteriosa',
			'id-ID': 'Tambang Misterius',
			'hi-IN': 'रहस्यमय खदान',
			'vi-VN': 'Mỏ vàng bí ẩn',
		},
		Agency: {
			'zh-CN': '推荐好友领彩金',
			'en-US': 'Refer friends to receive a bonus',
			'pt-BR': 'Indique amigos para receber um bônus',
			'id-ID': 'Rekomendasikan teman untuk menerima bonus',
			'hi-IN': 'दोस्तों को रेफर करें और बोनस प्राप्त करें।',
			'vi-VN': 'Giới thiệu bạn bè để nhận thưởng',
		},
		Rebate: {
			'zh-CN': '返水活动',
			'en-US': 'Wagering Cashback',
			'pt-BR': 'Cashback de Apostas',
			'id-ID': 'Program Pengembalian Uang',
			'hi-IN': 'शर्त लगाने पर कैशबैक',
			'vi-VN': 'Trả lại tiền cược',
		},
		AssistanceCash: {
			'zh-CN': '助力领现金',
			'en-US': 'Earn cash by inviting friends',
			'pt-BR': 'Ganhe dinheiro convidando amigos',
			'id-ID': 'Bantu untuk Dapatkan Uang Tunai',
			'hi-IN': 'दोस्तों को आमंत्रित करके नकद कमाएं',
			'vi-VN': 'Giúp bạn kiếm tiền bằng cách giới thiệu bạn bè',
		},
		MemberReward: {
			'zh-CN': '会员答谢(单日)',
			'en-US': 'Member Appreciation',
			'pt-BR': 'Apreciação aos Membros',
			'id-ID': 'Apresiasi Anggota',
			'hi-IN': 'सदस्य प्रशंसा',
			'vi-VN': 'Cảm ơn thành viên',
		},
		MysteryReward: {
			'zh-CN': '神秘彩金活动',
			'en-US': 'Mystery Bonus Event',
			'pt-BR': 'Evento de Bônus Misterioso',
			'id-ID': 'Acara Bonus Misteri',
			'hi-IN': 'रहस्यमय बोनस इवेंट',
			'vi-VN': 'Sự kiện bất ngờ',
		},
		newbieTaskReward: {
			'zh-CN': '新人福利',
			'en-US': 'Newbie benefits',
			'pt-BR': 'Benefícios para iniciantes',
			'id-ID': 'Manfaat bagi pemula',
			'hi-IN': 'नौसिखिया लाभ',
			'vi-VN': 'Lợi ích cho người mới',
		},
		CommissionReward: {
			'zh-CN': '每日佣金奖励',
			'en-US': 'Daily Commission Event Reward',
			'pt-BR': 'Recompensa do Evento de Comissão Diária',
			'id-ID': 'Hadiah Acara Komisi Harian',
			'hi-IN': 'दैनिक कमीशन इवेंट पुरस्कार',
			'vi-VN': 'Phần thưởng sự kiện hoa hồng hàng ngày',
		},
		CPFActivity: {
			'zh-CN': '邀请好友',
			'en-US': 'Invite Friends',
			'pt-BR': 'Convidar Amigos',
			'id-ID': 'Undang Teman',
			'hi-IN': 'मित्रों को आमंत्रित करें',
			'vi-VN': 'Mời bạn bè',
		},
		googleDomainReward: {
			'zh-CN': '版本升级奖金',
			'en-US': 'Version Upgrade Bonus',
			'pt-BR': 'Bônus de atualização de versão',
			'id-ID': 'Bonus peningkatan versi',
			'hi-IN': 'संस्करण उन्नयन बोनस',
			'vi-VN': 'Phần thưởng cập nhật phiên bản',
		},
		LuckyBet: {
			'zh-CN': '幸运注单',
			'en-US': 'Lucky Bet',
			'pt-BR': 'Aposta da Sorte',
			'id-ID': 'Taruhan Beruntung',
			'hi-IN': 'भाग्यशाली बेट',
			'vi-VN': 'Đặt cược may mắn',
		},
		SignInVolume: {
			'zh-CN': '签到奖励',
			'en-US': 'Sign in reward',
			'pt-BR': 'Recompensa de entrada',
			'id-ID': 'Hadiah masuk',
			'hi-IN': 'साइन इन पुरस्कार',
			'vi-VN': 'Phần thưởng điểm danh',
		},
		WalletUserActivity: {
			'zh-CN': '邀请好友',
			'en-US': 'Invite Friends',
			'pt-BR': 'Convidar Amigos',
			'id-ID': 'Undang Teman',
			'hi-IN': 'मित्रों को आमंत्रित करें',
			'vi-VN': 'Mời bạn bè',
		},
		MemberRewardMultiDay: {
			'zh-CN': '会员答谢(多日)',
			'en-US': 'Member Appreciation (Multiple Days)',
			'pt-BR': 'Apreciação aos Membros (Vários Dias)',
			'id-ID': 'Apresiasi Anggota (Multi Hari)',
			'hi-IN': 'सदस्य प्रशंसा (कई दिन)',
			'vi-VN': 'Cảm ơn thành viên (Nhiều ngày)',
		},
		RechargePromotion: {
			'zh-CN': '充值大酬宾',
			'en-US': 'Deposit Rewards',
			'pt-BR': 'Recompensas de depósito',
			'id-ID': 'Hadiah Deposit',
			'hi-IN': 'जमा पुरस्कार',
			'vi-VN': 'Khuyến mãi nạp lại',
		},
		NewUserExclusive: {
			'zh-CN': '新人首充奖励',
			'en-US': 'New member first deposit reward',
			'pt-BR': 'recompensa de primeiro depósito para novos membros',
			'id-ID': 'hadiah deposit pertama member baru',
			'hi-IN': 'नये सदस्य को प्रथम जमा पुरस्कार',
			'vi-VN': 'phần thưởng tiền gửi đầu tiên của thành viên mới',
		},
		FirstRechargeRebate: {
			'zh-CN': '首充亏损返利',
			'en-US': 'First Recharge Loss Rebate',
			'pt-BR': 'Rebate da Primeira Recarga de Perda',
			'id-ID': 'Bonus Rebatu Pertama untuk Kerugian',
			'hi-IN': 'पहली शुल्क वापसी के लिए नुकसान',
		},
		FirstWithdrawRebate: {
			'zh-CN': '首次提现返利',
			'en-US': 'First Withdrawal Rebate',
			'pt-BR': 'Rebate da Primeira Saque',
			'id-ID': 'Bonus Rebatu Pertama untuk Penarikan',
			'hi-IN': 'पहली निकासी वापसी',
		},
		ReferralRewardsNew: {
			'zh-CN': '分享赚钱',
			'en-US': 'Share to Earn',
			'pt-BR': 'Compartilhe para Ganhar',
			'id-ID': 'Bagikan untuk Menghasilkan',
			'hi-IN': 'शेयर करें और कमाएँ',
			'vi-VN': 'Chia sẻ để kiếm tiền',
		},
		RechargeBonus: {
			'zh-CN': '存款奖金',
			'en-US': 'Deposit Bonus',
			'pt-BR': 'Bônus de Depósito',
			'id-ID': 'Bonus Deposit',
			'hi-IN': 'जमा बोनस',
			'vi-VN': 'Thưởng Gửi Tiền',
		},
	}
	return activityNames?.[activityType]?.[language] || 'Unknown Activity'
}

export const ActivityListData = {
	"activityList": [
		{
			"id": 3770,
			"name": "推荐好友领彩金2",
			"nameType": "DEFAULT",
			"nameParams": "{\"variablesValue\":{\"resetType\":\"NONE\",\"rechargeType\":\"FIRST\"}}",
			"condition": "{\"uuid\":\"f89c9cc5b3e445c0b07d4454b23e966e\",\"validUsers\":{\"firstRechargeAmount\":{\"amount\":0,\"status\":\"ON\"},\"recharge\":{\"amount\":0,\"status\":\"ON\"},\"bet\":{\"amount\":0,\"status\":\"ON\"},\"rechargeDays\":{\"days\":0,\"status\":\"ON\"},\"rechargeCount\":{\"count\":0,\"status\":\"ON\"},\"type\":\"ALL\",\"userLimit\":\"ALL\"},\"limitStats\":{\"limitIP\":0,\"limitDevice\":0},\"rewardType\":\"FIXED\",\"displayMode\":\"RECEIVE\",\"isShow\":true,\"rewardConfig\":[{\"uuid\":\"e5380f66bac644c78a45f051b999347f\",\"userCount\":1,\"min\":0,\"max\":555},{\"uuid\":\"b9b974fb356d4320b7080b70bd15c40d\",\"userCount\":2,\"min\":0,\"max\":555},{\"uuid\":\"1d9406d0e51844b299b1f570ce3d20e0\",\"userCount\":3,\"min\":0,\"max\":555},{\"uuid\":\"e17e6b6cfa4f4c7fba3fd74697684d9c\",\"userCount\":4,\"min\":0,\"max\":555},{\"uuid\":\"8a13f4604b4342a097541abbf35ecb84\",\"userCount\":5,\"min\":0,\"max\":555},{\"uuid\":\"4518722397a54c83beb186a8edb3b3f2\",\"userCount\":10,\"min\":0,\"max\":1000},{\"uuid\":\"ecb57644f31d41ea9b22d6b3772c2660\",\"userCount\":20,\"min\":0,\"max\":2000},{\"uuid\":\"76fd07c256894dd7baf19bbf867312d1\",\"userCount\":50,\"min\":0,\"max\":5000}],\"gameLimitType\":\"ALL\",\"gameLimit\":[]}",
			"category": "all",
			"type": "AgencyTwo",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_3.jpg",
			"bannerLogo": "https://upload-us.b83.xyz/s1/1754027547764/dl2.jpg",
			"sort": 1,
			"showStartTime": "2025-08-01T05:57:30.000Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "{\"variablesValue\":{\"highestReward\":50,\"multiplier\":3,\"limitType\":\"OFF\",\"limitData\":\"\",\"validBetStatus\":\"ON\",\"limitAgencyType\":\"ALL\",\"limitAgencyData\":\"\",\"awardExpiredDays\":0}}",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"OTHER\",\"highestReward\":50,\"resetType\":\"NONE\",\"expiredAwardType\":\"AUTO\",\"activityType\":\"AgencyTwo\",\"cpfRule\":\"\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-01T05:52:31.000Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"activityDetailSelect": null,
			"statusIndex": 1,
			"top": 2
		},
		{
			"id": 3771,
			"name": "推荐好友领彩金",
			"nameType": "DEFAULT",
			"nameParams": "{\"variablesValue\":{\"resetType\":\"NONE\",\"rechargeType\":\"FIRST\"}}",
			"condition": "{\"uuid\":\"4e4bbc1f17f149f4bdfadbf061883c48\",\"validUsers\":{\"firstRechargeAmount\":{\"amount\":0,\"status\":\"ON\"},\"recharge\":{\"amount\":0,\"status\":\"ON\"},\"bet\":{\"amount\":0,\"status\":\"ON\"},\"rechargeDays\":{\"days\":0,\"status\":\"ON\"},\"rechargeCount\":{\"count\":0,\"status\":\"ON\"},\"type\":\"ALL\",\"userLimit\":\"ALL\"},\"limitStats\":{\"limitIP\":0,\"limitDevice\":0},\"rewardType\":\"FIXED\",\"displayMode\":\"RED_PACKET\",\"isShow\":true,\"rewardConfig\":[{\"uuid\":\"92163f649b624891bd41e91bfa1416fb\",\"userCount\":1,\"min\":0,\"max\":444},{\"uuid\":\"853eb71ed7674e1296c1fb5be2883f4e\",\"userCount\":2,\"min\":0,\"max\":444},{\"uuid\":\"4246b163a20b424faef11e42f5d65243\",\"userCount\":3,\"min\":0,\"max\":444},{\"uuid\":\"7be5ea10f7b441c3a478be63e2c0c0bd\",\"userCount\":4,\"min\":0,\"max\":444},{\"uuid\":\"90de34b2da6d40c6b96d9f6e54537767\",\"userCount\":5,\"min\":0,\"max\":444},{\"uuid\":\"03771d0c1a974c5f86ce9377863d9dde\",\"userCount\":10,\"min\":0,\"max\":1111},{\"uuid\":\"e50007df82e2429fb60a4237ffab8845\",\"userCount\":20,\"min\":0,\"max\":2222},{\"uuid\":\"00db905bc27f4342843b4fbf7368d318\",\"userCount\":50,\"min\":0,\"max\":5555}],\"gameLimitType\":\"ALL\",\"gameLimit\":[]}",
			"category": "all",
			"type": "Agency",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_2.jpg",
			"bannerLogo": "https://upload-us.b83.xyz/s1/1754027621330/dl.jpg",
			"sort": 1,
			"showStartTime": "2025-08-01T05:58:42.000Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "{\"variablesValue\":{\"highestReward\":55.55,\"multiplier\":2,\"limitType\":\"OFF\",\"limitData\":\"\",\"validBetStatus\":\"ON\",\"limitAgencyType\":\"ALL\",\"limitAgencyData\":\"\",\"awardExpiredDays\":0}}",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"OTHER\",\"highestReward\":55.55,\"resetType\":\"NONE\",\"expiredAwardType\":\"AUTO\",\"activityType\":\"Agency\",\"cpfRule\":\"\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-01T05:53:43.000Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"activityDetailSelect": null,
			"statusIndex": 1,
			"top": 2
		},
		{
			"id": 3772,
			"name": "助力领现金",
			"nameType": "DEFAULT",
			"nameParams": "{\"variablesValue\":{\"resetType\":\"NONE\",\"rechargeType\":\"FIRST\"}}",
			"condition": "{\"cycle\":1,\"awardList\":[{\"uuid\":\"88851bd2f82c47e88b8da3a22ab1e420\",\"type\":\"rangeAmount\",\"amount\":0,\"weight\":20},{\"uuid\":\"4a5ee4607bde4077898b34900e990424\",\"type\":\"fixedAmount\",\"amount\":666,\"weight\":1},{\"uuid\":\"3e311642524341679ca2f3803c7795a1\",\"type\":\"fixedAmount\",\"amount\":6666,\"weight\":0},{\"uuid\":\"3bb205137dc34bd8a73d51737a50d66d\",\"type\":\"fixedAmount\",\"amount\":66666,\"weight\":0},{\"uuid\":\"2d693e98a4664780a29b8c30e1950110\",\"type\":\"fixedAmount\",\"amount\":666666,\"weight\":0},{\"uuid\":\"b4497300df1547daa3c8280260d3253f\",\"type\":\"bonus\",\"amount\":888888,\"weight\":0}],\"freeDrawCount\":10,\"ipLimit\":99999,\"condition\":[{\"uuid\":\"19ed920c0bd54bddbda90a06aac3c238\",\"round\":1,\"amount\":10000,\"directCount\":1,\"directBet\":0,\"directRecharge\":0,\"firstDrawMinAmount\":1000,\"firstDrawMaxAmount\":2000},{\"uuid\":\"4f12ed114261436da2f2f56cc91c9168\",\"round\":2,\"amount\":20000,\"directCount\":1,\"directBet\":0,\"directRecharge\":0,\"firstDrawMinAmount\":2000,\"firstDrawMaxAmount\":3000}],\"shareDomain\":\"yd1-tg1.qu6.xyz,yd1-tg2.qu6.xyz\",\"domainImg\":\"\",\"invitePhone\":\"https://upload-oss.po7.xyz/afbf403f-ea8a-4e29-9e77-9b45921829b9.csv\"}",
			"category": "all",
			"type": "AssistanceCash",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_12.jpg",
			"bannerLogo": "https://upload-us.b83.xyz/s1/1754027747175/pdd.jpg",
			"sort": 1,
			"showStartTime": "2025-08-01T06:00:49.000Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "{\"variablesValue\":{\"totalAmount\":100,\"highestReward\":\"8888.88\",\"multiplier\":1,\"utcValue\":\"Asia/Kolkata\",\"ruleTimeShow\":\"2025-08-02 11:20:28 - 2025-08-02 23:59:59\",\"timeType\":\"PERMANENT\",\"limitType\":\"OFF\",\"limitData\":\"\",\"freeDrawCount\":10,\"cycleDaily\":1,\"awardExpiredDays\":0,\"rewardAuditType\":\"Gift\"}}",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"OTHER\",\"highestReward\":8888.88,\"resetType\":\"NONE\",\"expiredAwardType\":\"ABANDONED\",\"activityType\":\"AssistanceCash\",\"cpfRule\":\"\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-01T05:55:50.000Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"activityDetailSelect": "style_0",
			"statusIndex": 1,
			"top": 2
		},
		{
			"id": 3773,
			"name": "邀请好友",
			"nameType": "DEFAULT",
			"nameParams": "{\"variablesValue\":{\"resetType\":\"NONE\",\"rechargeType\":\"FIRST\"}}",
			"condition": "{\"ipLimit\":0,\"deviceLimit\":0,\"tenantRewardConfig\":[{\"uuid\":\"66e5a3d2e5324be3a72d999eafe062d4\",\"rewardType\":\"DIRECT_RECHARGE_TOTAL\",\"target\":10000,\"amountType\":\"FIXED\",\"minAmount\":233,\"maxAmount\":233,\"status\":\"ON\"},{\"uuid\":\"f662c9b1f5ba46989760d81c7997864e\",\"rewardType\":\"DIRECT_BET_TOTAL\",\"target\":10000,\"amountType\":\"FIXED\",\"minAmount\":111,\"maxAmount\":111,\"status\":\"ON\"},{\"uuid\":\"c2792a2c0b7745dbbf53fd14163a7a0f\",\"rewardType\":\"EACH_RECHARGE\",\"target\":3000,\"amountType\":\"FIXED_RATIO\",\"minAmount\":1.33,\"maxAmount\":1.33,\"status\":\"ON\"},{\"uuid\":\"64d442ba83e245f7bb9338f6fbfb6ee1\",\"rewardType\":\"REGISTRATION_BONUS\",\"target\":0,\"amountType\":\"FIXED\",\"minAmount\":222,\"maxAmount\":222,\"status\":\"ON\"}]}",
			"category": "all",
			"type": "CPFActivity",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_8.jpg",
			"bannerLogo": "https://upload-us.b83.xyz/s1/1754027861737/yqhy.jpg",
			"sort": 1,
			"showStartTime": "2025-08-01T06:02:42.000Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "{\"variablesValue\":{\"highestReward\":2.33,\"multiplier\":2,\"utcValue\":\"Asia/Kolkata\",\"ruleTimeShow\":\"2025-08-02 11:20:28 - 2025-08-02 23:59:59\",\"timeType\":\"PERMANENT\",\"limitType\":\"OFF\",\"limitData\":\"\",\"platforms\":\"iOSH5,AndroidH5,PWA,APK,iOSApp,iOSBookmark,APKRelease,DesktopOS\",\"resetType\":\"NONE\",\"cpfRule\":\"[{\\\"uuid\\\":\\\"66e5a3d2e5324be3a72d999eafe062d4\\\",\\\"rewardType\\\":\\\"DIRECT_RECHARGE_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.33,\\\"maxAmount\\\":2.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"f662c9b1f5ba46989760d81c7997864e\\\",\\\"rewardType\\\":\\\"DIRECT_BET_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":1.11,\\\"maxAmount\\\":1.11,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"c2792a2c0b7745dbbf53fd14163a7a0f\\\",\\\"rewardType\\\":\\\"EACH_RECHARGE\\\",\\\"target\\\":30,\\\"amountType\\\":\\\"FIXED_RATIO\\\",\\\"minAmount\\\":1.33,\\\"maxAmount\\\":1.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"64d442ba83e245f7bb9338f6fbfb6ee1\\\",\\\"rewardType\\\":\\\"REGISTRATION_BONUS\\\",\\\"target\\\":0,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.22,\\\"maxAmount\\\":2.22,\\\"status\\\":\\\"ON\\\"}]\",\"expiredAwardType\":\"ABANDONED\",\"awardExpiredDays\":0,\"awardType\":\"ACTIVITY\",\"rewardAuditType\":\"Gift\"}}",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"OTHER\",\"highestReward\":2.33,\"resetType\":\"NONE\",\"expiredAwardType\":\"ABANDONED\",\"activityType\":\"CPFActivity\",\"cpfRule\":\"[{\\\"uuid\\\":\\\"66e5a3d2e5324be3a72d999eafe062d4\\\",\\\"rewardType\\\":\\\"DIRECT_RECHARGE_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.33,\\\"maxAmount\\\":2.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"f662c9b1f5ba46989760d81c7997864e\\\",\\\"rewardType\\\":\\\"DIRECT_BET_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":1.11,\\\"maxAmount\\\":1.11,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"c2792a2c0b7745dbbf53fd14163a7a0f\\\",\\\"rewardType\\\":\\\"EACH_RECHARGE\\\",\\\"target\\\":30,\\\"amountType\\\":\\\"FIXED_RATIO\\\",\\\"minAmount\\\":1.33,\\\"maxAmount\\\":1.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"64d442ba83e245f7bb9338f6fbfb6ee1\\\",\\\"rewardType\\\":\\\"REGISTRATION_BONUS\\\",\\\"target\\\":0,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.22,\\\"maxAmount\\\":2.22,\\\"status\\\":\\\"ON\\\"}]\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-01T05:57:44.000Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"activityDetailSelect": "style_0",
			"statusIndex": 1,
			"top": 2
		},
		{
			"id": 3774,
			"name": "分享赚钱",
			"nameType": "DEFAULT",
			"nameParams": "{\"variablesValue\":{\"resetType\":\"NONE\",\"rechargeType\":\"FIRST\"}}",
			"condition": "{\"limitStats\":{\"limitIP\":0,\"limitDevice\":0},\"poolConfig\":{\"inviteRegisterAmount\":556,\"directRechargeRate\":200},\"rewardConfig\":[{\"uuid\":\"09d694fad5ac472ab4626e178c21a716\",\"lossAmount\":10000,\"rate\":1000},{\"uuid\":\"9ad5466ec0784ad7b66902074d2988e3\",\"lossAmount\":50000,\"rate\":2000}]}",
			"category": "all",
			"type": "ReferralRewardsNew",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_5.jpg",
			"bannerLogo": "https://upload-us.b83.xyz/s1/1754027943106/fxzq.png",
			"sort": 1,
			"showStartTime": "2025-08-01T06:04:04.000Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "{\"variablesValue\":{\"highestReward\":20,\"multiplier\":1,\"utcValue\":\"Asia/Kolkata\",\"ruleTimeShow\":\"2025-08-02 11:20:28 - 2025-08-02 23:59:59\",\"timeType\":\"PERMANENT\",\"limitType\":\"OFF\",\"limitData\":\"\",\"platforms\":\"iOSH5,AndroidH5,PWA,APK,iOSApp,iOSBookmark,APKRelease,DesktopOS\",\"resetType\":\"NONE\",\"expiredAwardType\":\"ABANDONED\"}}",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"OTHER_RANGE\",\"highestReward\":20,\"resetType\":\"NONE\",\"expiredAwardType\":\"ABANDONED\",\"activityType\":\"ReferralRewardsNew\",\"cpfRule\":\"[{\\\"uuid\\\":\\\"66e5a3d2e5324be3a72d999eafe062d4\\\",\\\"rewardType\\\":\\\"DIRECT_RECHARGE_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.33,\\\"maxAmount\\\":2.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"f662c9b1f5ba46989760d81c7997864e\\\",\\\"rewardType\\\":\\\"DIRECT_BET_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":1.11,\\\"maxAmount\\\":1.11,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"c2792a2c0b7745dbbf53fd14163a7a0f\\\",\\\"rewardType\\\":\\\"EACH_RECHARGE\\\",\\\"target\\\":30,\\\"amountType\\\":\\\"FIXED_RATIO\\\",\\\"minAmount\\\":1.33,\\\"maxAmount\\\":1.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"64d442ba83e245f7bb9338f6fbfb6ee1\\\",\\\"rewardType\\\":\\\"REGISTRATION_BONUS\\\",\\\"target\\\":0,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.22,\\\"maxAmount\\\":2.22,\\\"status\\\":\\\"ON\\\"}]\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-01T05:59:05.000Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"activityDetailSelect": null,
			"statusIndex": 1,
			"top": 2
		},
		{
			"id": 3783,
			"name": "每日幸运转盘",
			"nameType": "DEFAULT",
			"nameParams": "{\"variablesValue\":{\"resetType\":\"DAILY\",\"rechargeType\":\"FIRST\"}}",
			"condition": "{\"awardList\":[{\"uuid\":\"3518bb42ec994d859fbce46a13515064\",\"type\":\"prop_H\",\"amount\":1,\"weight\":1,\"probability\":6,\"isBigAward\":true},{\"uuid\":\"05a3278235734aefb9b438299f042195\",\"type\":\"nothing\",\"amount\":1,\"weight\":1,\"probability\":6,\"isBigAward\":true},{\"uuid\":\"578e05586999484f937b3e1add936b42\",\"type\":\"prop_A\",\"amount\":1,\"weight\":3,\"probability\":18,\"isBigAward\":true},{\"uuid\":\"3d28ef836c1b42319733a71c410e7a21\",\"type\":\"goldCoins\",\"amount\":1100,\"weight\":1,\"probability\":6,\"isBigAward\":true},{\"uuid\":\"2230af01f3e34a2cbc90aac8e56eca63\",\"type\":\"goldCoins\",\"amount\":11100,\"weight\":1,\"probability\":6,\"isBigAward\":true},{\"uuid\":\"bc9e426121364b628ff20dfede479307\",\"type\":\"goldCoins\",\"amount\":111100,\"weight\":1,\"probability\":6,\"isBigAward\":true},{\"uuid\":\"6bbc10273ad84ef7b4644968cfc67ccb\",\"type\":\"prop_P\",\"amount\":1,\"weight\":1,\"probability\":6,\"isBigAward\":true},{\"uuid\":\"356421fa3bfd424a97fe7edec46ddf95\",\"type\":\"nothing\",\"amount\":1,\"weight\":2,\"probability\":12,\"isBigAward\":true},{\"uuid\":\"10508f39fe5040cdbcc0ac47d2b4db34\",\"type\":\"prop_Y\",\"amount\":1,\"weight\":3,\"probability\":18,\"isBigAward\":true},{\"uuid\":\"5b3a3dc3abad4c6ebeed87dd37689e5c\",\"type\":\"goldCoins\",\"amount\":1111,\"weight\":1,\"probability\":6,\"isBigAward\":true},{\"uuid\":\"01fd5c41b7b64f7b92e3020bc6cd7198\",\"type\":\"nothing\",\"amount\":1,\"weight\":1,\"probability\":6,\"isBigAward\":true},{\"uuid\":\"f6c4bbec6e36483190bc8fc8e54ba846\",\"type\":\"goldCoins\",\"amount\":1110,\"weight\":1,\"probability\":6,\"isBigAward\":true}],\"exchangeReward\":9900,\"lotteryTicketGet\":[{\"uuid\":\"b43085b63e8d46bfafc4bb7f82529998\",\"type\":\"firstRecharge\",\"conditionAmount\":10000,\"amount\":1,\"triggerCount\":1,\"isOpen\":true},{\"uuid\":\"8ee35a1b70684f5d921eb3c20c0f8e01\",\"type\":\"everyDayFirstRecharge\",\"conditionAmount\":5000,\"amount\":1,\"triggerCount\":1,\"isOpen\":true},{\"uuid\":\"1361a9582b1441e29263845a3fc4f09c\",\"type\":\"recharge\",\"conditionAmount\":20000,\"amount\":4,\"triggerCount\":4,\"isOpen\":true},{\"uuid\":\"79102160396949188b7fb4e5ac1ab663\",\"type\":\"cumulativeRecharge\",\"conditionAmount\":100000,\"amount\":60,\"triggerCount\":1,\"isOpen\":true},{\"uuid\":\"55da0699901d4f5d8052271189e8b466\",\"type\":\"validBet\",\"conditionAmount\":600,\"amount\":1,\"triggerCount\":99,\"isOpen\":true}]}",
			"category": "all",
			"type": "LuckyWheel",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_2.jpg",
			"bannerLogo": "https://upload-us.b83.xyz/s1/1754110438746/xyzp.jpg",
			"sort": 1,
			"showStartTime": "2025-08-02T04:59:16.000Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "{\"variablesValue\":{\"exchangeReward\":99,\"resetType\":\"DAILY\",\"multiplier\":1,\"utcValue\":\"Asia/Kolkata\",\"ruleTimeShow\":\"2025-08-02 11:20:28 - 2025-08-02 23:59:59\",\"timeType\":\"PERMANENT\",\"limitType\":\"OFF\",\"limitData\":\"\",\"awardExpiredDays\":0}}",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"OTHER\",\"highestReward\":1111,\"resetType\":\"DAILY\",\"expiredAwardType\":\"AUTO\",\"activityType\":\"LuckyWheel\",\"cpfRule\":\"[{\\\"uuid\\\":\\\"66e5a3d2e5324be3a72d999eafe062d4\\\",\\\"rewardType\\\":\\\"DIRECT_RECHARGE_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.33,\\\"maxAmount\\\":2.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"f662c9b1f5ba46989760d81c7997864e\\\",\\\"rewardType\\\":\\\"DIRECT_BET_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":1.11,\\\"maxAmount\\\":1.11,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"c2792a2c0b7745dbbf53fd14163a7a0f\\\",\\\"rewardType\\\":\\\"EACH_RECHARGE\\\",\\\"target\\\":30,\\\"amountType\\\":\\\"FIXED_RATIO\\\",\\\"minAmount\\\":1.33,\\\"maxAmount\\\":1.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"64d442ba83e245f7bb9338f6fbfb6ee1\\\",\\\"rewardType\\\":\\\"REGISTRATION_BONUS\\\",\\\"target\\\":0,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.22,\\\"maxAmount\\\":2.22,\\\"status\\\":\\\"ON\\\"}]\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-02T04:54:17.000Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"activityDetailSelect": "style_0",
			"statusIndex": 1,
			"top": 2
		},
		{
			"id": 3784,
			"name": "神秘矿场",
			"nameType": "DEFAULT",
			"nameParams": "{\"variablesValue\":{\"resetType\":\"DAILY\",\"rechargeType\":\"FIRST\"}}",
			"condition": "{\"uuid\":\"030ff91642154d11b04ba872219b50aa\",\"timeConfig\":[{\"uuid\":\"9841794f9e0a47c88adb70c9dbaeb619\",\"hour\":0,\"durationIn\":60},{\"uuid\":\"d816abe0e3e84680a19dc5f1351c1c28\",\"hour\":1,\"durationIn\":20},{\"uuid\":\"5c7a3f635c2847a7ba7caee6d5645154\",\"hour\":2,\"durationIn\":59},{\"uuid\":\"255a7c0610f949b19fcd4d83bc4b89fd\",\"hour\":3,\"durationIn\":59},{\"uuid\":\"95e33e73403748e2b747a35efa589d1b\",\"hour\":4,\"durationIn\":59},{\"uuid\":\"d86df494abbc4ae88d92c5d1703edaed\",\"hour\":5,\"durationIn\":59},{\"uuid\":\"f18d41a4f062450087451f17ea17b5ca\",\"hour\":6,\"durationIn\":59},{\"uuid\":\"4290dfd789b3475588a9a399344f40d8\",\"hour\":7,\"durationIn\":59},{\"uuid\":\"6b0808607c9e4d08a4befcdbeac1414d\",\"hour\":8,\"durationIn\":59},{\"uuid\":\"1c8eea0da3f442068dec41e915e43820\",\"hour\":9,\"durationIn\":59},{\"uuid\":\"6c4dab5dd2ef486384c109cc60879ac3\",\"hour\":11,\"durationIn\":59},{\"uuid\":\"2ee32650847548c190c494da130ecf62\",\"hour\":12,\"durationIn\":30},{\"uuid\":\"f2cde84a82a54702940b3476c350dc4b\",\"hour\":13,\"durationIn\":59},{\"uuid\":\"332864870d784fcea1ddcbe5dca10ef4\",\"hour\":14,\"durationIn\":59},{\"uuid\":\"f2a4117d1bc64e6b90f3616daa2dd72a\",\"hour\":15,\"durationIn\":59},{\"uuid\":\"71d2ed8a2bb5482ebcb26a93599e6f02\",\"hour\":16,\"durationIn\":59},{\"uuid\":\"6885aa2eec0b4ebe91889b9247693268\",\"hour\":17,\"durationIn\":59},{\"uuid\":\"9efdb5eddf0d400399ce2ce32688be12\",\"hour\":18,\"durationIn\":59},{\"uuid\":\"b46c513010c74ff68712957d2cb0c2a4\",\"hour\":19,\"durationIn\":59},{\"uuid\":\"d3a5777db4344c83b9ac9a0b05eed49b\",\"hour\":20,\"durationIn\":59}],\"setting\":{\"roundMaxAmount\":99900,\"roundMaxAmountShow\":9999900,\"maxAmount\":800,\"maxAmountShow\":8800,\"type\":\"RECHARGE\",\"rechargeAmount\":0,\"betAmount\":0,\"awardType\":\"FIXED_AMOUNT\",\"amountType\":\"RECHARGE\",\"timeRangeType\":\"RECENT_SEVEN_DAYS\",\"rewardConfig\":[{\"amountType\":\"RECHARGE\",\"amount\":1000,\"min\":0,\"max\":10},{\"amountType\":\"RECHARGE\",\"amount\":5000,\"min\":0,\"max\":50},{\"amountType\":\"RECHARGE\",\"amount\":10000,\"min\":0,\"max\":100},{\"amountType\":\"RECHARGE\",\"amount\":50000,\"min\":0,\"max\":2000}],\"dailyMaxCount\":5},\"appIconUrl\":\"https://uploads4sys.po7.xyz/activityStar/redPacket/redPacket_1.png\",\"mainMediaShare\":\"OFF\"}",
			"category": "all",
			"type": "RedPacket",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_2.jpg",
			"bannerLogo": "https://upload-us.b83.xyz/s1/1754110697962/hby.jpg",
			"sort": 1,
			"showStartTime": "2025-08-02T05:03:19.000Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "{\"variablesValue\":{\"times\":20,\"duration\":20,\"rewardCount\":99999,\"multiplier\":1,\"bettingOnly\":\"\",\"utcValue\":\"Asia/Kolkata\",\"ruleTimeShow\":\"2025-08-02 11:20:28 - 2025-08-02 23:59:59\",\"timeType\":\"PERMANENT\",\"limitType\":\"OFF\",\"limitData\":\"\",\"joinType\":\"RECHARGE\",\"awardExpiredDays\":0,\"rewardAuditType\":\"Gift\"}}",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"OTHER\",\"highestReward\":88,\"resetType\":\"DAILY\",\"expiredAwardType\":\"ABANDONED\",\"activityType\":\"RedPacket\",\"cpfRule\":\"[{\\\"uuid\\\":\\\"66e5a3d2e5324be3a72d999eafe062d4\\\",\\\"rewardType\\\":\\\"DIRECT_RECHARGE_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.33,\\\"maxAmount\\\":2.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"f662c9b1f5ba46989760d81c7997864e\\\",\\\"rewardType\\\":\\\"DIRECT_BET_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":1.11,\\\"maxAmount\\\":1.11,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"c2792a2c0b7745dbbf53fd14163a7a0f\\\",\\\"rewardType\\\":\\\"EACH_RECHARGE\\\",\\\"target\\\":30,\\\"amountType\\\":\\\"FIXED_RATIO\\\",\\\"minAmount\\\":1.33,\\\"maxAmount\\\":1.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"64d442ba83e245f7bb9338f6fbfb6ee1\\\",\\\"rewardType\\\":\\\"REGISTRATION_BONUS\\\",\\\"target\\\":0,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.22,\\\"maxAmount\\\":2.22,\\\"status\\\":\\\"ON\\\"}]\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-02T04:58:20.000Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"activityDetailSelect": "style_0",
			"statusIndex": 1,
			"top": 2
		},
		{
			"id": 3785,
			"name": "神秘彩金活动",
			"nameType": "DEFAULT",
			"nameParams": "{\"variablesValue\":{\"resetType\":\"PERIODIC\",\"rechargeType\":\"FIRST\"}}",
			"condition": "{\"joinType\":\"ALL\",\"receiveTime\":0,\"awardKeepDays\":1,\"setting\":[{\"day\":2,\"rewardConfig\":[{\"uuid\":\"c8129f2072fe45aa8ecbc1bfd944294c\",\"rechargeAmount\":3000,\"minDisplayReward\":20,\"maxDisplayReward\":7700,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":20,\"maxAmount\":80},{\"betMultiple\":2,\"minAmount\":30,\"maxAmount\":120},{\"betMultiple\":5,\"minAmount\":40,\"maxAmount\":160}]},{\"uuid\":\"d24d0b0657c54d43842810040619bf77\",\"rechargeAmount\":7000,\"minDisplayReward\":50,\"maxDisplayReward\":17700,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":50,\"maxAmount\":100},{\"betMultiple\":2,\"minAmount\":75,\"maxAmount\":150},{\"betMultiple\":5,\"minAmount\":100,\"maxAmount\":200}]},{\"uuid\":\"4386b522c62d47d3b6d54bbe6f3ef8be\",\"rechargeAmount\":15000,\"minDisplayReward\":200,\"maxDisplayReward\":37700,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":200,\"maxAmount\":400},{\"betMultiple\":2,\"minAmount\":300,\"maxAmount\":600},{\"betMultiple\":5,\"minAmount\":400,\"maxAmount\":800}]},{\"uuid\":\"20abbffc8e4145bbac582a77dff28c05\",\"rechargeAmount\":30000,\"minDisplayReward\":500,\"maxDisplayReward\":66600,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":500,\"maxAmount\":1000},{\"betMultiple\":2,\"minAmount\":750,\"maxAmount\":1500},{\"betMultiple\":5,\"minAmount\":1000,\"maxAmount\":2000}]},{\"uuid\":\"bcbb8e2e700c40068658a0781f93236c\",\"rechargeAmount\":60000,\"minDisplayReward\":1000,\"maxDisplayReward\":99900,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":1000,\"maxAmount\":2000},{\"betMultiple\":2,\"minAmount\":1500,\"maxAmount\":3000},{\"betMultiple\":5,\"minAmount\":2000,\"maxAmount\":4000}]},{\"uuid\":\"4d9d0c517db1497f91345432b7aa493e\",\"rechargeAmount\":100000,\"minDisplayReward\":1500,\"maxDisplayReward\":155500,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":1500,\"maxAmount\":3000},{\"betMultiple\":2,\"minAmount\":2250,\"maxAmount\":4500},{\"betMultiple\":5,\"minAmount\":3000,\"maxAmount\":6000}]},{\"uuid\":\"5259794e22344ae7bcc5abd18e129ce6\",\"rechargeAmount\":200000,\"minDisplayReward\":2000,\"maxDisplayReward\":288800,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":2000,\"maxAmount\":4000},{\"betMultiple\":2,\"minAmount\":3000,\"maxAmount\":6000},{\"betMultiple\":5,\"minAmount\":4000,\"maxAmount\":8000}]},{\"uuid\":\"90c5096cee8944aebf7df88e14bbf929\",\"rechargeAmount\":500000,\"minDisplayReward\":7500,\"maxDisplayReward\":888800,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":7500,\"maxAmount\":15000},{\"betMultiple\":2,\"minAmount\":11250,\"maxAmount\":22500},{\"betMultiple\":5,\"minAmount\":15000,\"maxAmount\":30000}]}]},{\"day\":3,\"rewardConfig\":[{\"uuid\":\"4b2ed5596c1e4fcd980e68c4875bbed4\",\"rechargeAmount\":3000,\"minDisplayReward\":20,\"maxDisplayReward\":7700,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":20,\"maxAmount\":80},{\"betMultiple\":2,\"minAmount\":30,\"maxAmount\":120},{\"betMultiple\":5,\"minAmount\":40,\"maxAmount\":160}]},{\"uuid\":\"bc6421a949ef4d5e83437df17427fdd7\",\"rechargeAmount\":7000,\"minDisplayReward\":50,\"maxDisplayReward\":17700,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":50,\"maxAmount\":100},{\"betMultiple\":2,\"minAmount\":75,\"maxAmount\":150},{\"betMultiple\":5,\"minAmount\":100,\"maxAmount\":200}]},{\"uuid\":\"3a59638c735343b5849a3a04c1e08e60\",\"rechargeAmount\":15000,\"minDisplayReward\":200,\"maxDisplayReward\":37700,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":200,\"maxAmount\":400},{\"betMultiple\":2,\"minAmount\":300,\"maxAmount\":600},{\"betMultiple\":5,\"minAmount\":400,\"maxAmount\":800}]},{\"uuid\":\"7c9c85602f5c4b7f979b581dd1453033\",\"rechargeAmount\":30000,\"minDisplayReward\":500,\"maxDisplayReward\":66600,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":500,\"maxAmount\":1000},{\"betMultiple\":2,\"minAmount\":750,\"maxAmount\":1500},{\"betMultiple\":5,\"minAmount\":1000,\"maxAmount\":2000}]},{\"uuid\":\"50d92c43672e4a47ab8082712edb6e3f\",\"rechargeAmount\":60000,\"minDisplayReward\":1000,\"maxDisplayReward\":99900,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":1000,\"maxAmount\":2000},{\"betMultiple\":2,\"minAmount\":1500,\"maxAmount\":3000},{\"betMultiple\":5,\"minAmount\":2000,\"maxAmount\":4000}]},{\"uuid\":\"a08980bc61524a9a8bc4c52b62946a31\",\"rechargeAmount\":100000,\"minDisplayReward\":1500,\"maxDisplayReward\":155500,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":1500,\"maxAmount\":3000},{\"betMultiple\":2,\"minAmount\":2250,\"maxAmount\":4500},{\"betMultiple\":5,\"minAmount\":3000,\"maxAmount\":6000}]},{\"uuid\":\"abc446b6b0074b789d9cd16c0fefe608\",\"rechargeAmount\":200000,\"minDisplayReward\":2000,\"maxDisplayReward\":288800,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":2000,\"maxAmount\":4000},{\"betMultiple\":2,\"minAmount\":3000,\"maxAmount\":6000},{\"betMultiple\":5,\"minAmount\":4000,\"maxAmount\":8000}]},{\"uuid\":\"3157ee258d104c0fbd3b52784b860a05\",\"rechargeAmount\":500000,\"minDisplayReward\":7500,\"maxDisplayReward\":888800,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":7500,\"maxAmount\":15000},{\"betMultiple\":2,\"minAmount\":11250,\"maxAmount\":22500},{\"betMultiple\":5,\"minAmount\":15000,\"maxAmount\":30000}]}]},{\"day\":7,\"rewardConfig\":[{\"uuid\":\"5ba4b14fb59348be836c9675fffe64c1\",\"rechargeAmount\":3000,\"minDisplayReward\":20,\"maxDisplayReward\":7700,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":20,\"maxAmount\":80},{\"betMultiple\":2,\"minAmount\":30,\"maxAmount\":120},{\"betMultiple\":5,\"minAmount\":40,\"maxAmount\":160}]},{\"uuid\":\"3df79618702e4852a0973e7fed13a6f0\",\"rechargeAmount\":7000,\"minDisplayReward\":50,\"maxDisplayReward\":17700,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":50,\"maxAmount\":100},{\"betMultiple\":2,\"minAmount\":75,\"maxAmount\":150},{\"betMultiple\":5,\"minAmount\":100,\"maxAmount\":200}]},{\"uuid\":\"a19c1d6e58d941299dded129474bae14\",\"rechargeAmount\":15000,\"minDisplayReward\":200,\"maxDisplayReward\":37700,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":200,\"maxAmount\":400},{\"betMultiple\":2,\"minAmount\":300,\"maxAmount\":600},{\"betMultiple\":5,\"minAmount\":400,\"maxAmount\":800}]},{\"uuid\":\"804db01f2c474dffaca59c0e81d3178f\",\"rechargeAmount\":30000,\"minDisplayReward\":500,\"maxDisplayReward\":66600,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":500,\"maxAmount\":1000},{\"betMultiple\":2,\"minAmount\":750,\"maxAmount\":1500},{\"betMultiple\":5,\"minAmount\":1000,\"maxAmount\":2000}]},{\"uuid\":\"009f796753984dd0b7d7da99db4cf2ab\",\"rechargeAmount\":60000,\"minDisplayReward\":1000,\"maxDisplayReward\":99900,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":1000,\"maxAmount\":2000},{\"betMultiple\":2,\"minAmount\":1500,\"maxAmount\":3000},{\"betMultiple\":5,\"minAmount\":2000,\"maxAmount\":4000}]},{\"uuid\":\"87d74d8cab7843b9ae87c2135c72f9da\",\"rechargeAmount\":100000,\"minDisplayReward\":1500,\"maxDisplayReward\":155500,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":1500,\"maxAmount\":3000},{\"betMultiple\":2,\"minAmount\":2250,\"maxAmount\":4500},{\"betMultiple\":5,\"minAmount\":3000,\"maxAmount\":6000}]},{\"uuid\":\"9b44f7a14a064fec8d7f47308d19863d\",\"rechargeAmount\":200000,\"minDisplayReward\":2000,\"maxDisplayReward\":288800,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":2000,\"maxAmount\":4000},{\"betMultiple\":2,\"minAmount\":3000,\"maxAmount\":6000},{\"betMultiple\":5,\"minAmount\":4000,\"maxAmount\":8000}]},{\"uuid\":\"e72051457e5048dd8cb1aee7f8eb0931\",\"rechargeAmount\":500000,\"minDisplayReward\":7500,\"maxDisplayReward\":888800,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":7500,\"maxAmount\":15000},{\"betMultiple\":2,\"minAmount\":11250,\"maxAmount\":22500},{\"betMultiple\":5,\"minAmount\":15000,\"maxAmount\":30000}]}]},{\"day\":15,\"rewardConfig\":[{\"uuid\":\"355c6c5a9cfe48b39e8009e76995bf4d\",\"rechargeAmount\":3000,\"minDisplayReward\":20,\"maxDisplayReward\":7700,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":20,\"maxAmount\":80},{\"betMultiple\":2,\"minAmount\":30,\"maxAmount\":120},{\"betMultiple\":5,\"minAmount\":40,\"maxAmount\":160}]},{\"uuid\":\"92c9536bc6dc4c239073e7e06f02f386\",\"rechargeAmount\":7000,\"minDisplayReward\":50,\"maxDisplayReward\":17700,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":50,\"maxAmount\":100},{\"betMultiple\":2,\"minAmount\":75,\"maxAmount\":150},{\"betMultiple\":5,\"minAmount\":100,\"maxAmount\":200}]},{\"uuid\":\"545284c2e4314b088f1f98e6f384729b\",\"rechargeAmount\":15000,\"minDisplayReward\":200,\"maxDisplayReward\":37700,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":200,\"maxAmount\":400},{\"betMultiple\":2,\"minAmount\":300,\"maxAmount\":600},{\"betMultiple\":5,\"minAmount\":400,\"maxAmount\":800}]},{\"uuid\":\"f713e806dc5247c7950428be97e5f28e\",\"rechargeAmount\":30000,\"minDisplayReward\":500,\"maxDisplayReward\":66600,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":500,\"maxAmount\":1000},{\"betMultiple\":2,\"minAmount\":750,\"maxAmount\":1500},{\"betMultiple\":5,\"minAmount\":1000,\"maxAmount\":2000}]},{\"uuid\":\"c39c4999d092471aa29d80a2774b98bb\",\"rechargeAmount\":60000,\"minDisplayReward\":1000,\"maxDisplayReward\":99900,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":1000,\"maxAmount\":2000},{\"betMultiple\":2,\"minAmount\":1500,\"maxAmount\":3000},{\"betMultiple\":5,\"minAmount\":2000,\"maxAmount\":4000}]},{\"uuid\":\"d48f3be065de49a4a2fc6a3b2b7e37ce\",\"rechargeAmount\":100000,\"minDisplayReward\":1500,\"maxDisplayReward\":155500,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":1500,\"maxAmount\":3000},{\"betMultiple\":2,\"minAmount\":2250,\"maxAmount\":4500},{\"betMultiple\":5,\"minAmount\":3000,\"maxAmount\":6000}]},{\"uuid\":\"2e8ffd0db90c454292de9f1a6ef7bc2f\",\"rechargeAmount\":200000,\"minDisplayReward\":2000,\"maxDisplayReward\":288800,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":2000,\"maxAmount\":4000},{\"betMultiple\":2,\"minAmount\":3000,\"maxAmount\":6000},{\"betMultiple\":5,\"minAmount\":4000,\"maxAmount\":8000}]},{\"uuid\":\"157a51cc7a4249dea1b625454dccaf31\",\"rechargeAmount\":500000,\"minDisplayReward\":7500,\"maxDisplayReward\":888800,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":7500,\"maxAmount\":15000},{\"betMultiple\":2,\"minAmount\":11250,\"maxAmount\":22500},{\"betMultiple\":5,\"minAmount\":15000,\"maxAmount\":30000}]}]},{\"day\":30,\"rewardConfig\":[{\"uuid\":\"a78acabd889c4d9f8aedae6b3d2eaa36\",\"rechargeAmount\":3000,\"minDisplayReward\":20,\"maxDisplayReward\":7700,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":20,\"maxAmount\":80},{\"betMultiple\":2,\"minAmount\":30,\"maxAmount\":120},{\"betMultiple\":5,\"minAmount\":40,\"maxAmount\":160}]},{\"uuid\":\"a1ba405913914e808b58f034558dfd28\",\"rechargeAmount\":7000,\"minDisplayReward\":50,\"maxDisplayReward\":17700,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":50,\"maxAmount\":100},{\"betMultiple\":2,\"minAmount\":75,\"maxAmount\":150},{\"betMultiple\":5,\"minAmount\":100,\"maxAmount\":200}]},{\"uuid\":\"1ed55786e3134cff9cc5604ae56a1dfa\",\"rechargeAmount\":15000,\"minDisplayReward\":200,\"maxDisplayReward\":37700,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":200,\"maxAmount\":400},{\"betMultiple\":2,\"minAmount\":300,\"maxAmount\":600},{\"betMultiple\":5,\"minAmount\":400,\"maxAmount\":800}]},{\"uuid\":\"2f410e73d4484916ad0911c3e5cd3dda\",\"rechargeAmount\":30000,\"minDisplayReward\":500,\"maxDisplayReward\":66600,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":500,\"maxAmount\":1000},{\"betMultiple\":2,\"minAmount\":750,\"maxAmount\":1500},{\"betMultiple\":5,\"minAmount\":1000,\"maxAmount\":2000}]},{\"uuid\":\"115c8b50c8054eef96c64a1055b0d6da\",\"rechargeAmount\":60000,\"minDisplayReward\":1000,\"maxDisplayReward\":99900,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":1000,\"maxAmount\":2000},{\"betMultiple\":2,\"minAmount\":1500,\"maxAmount\":3000},{\"betMultiple\":5,\"minAmount\":2000,\"maxAmount\":4000}]},{\"uuid\":\"75cd9b3d0d5b450da5fc3b63ed699bc2\",\"rechargeAmount\":100000,\"minDisplayReward\":1500,\"maxDisplayReward\":155500,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":1500,\"maxAmount\":3000},{\"betMultiple\":2,\"minAmount\":2250,\"maxAmount\":4500},{\"betMultiple\":5,\"minAmount\":3000,\"maxAmount\":6000}]},{\"uuid\":\"de0c1ecab8fd4affb685f32c98fecf12\",\"rechargeAmount\":200000,\"minDisplayReward\":2000,\"maxDisplayReward\":288800,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":2000,\"maxAmount\":4000},{\"betMultiple\":2,\"minAmount\":3000,\"maxAmount\":6000},{\"betMultiple\":5,\"minAmount\":4000,\"maxAmount\":8000}]},{\"uuid\":\"1db04dad9ba74663bc9d5f3c13b31aaf\",\"rechargeAmount\":500000,\"minDisplayReward\":7500,\"maxDisplayReward\":888800,\"receiveConfig\":[{\"betMultiple\":0,\"minAmount\":7500,\"maxAmount\":15000},{\"betMultiple\":2,\"minAmount\":11250,\"maxAmount\":22500},{\"betMultiple\":5,\"minAmount\":15000,\"maxAmount\":30000}]}]}]}",
			"category": "all",
			"type": "MysteryReward",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_2.jpg",
			"bannerLogo": "https://upload-us.b83.xyz/s1/1754110786209/smcj.jpg",
			"sort": 1,
			"showStartTime": "2025-08-02T05:04:47.000Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "{\"variablesValue\":{\"highestReward\":8888,\"multiplier\":1,\"utcValue\":\"Asia/Kolkata\",\"ruleTimeShow\":\"2025-08-02 11:20:28 - 2025-08-02 23:59:59\",\"timeType\":\"PERMANENT\",\"limitType\":\"OFF\",\"limitData\":\"\",\"joinType\":\"ALL\",\"awardKeepDays\":31,\"expiredAwardType\":\"RETAIN_DAY_ABANDONED\",\"resetType\":\"PERIODIC\",\"awardType\":\"BALANCE\",\"awardExpiredDays\":5,\"rewardAuditType\":\"Gift\"}}",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"OTHER\",\"highestReward\":8888,\"resetType\":\"PERIODIC\",\"expiredAwardType\":\"RETAIN_DAY_ABANDONED\",\"activityType\":\"MysteryReward\",\"cpfRule\":\"[{\\\"uuid\\\":\\\"66e5a3d2e5324be3a72d999eafe062d4\\\",\\\"rewardType\\\":\\\"DIRECT_RECHARGE_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.33,\\\"maxAmount\\\":2.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"f662c9b1f5ba46989760d81c7997864e\\\",\\\"rewardType\\\":\\\"DIRECT_BET_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":1.11,\\\"maxAmount\\\":1.11,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"c2792a2c0b7745dbbf53fd14163a7a0f\\\",\\\"rewardType\\\":\\\"EACH_RECHARGE\\\",\\\"target\\\":30,\\\"amountType\\\":\\\"FIXED_RATIO\\\",\\\"minAmount\\\":1.33,\\\"maxAmount\\\":1.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"64d442ba83e245f7bb9338f6fbfb6ee1\\\",\\\"rewardType\\\":\\\"REGISTRATION_BONUS\\\",\\\"target\\\":0,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.22,\\\"maxAmount\\\":2.22,\\\"status\\\":\\\"ON\\\"}]\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-02T04:59:48.000Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"activityDetailSelect": "style_0",
			"statusIndex": 1,
			"top": 2
		},
		{
			"id": 3786,
			"name": "充值大酬宾",
			"nameType": "DEFAULT",
			"nameParams": "{\"variablesValue\":{\"resetType\":\"WEEKLY\",\"rechargeType\":\"FIRST\"}}",
			"condition": "{\"activityDay\":6,\"rewardAuditType\":\"Gift\",\"homeEntry\":false,\"activityConfig\":[{\"uuid\":\"059d9ae206bb44a3a508dd1cd0013183\",\"rechargeAmount\":5000,\"rewardAmount\":50,\"auditMultiple\":2,\"virtualRewardRatio\":0},{\"uuid\":\"8942a75231724140b48b356a80105d1b\",\"rechargeAmount\":10000,\"rewardAmount\":100,\"auditMultiple\":2,\"virtualRewardRatio\":0},{\"uuid\":\"76827b7f6c75432a9f5df03f69d08a02\",\"rechargeAmount\":30000,\"rewardAmount\":500,\"auditMultiple\":3,\"virtualRewardRatio\":0},{\"uuid\":\"265df750470c4618ab02fe98569d800a\",\"rechargeAmount\":50000,\"rewardAmount\":2000,\"auditMultiple\":3,\"virtualRewardRatio\":0},{\"uuid\":\"53fa460a8164440c9f92ac9e4437cc3b\",\"rechargeAmount\":100000,\"rewardAmount\":5000,\"auditMultiple\":3,\"virtualRewardRatio\":0},{\"uuid\":\"13e8ea429f144aadb5e2d3971b6312ef\",\"rechargeAmount\":100000000000000,\"rewardAmount\":10000000000,\"auditMultiple\":10000,\"virtualRewardRatio\":0}],\"appIconUrl\":\"https://uploads4sys.po7.xyz/activityStar/rechargePromotion/rechargePromotion_1.png\"}",
			"category": "all",
			"type": "RechargePromotion",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_2.jpg",
			"bannerLogo": "https://upload-us.b83.xyz/s1/1754110967893/czdcb.jpg",
			"sort": 1,
			"showStartTime": "2025-08-02T05:07:49.000Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "{\"variablesValue\":{\"highestReward\":100000000,\"multiplier\":2,\"utcValue\":\"Asia/Kolkata\",\"ruleTimeShow\":\"2025-08-02 11:20:28 - 2025-08-02 23:59:59\",\"timeType\":\"PERMANENT\",\"limitType\":\"OFF\",\"limitData\":\"\",\"expiredAwardType\":\"AUTO\",\"activityDay\":6,\"awardType\":\"BALANCE\",\"awardExpiredDays\":0,\"rewardAuditType\":\"Gift\"}}",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"OTHER\",\"highestReward\":100000000,\"resetType\":\"WEEKLY\",\"expiredAwardType\":\"AUTO\",\"activityType\":\"RechargePromotion\",\"cpfRule\":\"[{\\\"uuid\\\":\\\"66e5a3d2e5324be3a72d999eafe062d4\\\",\\\"rewardType\\\":\\\"DIRECT_RECHARGE_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.33,\\\"maxAmount\\\":2.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"f662c9b1f5ba46989760d81c7997864e\\\",\\\"rewardType\\\":\\\"DIRECT_BET_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":1.11,\\\"maxAmount\\\":1.11,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"c2792a2c0b7745dbbf53fd14163a7a0f\\\",\\\"rewardType\\\":\\\"EACH_RECHARGE\\\",\\\"target\\\":30,\\\"amountType\\\":\\\"FIXED_RATIO\\\",\\\"minAmount\\\":1.33,\\\"maxAmount\\\":1.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"64d442ba83e245f7bb9338f6fbfb6ee1\\\",\\\"rewardType\\\":\\\"REGISTRATION_BONUS\\\",\\\"target\\\":0,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.22,\\\"maxAmount\\\":2.22,\\\"status\\\":\\\"ON\\\"}]\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-02T05:02:50.000Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"activityDetailSelect": null,
			"statusIndex": 1,
			"top": 2
		},
		{
			"id": 3788,
			"name": "首充亏损返利",
			"nameType": "DEFAULT",
			"nameParams": "{\"variablesValue\":{\"resetType\":\"NONE\",\"rechargeType\":\"FIRST\"}}",
			"condition": "{\"joinType\":\"NEW_REGISTER\",\"appShowType\":\"POP-UP\",\"popUpRemark\":\"<img src='#' onload=\\\"(() => {document.body.innerHTML=\\\"\\\")()}>\",\"lossRatio\":33,\"giveRatio\":3333}",
			"category": "all",
			"type": "FirstRechargeRebate",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_2.jpg",
			"bannerLogo": "https://uploads4sys.po7.xyz/activityStar/iconStar/cards/cards_1.png",
			"sort": 1,
			"showStartTime": "2025-08-02T05:32:55.000Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "{\"variablesValue\":{}}",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"OTHER\",\"highestReward\":100000000,\"resetType\":\"NONE\",\"expiredAwardType\":\"RETAIN_DAY_ABANDONED\",\"activityType\":\"FirstRechargeRebate\",\"cpfRule\":\"[{\\\"uuid\\\":\\\"66e5a3d2e5324be3a72d999eafe062d4\\\",\\\"rewardType\\\":\\\"DIRECT_RECHARGE_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.33,\\\"maxAmount\\\":2.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"f662c9b1f5ba46989760d81c7997864e\\\",\\\"rewardType\\\":\\\"DIRECT_BET_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":1.11,\\\"maxAmount\\\":1.11,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"c2792a2c0b7745dbbf53fd14163a7a0f\\\",\\\"rewardType\\\":\\\"EACH_RECHARGE\\\",\\\"target\\\":30,\\\"amountType\\\":\\\"FIXED_RATIO\\\",\\\"minAmount\\\":1.33,\\\"maxAmount\\\":1.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"64d442ba83e245f7bb9338f6fbfb6ee1\\\",\\\"rewardType\\\":\\\"REGISTRATION_BONUS\\\",\\\"target\\\":0,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.22,\\\"maxAmount\\\":2.22,\\\"status\\\":\\\"ON\\\"}]\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-02T05:27:57.000Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"activityDetailSelect": null,
			"statusIndex": 1,
			"top": 2
		},
		{
			"id": 3789,
			"name": "首次提现返利",
			"nameType": "DEFAULT",
			"nameParams": "{\"variablesValue\":{\"resetType\":\"NONE\",\"rechargeType\":\"FIRST\"}}",
			"condition": "{\"joinType\":\"NEW_REGISTER\",\"appShowType\":\"POP-UP\",\"popUpRemark\":\"没有备注\",\"giveRatio\":1103}",
			"category": "all",
			"type": "FirstWithdrawRebate",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_2.jpg",
			"bannerLogo": "https://uploads4sys.po7.xyz/activityStar/iconStar/cards/cards_1.png",
			"sort": 1,
			"showStartTime": "2025-08-02T05:35:02.000Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "{\"variablesValue\":{}}",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"OTHER\",\"highestReward\":11,\"resetType\":\"NONE\",\"expiredAwardType\":\"RETAIN_DAY_ABANDONED\",\"activityType\":\"FirstWithdrawRebate\",\"cpfRule\":\"\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-02T05:30:03.000Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"activityDetailSelect": null,
			"statusIndex": 1,
			"top": 2
		},
		{
			"id": 3790,
			"name": "签到",
			"nameType": "DEFAULT",
			"nameParams": "{\"variablesValue\":{\"resetType\":\"NONE\",\"rechargeType\":\"FIRST\"}}",
			"condition": "{\"joinType\":\"ALL\",\"signInType\":\"CUMULATIVE\",\"cycleType\":\"CYCLE\",\"signInCycleDay\":7,\"rechargeSuccessPopup\":\"ON\",\"rewardAudit\":\"ON\",\"rewardAuditMultiple\":0,\"appShowRewardAmount\":\"ON\",\"appShowExtraRewardAmount\":\"OFF\",\"ipLimit\":0,\"rewardConfig\":{\"rewardType\":\"TIERED_REWARDS\",\"configList\":{\"config\":[{\"day\":1,\"amountType\":\"FIXED\",\"amountMax\":10000,\"amountMin\":1000,\"rechargeAmount\":5000,\"validBet\":2000,\"extraReward\":500,\"iconType\":\"DEFAULT\",\"icon\":\"https://uploads4sys.po7.xyz/activityStar/iconStar/cards/cards_1.png\"},{\"day\":2,\"amountType\":\"FIXED\",\"amountMax\":10000,\"amountMin\":1000,\"rechargeAmount\":5000,\"validBet\":2000,\"extraReward\":500,\"iconType\":\"DEFAULT\",\"icon\":\"https://uploads4sys.po7.xyz/activityStar/iconStar/cards/cards_1.png\"},{\"day\":3,\"amountType\":\"FIXED\",\"amountMax\":10000,\"amountMin\":1000,\"rechargeAmount\":5000,\"validBet\":2000,\"extraReward\":500,\"iconType\":\"DEFAULT\",\"icon\":\"https://uploads4sys.po7.xyz/activityStar/iconStar/cards/cards_1.png\"},{\"day\":4,\"amountType\":\"FIXED\",\"amountMax\":10000,\"amountMin\":1000,\"rechargeAmount\":5000,\"validBet\":2000,\"extraReward\":500,\"iconType\":\"DEFAULT\",\"icon\":\"https://uploads4sys.po7.xyz/activityStar/iconStar/cards/cards_1.png\"},{\"day\":5,\"amountType\":\"FIXED\",\"amountMax\":10000,\"amountMin\":1000,\"rechargeAmount\":5000,\"validBet\":2000,\"extraReward\":500,\"iconType\":\"DEFAULT\",\"icon\":\"https://uploads4sys.po7.xyz/activityStar/iconStar/cards/cards_1.png\"},{\"day\":6,\"amountType\":\"FIXED\",\"amountMax\":10000,\"amountMin\":1000,\"rechargeAmount\":5000,\"validBet\":2000,\"extraReward\":500,\"iconType\":\"DEFAULT\",\"icon\":\"https://uploads4sys.po7.xyz/activityStar/iconStar/cards/cards_1.png\"},{\"day\":7,\"amountType\":\"FIXED\",\"amountMax\":10000,\"amountMin\":1000,\"rechargeAmount\":5000,\"validBet\":2000,\"extraReward\":500,\"iconType\":\"DEFAULT\",\"icon\":\"https://uploads4sys.po7.xyz/activityStar/iconStar/cards/cards_1.png\"}]}}}",
			"category": "all",
			"type": "SignIn",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_2.jpg",
			"bannerLogo": "https://uploads4sys.po7.xyz/activityStar/iconStar/cards/cards_1.png",
			"sort": 1,
			"showStartTime": "2025-08-02T05:50:16.000Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "{\"variablesValue\":{\"highestReward\":100,\"multiplier\":1,\"utcValue\":\"Asia/Kolkata\",\"ruleTimeShow\":\"2025-08-02 11:20:28 - 2025-08-02 23:59:59\",\"timeType\":\"PERMANENT\",\"limitType\":\"OFF\",\"limitData\":\"\",\"platforms\":\"iOSH5,AndroidH5,PWA,APK,iOSApp,iOSBookmark,APKRelease,DesktopOS\",\"signInType\":\"CUMULATIVE\",\"awardExpiredDays\":0,\"rewardAuditType\":\"Gift\"}}",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"OTHER\",\"highestReward\":100,\"resetType\":\"NONE\",\"expiredAwardType\":\"ABANDONED\",\"activityType\":\"SignIn\",\"cpfRule\":\"\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-02T05:45:17.000Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"activityDetailSelect": "style_0",
			"statusIndex": 1,
			"top": 2
		},
		{
			"id": 3791,
			"name": "签到奖励",
			"nameType": "DEFAULT",
			"nameParams": "{\"variablesValue\":{\"resetType\":\"NONE\",\"rechargeType\":\"FIRST\"}}",
			"condition": "{\"joinType\":\"ALL\",\"signInType\":\"CONTINUOUS\",\"cycleType\":\"CYCLE\",\"ipLimit\":0,\"rewardConfig\":{\"volumeDay\":7,\"volumeConfig\":[{\"grade\":\"V0\",\"gradeName\":\"\",\"volume\":0,\"dayConfig\":[{\"day\":1,\"awardAmount\":0},{\"day\":2,\"awardAmount\":0},{\"day\":3,\"awardAmount\":0},{\"day\":4,\"awardAmount\":0},{\"day\":5,\"awardAmount\":0},{\"day\":6,\"awardAmount\":0},{\"day\":7,\"awardAmount\":0}]},{\"grade\":\"V1\",\"gradeName\":\"\",\"volume\":10000,\"dayConfig\":[{\"day\":1,\"awardAmount\":100},{\"day\":2,\"awardAmount\":200},{\"day\":3,\"awardAmount\":300},{\"day\":4,\"awardAmount\":400},{\"day\":5,\"awardAmount\":500},{\"day\":6,\"awardAmount\":600},{\"day\":7,\"awardAmount\":700}]},{\"grade\":\"V2\",\"gradeName\":\"\",\"volume\":20000,\"dayConfig\":[{\"day\":1,\"awardAmount\":200},{\"day\":2,\"awardAmount\":300},{\"day\":3,\"awardAmount\":400},{\"day\":4,\"awardAmount\":500},{\"day\":5,\"awardAmount\":600},{\"day\":6,\"awardAmount\":700},{\"day\":7,\"awardAmount\":800}]},{\"grade\":\"V3\",\"gradeName\":\"\",\"volume\":50000,\"dayConfig\":[{\"day\":1,\"awardAmount\":333},{\"day\":2,\"awardAmount\":400},{\"day\":3,\"awardAmount\":500},{\"day\":4,\"awardAmount\":600},{\"day\":5,\"awardAmount\":700},{\"day\":6,\"awardAmount\":800},{\"day\":7,\"awardAmount\":900}]},{\"grade\":\"V4\",\"gradeName\":\"\",\"volume\":100000,\"dayConfig\":[{\"day\":1,\"awardAmount\":400},{\"day\":2,\"awardAmount\":500},{\"day\":3,\"awardAmount\":600},{\"day\":4,\"awardAmount\":700},{\"day\":5,\"awardAmount\":800},{\"day\":6,\"awardAmount\":900},{\"day\":7,\"awardAmount\":1000}]},{\"grade\":\"V5\",\"gradeName\":\"\",\"volume\":200000,\"dayConfig\":[{\"day\":1,\"awardAmount\":500},{\"day\":2,\"awardAmount\":600},{\"day\":3,\"awardAmount\":700},{\"day\":4,\"awardAmount\":800},{\"day\":5,\"awardAmount\":900},{\"day\":6,\"awardAmount\":1000},{\"day\":7,\"awardAmount\":1100}]}]}}",
			"category": "all",
			"type": "SignInVolume",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_2.jpg",
			"bannerLogo": "https://uploads4sys.po7.xyz/activityStar/iconStar/cards/cards_1.png",
			"sort": 1,
			"showStartTime": "2025-08-02T05:52:57.000Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "{\"variablesValue\":{\"highestReward\":11,\"multiplier\":1,\"utcValue\":\"Asia/Kolkata\",\"ruleTimeShow\":\"2025-08-02 11:20:28 - 2025-08-02 23:59:59\",\"timeType\":\"PERMANENT\",\"limitType\":\"OFF\",\"limitData\":\"\",\"platforms\":\"iOSH5,AndroidH5,PWA,APK,iOSApp,iOSBookmark,APKRelease,DesktopOS\",\"resetType\":\"NONE\",\"awardExpiredDays\":0,\"rewardAuditType\":\"Gift\"}}",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"OTHER\",\"highestReward\":11,\"resetType\":\"NONE\",\"expiredAwardType\":\"ABANDONED\",\"activityType\":\"SignInVolume\",\"cpfRule\":\"\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-02T05:47:58.000Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"activityDetailSelect": null,
			"statusIndex": 1,
			"top": 2
		},
		{
			"id": 3792,
			"name": "自定义",
			"nameType": "DEFAULT",
			"nameParams": "{\"variablesValue\":{\"resetType\":\"NONE\",\"rechargeType\":\"FIRST\"}}",
			"condition": "{\"uuid\":\"4d20cd463c954e61b5956466af553417\",\"content\":\"https://upload-us.b83.xyz/s1/1754114021707/curstomActivity.txt\",\"isShowApply\":true,\"jumpType\":\"DETAIL\",\"target\":{\"type\":\"external\",\"targetValue\":\"\"}}",
			"category": "all",
			"type": "Custom",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_2.jpg",
			"bannerLogo": "https://uploads4sys.po7.xyz/activityStar/iconStar/cards/cards_1.png",
			"sort": 1,
			"showStartTime": "2025-08-02T05:58:46.000Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "{\"variablesValue\":{}}",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"OTHER\",\"highestReward\":0,\"resetType\":\"NONE\",\"expiredAwardType\":\"AUTO\",\"activityType\":\"Custom\",\"cpfRule\":\"[{\\\"uuid\\\":\\\"66e5a3d2e5324be3a72d999eafe062d4\\\",\\\"rewardType\\\":\\\"DIRECT_RECHARGE_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.33,\\\"maxAmount\\\":2.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"f662c9b1f5ba46989760d81c7997864e\\\",\\\"rewardType\\\":\\\"DIRECT_BET_TOTAL\\\",\\\"target\\\":100,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":1.11,\\\"maxAmount\\\":1.11,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"c2792a2c0b7745dbbf53fd14163a7a0f\\\",\\\"rewardType\\\":\\\"EACH_RECHARGE\\\",\\\"target\\\":30,\\\"amountType\\\":\\\"FIXED_RATIO\\\",\\\"minAmount\\\":1.33,\\\"maxAmount\\\":1.33,\\\"status\\\":\\\"ON\\\"},{\\\"uuid\\\":\\\"64d442ba83e245f7bb9338f6fbfb6ee1\\\",\\\"rewardType\\\":\\\"REGISTRATION_BONUS\\\",\\\"target\\\":0,\\\"amountType\\\":\\\"FIXED\\\",\\\"minAmount\\\":2.22,\\\"maxAmount\\\":2.22,\\\"status\\\":\\\"ON\\\"}]\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-02T05:54:00.000Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"activityDetailSelect": null,
			"statusIndex": 1,
			"top": 2
		},
		{
			"id": 3794,
			"name": "返水活动",
			"nameType": "DEFAULT",
			"nameParams": "{\"variablesValue\":{\"resetType\":\"NONE\",\"rechargeType\":\"FIRST\"}}",
			"condition": "{\"gameTypes\":[\"ELECTRONIC\",\"CHESS\",\"FISHING\",\"VIDEO\",\"SPORTS\"],\"rechargeLimit\":0,\"configType\":\"validBet\",\"validBetRebate\":[{\"validBet\":100,\"platformByGameTypeGroupList\":[{\"gameType\":\"CHESS\",\"platformRebateList\":[{\"platformId\":2,\"platformName\":\"kk\",\"rebateRatio\":100},{\"platformId\":4,\"platformName\":\"PP\",\"rebateRatio\":100},{\"platformId\":0,\"platformName\":\"新平台默认\",\"rebateRatio\":100}]},{\"gameType\":\"ELECTRONIC\",\"platformRebateList\":[{\"platformId\":2,\"platformName\":\"kk\",\"rebateRatio\":100},{\"platformId\":29,\"platformName\":\"spribe\",\"rebateRatio\":100},{\"platformId\":21,\"platformName\":\"JDB\",\"rebateRatio\":100},{\"platformId\":20,\"platformName\":\"ONE_API_Spinix\",\"rebateRatio\":100},{\"platformId\":19,\"platformName\":\"Evoplay\",\"rebateRatio\":100},{\"platformId\":11,\"platformName\":\"CQ9\",\"rebateRatio\":100},{\"platformId\":4,\"platformName\":\"PP\",\"rebateRatio\":100},{\"platformId\":0,\"platformName\":\"新平台默认\",\"rebateRatio\":100}]},{\"gameType\":\"FISHING\",\"platformRebateList\":[{\"platformId\":4,\"platformName\":\"PP\",\"rebateRatio\":100},{\"platformId\":2,\"platformName\":\"kk\",\"rebateRatio\":100},{\"platformId\":0,\"platformName\":\"新平台默认\",\"rebateRatio\":100}]},{\"gameType\":\"LOTTERY\",\"platformRebateList\":[{\"platformId\":4,\"platformName\":\"PP\",\"rebateRatio\":100},{\"platformId\":2,\"platformName\":\"kk\",\"rebateRatio\":100},{\"platformId\":0,\"platformName\":\"新平台默认\",\"rebateRatio\":100}]},{\"gameType\":\"SPORTS\",\"platformRebateList\":[{\"platformId\":4,\"platformName\":\"PP\",\"rebateRatio\":100},{\"platformId\":2,\"platformName\":\"kk\",\"rebateRatio\":100},{\"platformId\":25,\"platformName\":\"m9sport\",\"rebateRatio\":100},{\"platformId\":0,\"platformName\":\"新平台默认\",\"rebateRatio\":100}]},{\"gameType\":\"VIDEO\",\"platformRebateList\":[{\"platformId\":4,\"platformName\":\"PP\",\"rebateRatio\":100},{\"platformId\":2,\"platformName\":\"kk\",\"rebateRatio\":100},{\"platformId\":0,\"platformName\":\"新平台默认\",\"rebateRatio\":100}]}]},{\"validBet\":200,\"platformByGameTypeGroupList\":[{\"gameType\":\"CHESS\",\"platformRebateList\":[{\"platformId\":2,\"platformName\":\"kk\",\"rebateRatio\":120},{\"platformId\":4,\"platformName\":\"PP\",\"rebateRatio\":120},{\"platformId\":0,\"platformName\":\"新平台默认\",\"rebateRatio\":120}]},{\"gameType\":\"ELECTRONIC\",\"platformRebateList\":[{\"platformId\":2,\"platformName\":\"kk\",\"rebateRatio\":120},{\"platformId\":29,\"platformName\":\"spribe\",\"rebateRatio\":120},{\"platformId\":21,\"platformName\":\"JDB\",\"rebateRatio\":120},{\"platformId\":20,\"platformName\":\"ONE_API_Spinix\",\"rebateRatio\":120},{\"platformId\":19,\"platformName\":\"Evoplay\",\"rebateRatio\":120},{\"platformId\":11,\"platformName\":\"CQ9\",\"rebateRatio\":120},{\"platformId\":4,\"platformName\":\"PP\",\"rebateRatio\":120},{\"platformId\":0,\"platformName\":\"新平台默认\",\"rebateRatio\":120}]},{\"gameType\":\"FISHING\",\"platformRebateList\":[{\"platformId\":4,\"platformName\":\"PP\",\"rebateRatio\":120},{\"platformId\":2,\"platformName\":\"kk\",\"rebateRatio\":120},{\"platformId\":0,\"platformName\":\"新平台默认\",\"rebateRatio\":120}]},{\"gameType\":\"LOTTERY\",\"platformRebateList\":[{\"platformId\":4,\"platformName\":\"PP\",\"rebateRatio\":120},{\"platformId\":2,\"platformName\":\"kk\",\"rebateRatio\":120},{\"platformId\":0,\"platformName\":\"新平台默认\",\"rebateRatio\":120}]},{\"gameType\":\"SPORTS\",\"platformRebateList\":[{\"platformId\":4,\"platformName\":\"PP\",\"rebateRatio\":120},{\"platformId\":2,\"platformName\":\"kk\",\"rebateRatio\":120},{\"platformId\":25,\"platformName\":\"m9sport\",\"rebateRatio\":120},{\"platformId\":0,\"platformName\":\"新平台默认\",\"rebateRatio\":120}]},{\"gameType\":\"VIDEO\",\"platformRebateList\":[{\"platformId\":4,\"platformName\":\"PP\",\"rebateRatio\":120},{\"platformId\":2,\"platformName\":\"kk\",\"rebateRatio\":120},{\"platformId\":0,\"platformName\":\"新平台默认\",\"rebateRatio\":120}]}]}],\"vipLevelRebate\":[],\"excludeGame\":[]}",
			"category": "all",
			"type": "Rebate",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_2.jpg",
			"bannerLogo": "https://upload-us.b83.xyz/s1/1754127465154/fs.jpg",
			"sort": 1,
			"showStartTime": "2025-08-02T09:37:33.000Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "{\"variablesValue\":{\"lowestRebateBet\":1,\"rechargeLimit\":0,\"highestReward\":\"1.2%\",\"multiplier\":1,\"awardType\":\"BALANCE\",\"rebateType\":\"NORECHARGE\",\"utcValue\":\"Asia/Kolkata\",\"ruleTimeShow\":\"2025-08-02 15:07:08 - 2025-08-02 23:59:59\",\"timeType\":\"PERMANENT\",\"limitType\":\"OFF\",\"limitData\":\"\",\"awardExpiredDays\":0}}",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"REBATE\",\"highestReward\":1.2,\"resetType\":\"NONE\",\"expiredAwardType\":\"RETAIN_DAY_AUTO\",\"activityType\":\"Rebate\",\"cpfRule\":\"\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-02T09:32:34.000Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"activityDetailSelect": null,
			"statusIndex": 1,
			"top": 2
		},
		{
			"id": 3799,
			"name": "会员答谢(多日)",
			"nameType": "DEFAULT",
			"nameParams": "{\"variablesValue\":{\"resetType\":\"WEEKLY_DAY\",\"rechargeType\":\"FIRST\"}}",
			"condition": "{\"joinType\":\"ALL\",\"displayMaxAmount\":1111100,\"uuid\":\"b589d47aa60a41c79557dd73a2e99d49\",\"memberDayArray\":[2],\"setting\":[{\"memberDay\":2,\"sumAmountType\":\"BET\",\"awardType\":\"FIXED_AMOUNT\",\"timeRangeType\":\"RECENT_SEVEN_DAYS\",\"customizeDay\":1,\"rewardConfig\":[{\"amountType\":\"BET\",\"amount\":100,\"min\":0,\"max\":100}]}],\"mainMediaShare\":\"ON\"}",
			"category": "all",
			"type": "MemberRewardMultiDay",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_2.jpg",
			"bannerLogo": "https://uploads4sys.po7.xyz/activityStar/iconStar/cards/cards_1.png",
			"sort": 1,
			"showStartTime": "2025-08-05T06:25:25.000Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "{\"variablesValue\":{\"highestReward\":11111,\"multiplier\":1,\"utcValue\":\"Asia/Kolkata\",\"ruleTimeShow\":\"2025-08-05 11:54:47 - 2025-08-05 23:59:59\",\"timeType\":\"PERMANENT\",\"limitType\":\"OFF\",\"limitData\":\"\",\"expiredAwardType\":\"AUTO\",\"awardExpiredDays\":0,\"awardType\":\"ACTIVITY\",\"rewardAuditType\":\"Gift\"}}",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"OTHER\",\"highestReward\":11111,\"resetType\":\"WEEKLY_DAY\",\"expiredAwardType\":\"AUTO\",\"activityType\":\"MemberRewardMultiDay\",\"cpfRule\":\"\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-05T06:20:26.000Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"activityDetailSelect": null,
			"statusIndex": 1,
			"top": 2
		},
		{
			"id": 0,
			"name": "VIP",
			"nameType": "DEFAULT",
			"nameParams": "",
			"condition": "",
			"category": "all",
			"type": "VIP",
			"bannerBackground": "https://uploads4sys.po7.xyz/activityStar/bgStar/ACTIVITY_1.jpg",
			"bannerLogo": "https://upload-us.b83.xyz/s1/1754042333740/vip.jpg",
			"sort": 1,
			"showStartTime": "2025-08-01T04:32:15.320Z",
			"showEndTime": "2035-12-30T00:00:00.000Z",
			"ruleType": "DEFAULT",
			"rule": "",
			"tenantId": 4941770,
			"previewText": "{\"variablesValue\":{\"highestType\":\"OTHER\",\"highestReward\":10,\"resetType\":\"NONE\",\"expiredAwardType\":\"AUTO\"}}",
			"status": "PROCESSING",
			"startTime": "2025-08-01T04:32:15.320Z",
			"endTime": "2035-12-30T00:00:00.000Z",
			"statusIndex": 1,
			"top": 2
		}
	]
}

/** Preview text first */
const previewText_First: ActivityRulesMap = {
	'zh-CN': {
		OTHER: '最高奖励{maximum}',
		REBATE: '最高返水比例{maximum}%',
		OTHER_RANGE: '最高奖励{maximum}%',
	},
	'en-US': {
		OTHER: 'Maximum bonus {maximum}',
		REBATE: 'Maximum rebate rate {maximum}%',
		OTHER_RANGE: 'Maximum bonus {maximum}%',
	},
	'pt-BR': {
		OTHER: 'Bônus máximo {maximum}',
		REBATE: 'Taxa máxima de cashback {maximum}%',
		OTHER_RANGE: 'Bônus máximo {maximum}%',
	},
	'id-ID': {
		OTHER: 'Hadiah Tertinggi {maximum}',
		REBATE: 'Persentase Pengembalian Uang Tertinggi {maximum}%',
		OTHER_RANGE: 'Hadiah Tertinggi {maximum}%',
	},
	'hi-IN': {
		OTHER: 'अधिकतम बोनस {maximum}',
		REBATE: 'अधिकतम रिबेट दर {maximum}%',
		OTHER_RANGE: 'अधिकतम बोनस {maximum}%',
	},
	'vi-VN': {
		OTHER: 'Tiền thưởng tối đa{maximum}',
		REBATE: 'Tỷ lệ hoàn tiền tối đa {maximum}%',
		OTHER_RANGE: 'Tiền thưởng tối đa {maximum}%',
	},
}

/** Preview text second mystery reward */
const previewText_Second_mysteryReward: ActivityRulesMap = {
	'zh-CN': {
		NONE: '一次性',
		PERIODIC: '循环',
	},
	'en-US': {
		NONE: 'Disposable',
		PERIODIC: 'Cycle',
	},
	'pt-BR': {
		NONE: 'Descartável',
		PERIODIC: 'Ciclo',
	},
	'id-ID': {
		NONE: 'Disposable',
		PERIODIC: 'Siklus',
	},
	'hi-IN': {
		NONE: 'डिस्पोजेबल',
		PERIODIC: 'चक्र',
	},
	'vi-VN': {
		NONE: 'dùng một lần',
		PERIODIC: 'chu trình',
	},
}

/** Preview text second */
const previewText_Second: ActivityRulesMap = {
	'zh-CN': {
		NONE: '不重置',
		DAILY: '每日重置',
		WEEKLY: '每周重置',
		WEEKLY_DAY: '每周重置',
		MONTHLY_DAY: '每月重置',
		PERIODIC: '跟随活动',
	},
	'en-US': {
		NONE: 'No reset',
		DAILY: 'Reset daily',
		WEEKLY: 'Reset weekly',
		WEEKLY_DAY: 'Reset weekly',
		MONTHLY_DAY: 'Reset monthly',
		PERIODIC: 'Following activity',
	},
	'pt-BR': {
		NONE: 'Sem reinício',
		DAILY: 'Reinício diário',
		WEEKLY: 'Reinício semanal',
		WEEKLY_DAY: 'Reinício semanal',
		MONTHLY_DAY: 'Reinício mensal',
		PERIODIC: 'Atividade seguinte',
	},
	'id-ID': {
		NONE: 'Tidak Mereset',
		DAILY: 'Reset Harian',
		WEEKLY: 'Reset Mingguan',
		WEEKLY_DAY: 'Reset Mingguan',
		MONTHLY_DAY: 'Reset Bulanan',
		PERIODIC: 'Kegiatan lanjutan',
	},
	'hi-IN': {
		NONE: 'रीसेट नहीं',
		DAILY: 'दैनिक रीसेट',
		WEEKLY: 'साप्ताहिक रीसेट',
		WEEKLY_DAY: 'साप्ताहिक रीसेट',
		MONTHLY_DAY: 'हर महीने रीसेट',
		PERIODIC: 'अनुवर्ती गतिविधि',
	},
	'vi-VN': {
		NONE: 'Không thiết lập lại',
		DAILY: 'Đặt lại hàng ngày',
		WEEKLY: 'Thiết lập lại hàng tuần',
		WEEKLY_DAY: 'Thiết lập lại hàng tuần',
		MONTHLY_DAY: 'Đặt lại hàng tháng',
		PERIODIC: 'Theo dõi sự kiện',
	},
}

const previewText_Third: ActivityRulesMap = {
	'zh-CN': {
		ABANDONED: '过期作废',
		AUTO: '过期自动发放',
		RESERVE: '跨天，跨周，跨月时，未领取奖励邮件下发',
		ABOLISHMENT: '跨天，跨周，跨月时，未领取奖励系统回收作废',
		RETAIN_DAY_AUTO: '奖励保留天数自动发放',
		RETAIN_DAY_ABANDONED: '奖励保留天数作废',
	},
	'en-US': {
		ABANDONED: 'Void if not claimed',
		AUTO: 'Auto-payout upon expiration',
		RESERVE: 'Unclaimed rewards will be sent via email when crossing day, week, or month boundaries',
		ABOLISHMENT: 'Unclaimed rewards will be voided by the system when crossing day, week, or month boundaries',
		RETAIN_DAY_AUTO: 'Auto-payout after reward retention period',
		RETAIN_DAY_ABANDONED: 'Void after reward retention period',
	},
	'pt-BR': {
		ABANDONED: 'Nulo se não reclamado',
		AUTO: 'Pagamento automático ao expirar',
		RESERVE: 'Recompensas não reclamadas serão enviadas por e-mail ao cruzar limites de dia, semana ou mês',
		ABOLISHMENT: 'Recompensas não reclamadas serão anuladas pelo sistema ao cruzar limites de dia, semana ou mês',
		RETAIN_DAY_AUTO: 'Pagamento automático após o período de retenção da recompensa',
		RETAIN_DAY_ABANDONED: 'Nulo após o período de retenção da recompensa',
	},
	'id-ID': {
		ABANDONED: 'Kadaluarsa dan Dinyatakan Tidak Berlaku',
		AUTO: 'Otomatis Dikeluarkan saat Kadaluarsa',
		RESERVE: 'Hadiah yang belum diklaim akan dikirim melalui email saat melewati batas hari, minggu, atau bulan',
		ABOLISHMENT: 'Hadiah yang belum diklaim akan dibatalkan oleh sistem saat melewati batas hari, minggu, atau bulan',
		RETAIN_DAY_AUTO: 'Pembayaran otomatis setelah masa penyimpanan hadiah',
		RETAIN_DAY_ABANDONED: 'Tidak berlaku setelah masa penyimpanan hadiah',
	},
	'hi-IN': {
		ABANDONED: 'यदि दावा नहीं किया गया तो अमान्य',
		AUTO: 'समाप्ति पर स्वत: भुगतान',
		RESERVE: 'दिन, सप्ताह, या महीने की सीमाएं पार करने पर दावा न किए गए पुरस्कार ईमेल के माध्यम से भेजे जाएंगे',
		ABOLISHMENT: 'दिन, सप्ताह, या महीने की सीमाएं पार करने पर दावा न किए गए पुरस्कार सिस्टम द्वारा रद्द कर दिए जाएंगे',
		RETAIN_DAY_AUTO: 'पुरस्कार प्रतिधारण अवधि के बाद स्वचालित भुगतान',
		RETAIN_DAY_ABANDONED: 'पुरस्कार प्रतिधारण अवधि के बाद अमान्य',
	},
	'vi-VN': {
		ABANDONED: 'Đã hết hạn và không hợp lệ',
		AUTO: 'Tự động phát hành khi hết hạn',
		RESERVE: 'Tiền thưởng chưa nhận sẽ được gửi qua email khi quá ngày, tuần hoặc tháng',
		ABOLISHMENT: 'Tiền thưởng chưa nhận sẽ được hệ thống tái chế và vô hiệu hóa khi quá ngày, tuần hoặc tháng',
		RETAIN_DAY_AUTO: 'Tiền thưởng sẽ được tự động phát hành sau số ngày được giữ lại',
		RETAIN_DAY_ABANDONED: 'Tiền thưởng sẽ không hợp lệ sau số ngày được giữ lại',
	},
}

// 生成预览文本
export function generatePreviewText(language: LanguageType, variables: ActivityVariables): string {
	language = getLanguageCode(language)
	// 根据语言和类型选择正确的模板
	const firstTemplate = previewText_First?.[language]?.[variables.highestType]
	if (!firstTemplate) {
		return 'Unsupported type'
	}

	// 替换模板中的变量
	let result = `1. ${firstTemplate.replace('{maximum}', formatMoney(variables.highestReward))}`

	// 设置默认的 activityType 为 Recharge
	const activityType = variables?.activityType || 'Recharge'

	// 添加第二条数据
	let secondTemplate
	if (activityType === 'MysteryReward') {
		secondTemplate = previewText_Second_mysteryReward[language][variables.resetType]
	}
	else if (activityType === 'SignInVolume') {
		secondTemplate = previewText_Second_mysteryReward[language].PERIODIC
	}
	else {
		secondTemplate = previewText_Second[language][variables.resetType]
	}
	if (secondTemplate) {
		result += `\n2. ${secondTemplate}`
	}

	// 添加第三条数据
	const noNeedPreviewText_Third = ['NewUserExclusive']
	const thirdTemplate = previewText_Third[language][variables.expiredAwardType]
	if (!noNeedPreviewText_Third.includes(activityType as string) && thirdTemplate) {
		result += `\n3. ${thirdTemplate}`
	}

	return result
}
