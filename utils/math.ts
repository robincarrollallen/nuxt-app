/**
 * Format number with thousands separator and truncate decimals
 * @param {number|string} value Number to format
 * @param {number} decimals Number of decimal places, default 2
 * @returns {string} Formatted string
 */
const formatMoney = (value: number | string, decimals: number = 2): string => {
	if (value === null || value === undefined || value === '') return '0'

	let num = Number(value)
	if (isNaN(num)) return '0'

	// Handle negative number sign
	const sign = num < 0 ? '-' : ''
	num = Math.abs(num)

	// Truncate decimals without rounding
	const factor = Math.pow(10, decimals)
	num = Math.trunc(num * factor) / factor

	// Split integer and decimal parts
	let [intPart, decimalPart = ''] = num.toString().split('.')

	// Format integer part with Intl.NumberFormat
	intPart = new Intl.NumberFormat('en-US', { useGrouping: true }).format(Number(intPart))

	// Handle decimal part
	if (decimals > 0) {
		decimalPart = (decimalPart + '0'.repeat(decimals)).slice(0, decimals)
		return `${sign}${intPart}.${decimalPart}`
	} else {
		return `${sign}${intPart}`
	}
}

/**
 * Format server amount to local format
 * @param {number|string} value Number to format
 * @param {number} multiple Multiplier, default 100
 * @returns {string} Formatted string
 */
export const formatMoneyToLocal = (value: number | string, multiple: number = 100): string => {
	return formatMoney(Number(value) / multiple)
}
