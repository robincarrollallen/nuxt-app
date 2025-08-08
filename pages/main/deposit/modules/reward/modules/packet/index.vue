<script setup lang="ts">
const props = defineProps<{
	rewardList: Record<string, any>
}>()
</script>

<template>
	<div class="agent-reward-list-content">
		<div class="agent-reward-list-item" v-for="item in props.rewardList" :key="item.uuid">
			<div class="agent-reward-list-icon">
				<img src="~/assets/icons/activity/agent/red-package.png" />
			</div>
			<div class="agent-reward-list-amount">
				{{ item.rewardAmount }}
			</div>
			<div class="agent-reward-list-condition">
				<div>
					{{ $t('activity.agent9') }}
					<span>{{ item.userCount }}</span>
					{{ $t('activity.agent7') }}
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.agent-reward-list-content {
	width: calc(100% + 1.5rem);
	margin-left: -.75rem;
	background-image: url('~/assets/svg/bg-agent-reward-stage.svg');
	background-repeat: repeat-y;
	background-size: 100% 8.25rem;
	background-position: top left;
	display: grid;
	padding: 0 .75rem;
	grid-template-columns: repeat(4, 1fr);
	gap: 2.25rem 0;

	.agent-reward-list-item {
		color: var(--ep-color-text-weak);
		font-size: .625rem;
		padding: 0 .375rem;
		margin-top: -1.875rem;

		.agent-reward-list-icon {
			width: 100%;
			height: 4.5rem;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			padding: 0 1rem .5rem;
			position: relative;
			z-index: 1;

			&::after {
				content: "";
				position: absolute;
				top: 88%;
				width: 40%;
				aspect-ratio: 7/1;
				background: rgba(0, 0, 0, 0.4);
				border-radius: 50%;
				filter: blur(.1rem);
				z-index: -1;
			}

			&::before {
				z-index: -1;
				content: "";
				position: absolute;
				bottom: -45%;
				width: 175%;
				aspect-ratio: 1/1;
				background-image: url('~/assets/icons/activity/agent/bg-light-reward.png');
				background-size: 100% 100%;
				animation: spin 5s linear infinite;
			}

			img {
				width: 100%;
			}
		}

		.agent-reward-list-amount {
			width: 100%;
			line-height: 1.5rem;
			background-image: url('~/assets/icons/activity/agent/bg-amount.png');
			background-size: 100% auto;
			background-repeat: no-repeat;
			background-position: 0 0;
		}

		.agent-reward-list-condition {

			span {
				color: var(--ep-color-text-success);
			}
		}
	}
}
</style>
