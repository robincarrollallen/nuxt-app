<script setup lang="ts">
import { computed } from 'vue'

interface Props {
	content: {
		name: string
		content: string
	}[]
}

const props = defineProps<Props>()

const animationDuration = computed(() => { // 计算动画持续时间
	const timePerChar = 0.2 // 假设每个字符需要0.2秒
	let totalChars = props.content.reduce((total, item) => total + item.content.length + 32, 0) // 计算所有内容的总字符数
	return totalChars * timePerChar // 返回动画持续时间
})

// 点击跑马灯内容
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
.marquee__wrap { /* 跑马灯盒子 */
	width: 100%;
	overflow: hidden;
}

.marquee__content { /* 跑马灯内容 */
	width: max-content;
	display: flex;
	animation: marquee var(--animation-duration) linear infinite;
}

.marquee__item { /* 跑马灯单项 */
	white-space: nowrap;
	margin-right: 24.375rem;
}

@keyframes marquee { /* 跑马灯动画 */
0% {
		transform: translate3d(24.375rem, 0 , 0);
	}
100% {
		transform: translate3d(calc(24.375rem - 100%), 0 , 0);
	}
}
</style>
