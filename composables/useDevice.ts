import { UAParser } from 'ua-parser-js'

export const useDevice = () => {
	const getInfo = () => {
		if (import.meta.client) {
			const parser = new UAParser()
			const result = parser.getResult()

			return {
				platform: getPlatform(result),
				model: getModel(result),
				operatingSystem: result.os.name || 'unknown',
				osVersion: result.os.version || 'unknown',
			}
		}

		return {
			platform: 'unknown',
			model: 'unknown',
			operatingSystem: 'unknown',
			osVersion: 'unknown'
		}
	}

	const getPlatform = (result) => {
		const osName = result.os.name?.toLowerCase()
		if (osName?.includes('android')) return 'android'
		if (osName?.includes('ios')) return 'ios'
		if (osName?.includes('windows')) return 'web'
		if (osName?.includes('mac')) return 'web'
		if (osName?.includes('linux')) return 'web'
		return 'web'
	}

	const getModel = (result) => {
		// Web 环境下很难获取具体型号，可以返回设备类型
		if (result.device.model) return result.device.model
		if (result.device.vendor && result.device.type) {
			return `${result.device.vendor} ${result.device.type}`
		}
		return result.browser.name || 'unknown'
	}

	return { getInfo }
}
