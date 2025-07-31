export default defineEventHandler(async () => {
	// Simulate API call
	const fetchTenantInfo = async () => {
		// Simulate network request
		await new Promise(resolve => setTimeout(resolve, 100))

		// Simulate random success/failure
		if (Math.random() > 0.1) {
			return {
				pwa: {
					name: 'nuxt-app',
				},
				language: 'pt-BR',
				theme: 'purple'
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
