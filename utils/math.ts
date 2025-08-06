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

/**
 * Safely convert to number
 * @param value - The value to convert
 * @param defaultValue - Default value, defaults to 0
 */
export function safeNumber(value: number | string, defaultValue = 0) {
	const num = Number(value)
	return Number.isNaN(num) || num === 0 ? defaultValue : num
}

/**
 * Safely convert to positive number
 * @param value - The value to convert
 * @param isPositive - Whether to convert to positive number, defaults to false (negative numbers become 0)
 */
export function safePositiveNumber(value: number | string, isPositive = false) {
	const num = safeNumber(value)

	if (num < 0) {
		return isPositive ? Math.abs(num) : 0
	}

	return num
}

/**
 * Truncate number to specified decimal places (no rounding)
 * @param {string|number} value - The value to process
 * @param {number} digits - Number of decimal places
 * @param {boolean} padZero - Whether to pad with zeros, defaults to false
 */
export function truncateDecimal(value: string | number, digits = 2, padZero = false) {
	const str = String(safeNumber(value)) // Convert to string

	const dotIndex = str.indexOf('.') // Find decimal point position

	// If there's no decimal point
	if (dotIndex === -1) {
		// If padding with zeros is needed, add decimal point and zeros
		if (padZero) {
			return `${str}.${'0'.repeat(digits)}`
		}
		return str
	}

	const truncated = str.substring(0, dotIndex + digits + 1) // Truncate to specified decimal places

	// If padding with zeros is needed
	if (padZero) {
		const currentDecimalDigits = truncated.length - dotIndex - 1 // Calculate current decimal places

		// If decimal places are insufficient, pad with zeros
		if (currentDecimalDigits < digits) {
			return `${truncated}${'0'.repeat(digits - currentDecimalDigits)}`
		}
	}

	return truncated
}

/**
 * Fixed number to specified decimal places (no rounding)
 * @param {string|number} value - The value to process
 * @param {number} digits - Number of decimal places
 */
export function fixedNumber(value?: string | number, digits = 2) {
	const num = safeNumber(value)

	const str = num.toFixed(digits + 1)

	const [intPart, decimalPart] = str.split('.')

	return `${intPart}.${decimalPart.slice(0, digits)}`
}
