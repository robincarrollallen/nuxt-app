import * as clipboard from "clipboard-polyfill"

/**
 * 复制文本
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
 * 深拷贝
 */
export function deepClone<T>(obj: T): T {
	// 处理基本类型和 null
	if (obj === null || typeof obj !== 'object') {
		return obj
	}

	// 处理 Date
	if (obj instanceof Date) {
		return new Date(obj.getTime()) as T
	}

	// 处理 Array
	if (Array.isArray(obj)) {
		return obj.map(item => deepClone(item)) as T
	}

	// 处理 RegExp
	if (obj instanceof RegExp) {
		return new RegExp(obj.source, obj.flags) as T
	}

	// 处理 Map
	if (obj instanceof Map) {
		const newMap = new Map()
		obj.forEach((value, key) => {
			newMap.set(deepClone(key), deepClone(value))
		})
		return newMap as T
	}

	// 处理 Set
	if (obj instanceof Set) {
		const newSet = new Set()
		obj.forEach(value => {
			newSet.add(deepClone(value))
		})
		return newSet as T
	}

	// 处理普通对象
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
 * 计算分页
 */
export function paginate(array: any[], pageSize?: number, pageNumber?: number) {
	const totalItems = array.length
	const totalPages = Math.ceil(totalItems / pageSize)

	if (!pageSize) {
		pageSize = totalItems
	}

	if (!pageNumber) { // 不传 pageNumber：返回二维分页数组
		const pages = []
		for (let i = 0; i < totalItems; i += pageSize) {
			pages.push(array.slice(i, i + pageSize))
		}
		return {
			pages, // 二维数组
			totalPages, // 总页数
			totalItems // 总条数
		}
	}

	const currentPage = Math.max(1, Math.min(pageNumber, totalPages)) // 当前页码(已限制边界)
	const start = (currentPage - 1) * pageSize // 起始索引
	const end = start + pageSize // 结束索引

	const items = array.slice(start, end)

	return {
		items, // 当前页的数据
		currentPage, // 当前页码
		totalPages, // 总页数
		totalItems, // 总条数
		hasPrev: currentPage > 1, // 是否有上一页
		hasNext: currentPage < totalPages // 是否有下一页
	}
}
