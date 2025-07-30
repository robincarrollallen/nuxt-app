/**
 * 格式化数字为千分位并截断小数
 * @param {number|string} value 需要格式化的数字
 * @param {number} decimals 小数位数，默认 2
 * @returns {string} 格式化后的字符串
 */
const formatMoney = (value: number | string, decimals: number = 2): string => {
	if (value === null || value === undefined || value === '') return '0'

	let num = Number(value)
	if (isNaN(num)) return '0'

	// 处理负数的符号
	const sign = num < 0 ? '-' : ''
	num = Math.abs(num)

	// 截断小数，不四舍五入
	const factor = Math.pow(10, decimals)
	num = Math.trunc(num * factor) / factor

	// 拆分整数和小数
	let [intPart, decimalPart = ''] = num.toString().split('.')

	// 用 Intl.NumberFormat 格式化整数部分
	intPart = new Intl.NumberFormat('en-US', { useGrouping: true }).format(Number(intPart))

	// 处理小数部分
	if (decimals > 0) {
		decimalPart = (decimalPart + '0'.repeat(decimals)).slice(0, decimals)
		return `${sign}${intPart}.${decimalPart}`
	} else {
		return `${sign}${intPart}`
	}
}

/**
 * 格式化服务器金额为本地
 * @param {number|string} value 需要格式化的数字
 * @param {number} multiple 倍数，默认100
 * @returns {string} 格式化后的字符串
 */
export const formatMoneyToLocal = (value: number | string, multiple: number = 100): string => {
	return formatMoney(Number(value) / multiple)
}
