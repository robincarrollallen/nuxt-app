<script setup lang="ts">
const props = defineProps({
	loadImage: {
		type: Object,
		default: () => ({}),
	},
	layoutType: {
		type: String,
		default: 'layout1',
	},
})

const basicAvatar = '/svg/user-defluat-avatar.svg'

const userStore = useUserStore()

const userPhoto = computed(() => userStore.user?.avatar || userStore.defaultAvatar || basicAvatar)
</script>

<template>
	<div v-if="userStore.user?.userId" class="log-in-box" :class="[props.layoutType]">
		<ProgressiveImages
			class="account-icon"
			:src="userPhoto"
		/>
	</div>
	<div v-else-if="!isEmpty(props.loadImage)" class="log-out-box">
		<van-image class="log-out-icon" :src="basicAvatar" :show-loading="false" />
		<label>
			Welcome
		</label>
	</div>
</template>

<style scoped lang="less">
.log-out-box {
	gap: .5rem;
	display: flex;
	align-items: center;

	.log-out-icon {
		padding: 0.5rem;
		width: 1.125rem;
		height: 1.125rem;
		border-radius: 43%;
		background: var(--ep-dynamic-primary);
		box-shadow: 4px 0px 11px 0px var(--ep-color-background-fill-glow-primary-opacity-40);
	}

	label {
		font-size: var(--label-font-size, 1rem);
		font-weight: var(--label-font-weight, 600);
	}
}
</style>
