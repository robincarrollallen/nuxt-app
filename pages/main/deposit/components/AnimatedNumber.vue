<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
	value: {
		type: Number, // 传入显示值
		required: true
	},
	duration: {
		type: Number,
		default: 1000 // 动画持续时间，毫秒
	},
	decimals: {
		type: Number,
		default: 0 // 小数位数
	}
})

let animationFrameId = null // 用于存储 requestAnimationFrame 的 ID，方便取消

const displayValue = ref(props.value) // 组件内部用于显示的响应式数值

const formattedDisplayValue = computed(() => displayValue.value.toFixed(props.decimals))

/**
 * 启动数字动画
 * @param {number} startVal - 动画起始值
 * @param {number} endVal - 动画目标值
 * @param {number} duration - 动画持续时间（毫秒）
 */
const animateValue = (startVal, endVal, duration) => {
	const startTime = performance.now() // 动画开始时间

	const step = (currentTime) => {
		const elapsedTime = currentTime - startTime // 已经过去的时间
		const progress = Math.min(elapsedTime / duration, 1) // 动画进度 (0到1之间, 确保不会超过)

		// 根据进度计算当前应该显示的值
		const currentValue = startVal + (endVal - startVal) * progress
		displayValue.value = currentValue

		// 如果动画未结束，继续下一帧
		if (progress < 1) {
			animationFrameId = requestAnimationFrame(step)
		} else {
			// 动画结束时确保显示最终值
			displayValue.value = endVal
		}
	}

	// 如果之前有动画正在进行，先取消它
	if (animationFrameId) {
		cancelAnimationFrame(animationFrameId)
	}
	// 启动动画
	animationFrameId = requestAnimationFrame(step)
}

// 监听 value prop 的变化，触发动画
watch(() => props.value, (newValue, oldValue) => {
	animateValue(oldValue === undefined ? props.value : oldValue, newValue, props.duration)
}, { immediate: true })

// 组件挂载时如果需要从0开始动画到初始值，这里可以处理
onMounted(() => {
	if (props.value !== 0) { // 首次渲染时，如果 value 不是初始值（例如0），则从0开始动画, 否则，直接显示 value
		animateValue(0, props.value, props.duration)
	}
})

// 在组件卸载时清理动画帧，避免内存泄漏
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
