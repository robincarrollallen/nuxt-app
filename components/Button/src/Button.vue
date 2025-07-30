<script setup>
import { ref } from 'vue'

const buttonRef = ref(null)
const rippleRef = ref(null)
let isPressed = false

function startRipple(event) {
	const ripple = rippleRef.value
	if (!ripple) return

	isPressed = true

	// 计算涟漪位置
	const rect = buttonRef.value.getBoundingClientRect()
	const size = Math.max(rect.width, rect.height)

	// 获取触摸/点击位置
	const clientX = event.touches ? event.touches[0].clientX : event.clientX
	const clientY = event.touches ? event.touches[0].clientY : event.clientY

	const x = clientX - rect.left - size / 2
	const y = clientY - rect.top - size / 2

	// 设置涟漪样式
	ripple.style.left = x + 'px'
	ripple.style.top = y + 'px'
	ripple.style.width = size + 'px'
	ripple.style.height = size + 'px'

	// 开始动画
	ripple.style.transform = 'scale(0)'
	ripple.style.opacity = '1'

	// 强制重绘后开始扩散动画
	ripple.offsetHeight
	ripple.style.transition = 'transform 0.3s ease-out'
	ripple.style.transform = 'scale(2)'
}

function endRipple() {
	if (!isPressed) return

	isPressed = false
	const ripple = rippleRef.value
	if (!ripple) return

	// 取消涟漪动画
	ripple.style.transition = 'opacity 0.2s ease-out'
	ripple.style.opacity = '0'

	// 动画结束后重置
	setTimeout(() => {
		ripple.style.transform = 'scale(0)'
		ripple.style.transition = 'none'
	}, 200)
}
</script>

<template>
  <button
    ref="buttonRef"
    class="ripple-button"
    @mousedown="startRipple"
    @mouseup="endRipple"
    @mouseleave="endRipple"
    @touchstart.passive="startRipple"
    @touchend="endRipple"
    @touchcancel="endRipple"
  >
    <span
      ref="rippleRef"
      class="ripple-span"
    />
    <slot />
  </button>
</template>

<style>
.ripple-button {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007aff;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ripple-span {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  opacity: 0;
  pointer-events: none;
  z-index: 1;
}
</style>
