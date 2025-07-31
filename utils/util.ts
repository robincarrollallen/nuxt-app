import * as clipboard from "clipboard-polyfill"

/**
 * Copy text
 */
export async function copy(text: any, isShowSuccessToast = true) {
	const { $i18n } = useNuxtApp()
	const { showToast } = await import('vant')
	const textStr = text.value ? text.value.toString() : text.toString()
	clipboard.writeText(textStr).then(
		() => { isShowSuccessToast && showToast($i18n.t('toast.copySuccess')) },
		() => { showToast({
			message: $i18n.t('toast.copyFailed'),
			wordBreak: 'break-word',
		}) }
	)
}

/**
 * Deep clone
 */
export function deepClone<T>(obj: T): T {
	// Handle primitive types and null
	if (obj === null || typeof obj !== 'object') {
		return obj
	}

	// Handle Date
	if (obj instanceof Date) {
		return new Date(obj.getTime()) as T
	}

	// Handle Array
	if (Array.isArray(obj)) {
		return obj.map(item => deepClone(item)) as T
	}

	// Handle RegExp
	if (obj instanceof RegExp) {
		return new RegExp(obj.source, obj.flags) as T
	}

	// Handle Map
	if (obj instanceof Map) {
		const newMap = new Map()
		obj.forEach((value, key) => {
			newMap.set(deepClone(key), deepClone(value))
		})
		return newMap as T
	}

	// Handle Set
	if (obj instanceof Set) {
		const newSet = new Set()
		obj.forEach(value => {
			newSet.add(deepClone(value))
		})
		return newSet as T
	}

	// Handle plain objects
	if (typeof obj === 'object') {
		const clonedObj = {} as T
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				clonedObj[key] = deepClone(obj[key])
			}
		}
		return clonedObj
	}

	return obj
}

/**
 * Calculate pagination
 */
export function paginate(array: any[], pageSize?: number, pageNumber?: number) {
	const totalItems = array.length
	const totalPages = Math.ceil(totalItems / pageSize)

	if (!pageSize) {
		pageSize = totalItems
	}

	if (!pageNumber) { // No pageNumber passed: return 2D pagination array
		const pages = []
		for (let i = 0; i < totalItems; i += pageSize) {
			pages.push(array.slice(i, i + pageSize))
		}
		return {
			pages, // 2D array
			totalPages, // Total pages
			totalItems // Total items
		}
	}

	const currentPage = Math.max(1, Math.min(pageNumber, totalPages)) // Current page number (boundary limited)
	const start = (currentPage - 1) * pageSize // Start index
	const end = start + pageSize // End index

	const items = array.slice(start, end)

	return {
		items, // Current page data
		currentPage, // Current page number
		totalPages, // Total pages
		totalItems, // Total items
		hasPrev: currentPage > 1, // Has previous page
		hasNext: currentPage < totalPages // Has next page
	}
}
