<script setup lang="ts">
import { computed } from 'vue'

interface Props {
	content: {
		name: string
		content: string
	}[]
}

const props = defineProps<Props>()

const animationDuration = computed(() => { // Calculate animation duration
	const timePerChar = 0.2 // Assume each character takes 0.2 seconds
	let totalChars = props.content.reduce((total, item) => total + item.content.length + 32, 0) // Calculate total character count of all content
	return totalChars * timePerChar // Return animation duration
})

// Click marquee content
async function marqueeHandle() {

}
</script>

<template>
	<div class="marquee__wrap">
		<div class="marquee__content" :style="`--animation-duration: ${animationDuration}s`">
			<label class="marquee__item" v-for="item in content" :key="item.name" @click="marqueeHandle">{{item.content}}</label>
	</div>
 </div>
</template>

<style>
.marquee__wrap { /* Marquee container */
	width: 100%;
	overflow: hidden;
}

.marquee__content { /* Marquee content */
	width: max-content;
	display: flex;
	animation: marquee var(--animation-duration) linear infinite;
}

.marquee__item { /* Marquee item */
	white-space: nowrap;
	margin-right: 24.375rem;
}

@keyframes marquee { /* Marquee animation */
0% {
		transform: translate3d(24.375rem, 0 , 0);
	}
100% {
		transform: translate3d(calc(24.375rem - 100%), 0 , 0);
	}
}
</style>
