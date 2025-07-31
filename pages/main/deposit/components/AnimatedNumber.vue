<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
	value: {
		type: Number, // Input display value
		required: true
	},
	duration: {
		type: Number,
		default: 1000 // Animation duration in milliseconds
	},
	decimals: {
		type: Number,
		default: 0 // Number of decimal places
	}
})

let animationFrameId = null // Store requestAnimationFrame ID for cancellation

const displayValue = ref(props.value) // Internal reactive value for display

const formattedDisplayValue = computed(() => displayValue.value.toFixed(props.decimals))

/**
 * Start number animation
 * @param {number} startVal - Animation start value
 * @param {number} endVal - Animation target value
 * @param {number} duration - Animation duration (milliseconds)
 */
const animateValue = (startVal, endVal, duration) => {
	const startTime = performance.now() // Animation start time

	const step = (currentTime) => {
		const elapsedTime = currentTime - startTime // Elapsed time
		const progress = Math.min(elapsedTime / duration, 1) // Animation progress (0 to 1, ensure no overflow)

		// Calculate current value to display based on progress
		const currentValue = startVal + (endVal - startVal) * progress
		displayValue.value = currentValue

		// If animation not finished, continue next frame
		if (progress < 1) {
			animationFrameId = requestAnimationFrame(step)
		} else {
			// Ensure final value is displayed when animation ends
			displayValue.value = endVal
		}
	}

	// If previous animation is running, cancel it first
	if (animationFrameId) {
		cancelAnimationFrame(animationFrameId)
	}
	// Start animation
	animationFrameId = requestAnimationFrame(step)
}

// Listen for value prop changes and trigger animation
watch(() => props.value, (newValue, oldValue) => {
	animateValue(oldValue === undefined ? props.value : oldValue, newValue, props.duration)
}, { immediate: true })

// Handle animation from 0 to initial value on component mount if needed
onMounted(() => {
	if (props.value !== 0) { // On first render, if value is not initial (e.g., 0), animate from 0, otherwise display value directly
		animateValue(0, props.value, props.duration)
	}
})

// Clean up animation frame on component unmount to avoid memory leaks
onUnmounted(() => {
	if (animationFrameId) {
		cancelAnimationFrame(animationFrameId)
	}
})
</script>

<template>
  <span>{{ formattedDisplayValue }}</span>
</template>

<style lang="less" scoped>
span {
	white-space: nowrap;
}
</style>
