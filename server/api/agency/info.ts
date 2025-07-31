export default defineEventHandler(async () => {
	// Simulate API call
	const fetchAgencyInfo = async () => {
		// Simulate network request
		await new Promise(resolve => setTimeout(resolve, 100))

		// Simulate random success/failure
		if (Math.random() > 0.1) {
			return {
				"info": {
					"level": {},
					"agencyLevel": 0,
					"yesterdayComm": 0,
					"dayDirectAdd": 0,
					"dayDirectRechargeCnt": 0,
					"dayDirectRechargeAmt": 0,
					"dayDirectFirstRechargeCnt": 0,
					"dayTeamAdd": 0,
					"dayTeamRechargeCnt": 0,
					"dayTeamRechargeAmt": 0,
					"dayTeamFirstRechargeCnt": 0,
					"weekComm": 0,
					"histComm": 0,
					"histDirectCnt": 0,
					"histTeamCnt": 0,
					"histBet": 0,
					"histTeamBet": 0,
					"histDirectBet": 0
				}
			}
		} else {
			throw new Error('API request failed')
		}
	}

	try {
		const result = await fetchAgencyInfo()
		return result
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Failed to fetch tenant info'
		})
	}
})
