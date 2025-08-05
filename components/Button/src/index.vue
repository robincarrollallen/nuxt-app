<script setup>
import { ref } from 'vue'

const buttonRef = ref(null)
const rippleRef = ref(null)
let isPressed = false

function startRipple(event) {
	const ripple = rippleRef.value
	if (!ripple) return

	isPressed = true

	// Calculate ripple position
	const rect = buttonRef.value.getBoundingClientRect()
	const size = Math.max(rect.width, rect.height)

	// Get touch/click position
	const clientX = event.touches ? event.touches[0].clientX : event.clientX
	const clientY = event.touches ? event.touches[0].clientY : event.clientY

	const x = clientX - rect.left - size / 2
	const y = clientY - rect.top - size / 2

	// Set ripple style
	ripple.style.left = x + 'px'
	ripple.style.top = y + 'px'
	ripple.style.width = size + 'px'
	ripple.style.height = size + 'px'

	// Start animation
	ripple.style.transform = 'scale(0)'
	ripple.style.opacity = '1'

	// Force redraw and start diffusion animation
	ripple.offsetHeight
	ripple.style.transition = 'transform 0.3s ease-out'
	ripple.style.transform = 'scale(2)'
}

function endRipple() {
	if (!isPressed) return

	isPressed = false
	const ripple = rippleRef.value
	if (!ripple) return

	// Cancel ripple animation
	ripple.style.transition = 'opacity 0.2s ease-out'
	ripple.style.opacity = '0'

	// After animation, reset
	setTimeout(() => {
		ripple.style.transform = 'scale(0)'
		ripple.style.transition = 'none'
	}, 200)
}
</script>

<template>
  <button
    ref="buttonRef"
    @mousedown="startRipple"
    @mouseup="endRipple"
    @mouseleave="endRipple"
    @touchstart.passive="startRipple"
    @touchend="endRipple"
    @touchcancel="endRipple"
  >
    <span
      ref="rippleRef"
    />
    <slot />
  </button>
</template>

<style lang="less" scoped>
button {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius, 0.5rem);
	padding-inline-start: 1rem;
	padding-inline-end: 1rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
  cursor: pointer;
  background-color: var(--background, #007aff);
  display: flex;
  align-items: center;
  justify-content: center;
}

span {
  position: absolute;
  border-radius: 50%;
  background: var(--ripple-color, rgba(255, 255, 255, 0.3));
  transform: scale(0);
  opacity: 0;
  pointer-events: none;
  z-index: 1;
}
</style>
