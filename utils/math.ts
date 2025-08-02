// Create a responsive NumberFormat instance
const numberFormatter = computed(() => {
	const locale = useAppStore().locale
	return new Intl.NumberFormat(locale, { useGrouping: true })
})

/**
 * Format number to thousands and truncate decimals
 * @param {number|string} value The number to be formatted
 * @param {number} decimals The number of decimal places, default 2
 * @returns {string} The formatted string
 */
export const formatMoney = (value: number | string, decimals: number = 2): string => {
	if (value === null || value === undefined || value === '') return '0'

	let num = Number(value)
	if (isNaN(num)) return '0'

	// Handle negative number symbol
	const sign = num < 0 ? '-' : ''
	num = Math.abs(num)

	// Truncate decimals, not rounding
	const factor = Math.pow(10, decimals)
	num = Math.trunc(num * factor) / factor

	// Split integer and decimal
	let [intPart, decimalPart = ''] = num.toString().split('.')

	// Format integer part with Intl.NumberFormat
	intPart = numberFormatter.value.format(Number(intPart))

	// Handle decimal part
	if (decimals > 0) {
		decimalPart = (decimalPart + '0'.repeat(decimals)).slice(0, decimals)
		return `${sign}${intPart}.${decimalPart}`
	} else {
		return `${sign}${intPart}`
	}
}

/**
 * Format server amount to local
 * @param {number|string} value The number to be formatted
 * @param {number} multiple Multiple, default 100
 * @returns {string} The formatted string
 */
export const formatMoneyToLocal = (value: number | string, multiple: number = 100): string => {
	return formatMoney(Number(value) / multiple)
}
