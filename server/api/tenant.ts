export default defineEventHandler(async () => {
	// 模拟 API 调用
	const fetchTenantInfo = async () => {
		// 模拟网络请求
		await new Promise(resolve => setTimeout(resolve, 100))

		// 模拟随机成功/失败
		if (Math.random() > 0.1) {
			return {
				pwa: {
					name: 'nuxt-app',
				},
				language: 'pt-BR',
				theme: 'purple',
				merchantCy: 'R$'
			}
		} else {
			throw new Error('API request failed')
		}
	}

	try {
		const result = await fetchTenantInfo()
		return result
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Failed to fetch tenant info'
		})
	}
})
