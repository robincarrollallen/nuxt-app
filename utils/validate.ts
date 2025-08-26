/**
 * Check if a value is empty
 * @param value - The value to check
 */
export function isEmpty(value: any) {
	// null or undefined
	if (value == null) return true

	// string
	if (typeof value === 'string') return value.trim().length === 0

	// array
	if (Array.isArray(value)) return value.length === 0

	// object
	if (typeof value === 'object') {
		// Map or Set
		if (value instanceof Map || value instanceof Set) return value.size === 0
		// plain object
		return Object.keys(value).length === 0
	}

	// number (0 is not considered empty, but NaN is)
	if (typeof value === 'number') return Number.isNaN(value)

	return false
}
