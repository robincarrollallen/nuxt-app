<script setup lang="ts">
defineOptions({
	name: 'AgentPage'
})

// Use main layout
definePageMeta({
	layout: 'main'
})

const agentStore = useAgentStore()

const agentMediaList = computed(() => agentStore.shareConfig.software)
</script>

<template>
  <div class="agent-page">
    <ClientOnly>
			<div class="agent-poster">
				<!-- <div class="agent-poster-gift" /> -->
				<div class="agent-poster-treasure" />
			</div>
			<div class="agent-content">
				<div class="agent-content-wrap">
					<div class="agent-media">
						<div class="agent-media-title">
							<span>{{ $t('activity.agent2') }}</span>
						</div>
						<div class="agent-media-link">
							<van-tabs class="share-tabs">
								<van-tab v-for="item in agentStore.shareConfig?.software" :key="item.name">
									<template #title><SvgIcon class="share-icon" :url="`~/assets/svg/share/first/${item.name.toLowerCase()}.svg`" /></template>
								</van-tab>
							</van-tabs>
							<div class="share-url-warp">
								<div class="url-title">Invite link ：</div>
								<div class="url-link">https://tg3-gray.7-v-s-8.com/?pid=575718350</div>
								<SvgIcon url="~/assets/svg/copy.svg" class="copy-icon" @click="copy('https://tg3-gray.7-v-s-8.com/?pid=575718350')"/>
							</div>
							<div class="details-warp">
								<div class="details-content">
									<div class="bet-register-count">
										My direct subordinates
										<span class="count-text">{{ `${0}` }}</span>
										{{ `${$t('Person')} (${$t('Valid')}` }}
										<span class="count-text">{{ `${0} ` }}</span>
										<span class="valid-text">{{ `${$t('Person')})` }}</span>
									</div>
									<Button> {{ `${$t('Details')} >` }}</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ClientOnly>
  </div>
</template>

<style lang="less" scoped>
.agent-page {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;

	.agent-poster {
		width: 100%;
		height: 18.25rem;
		background-image: url('~/assets/images/activity/agent/bg-poster.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-position: center;

		.agent-poster-gift {
			width: 100%;
			height: 100%;
			background-image: url('~/assets/images/activity/agent/gift-poster.png');
			background-size: auto 9.875rem;
			background-repeat: no-repeat;
			background-position: center 7.75rem;
		}

		.agent-poster-treasure {
			width: 100%;
			height: 100%;
			background-image: url('~/assets/images/activity/agent/treasure-poster.png');
			background-size: auto 10rem;
			background-repeat: no-repeat;
			background-position: center 7.75rem;
		}
	}

	.agent-content {
		padding: 0 1.25rem 1.25rem;

		.agent-content-wrap {
			position: relative;
			border: 4px solid #797AF1;
			border-top-width: 0;
			box-shadow: 0px 0px 0px 4px #3852EB;
			padding: 2rem 0 .5rem;
			background: #2A2371;

			&::after {
				content: '';
				position: absolute;
				bottom: -.75rem;
				left: -1rem;
				background-image: url('~/assets/svg/agent-corner.svg');
				background-size: 100% auto;
				background-repeat: no-repeat;
				background-position: center;
				height: 4.75rem;
				width: 2.25rem;
				transform: scaleX(-1);
			}

			&::before {
				content: '';
				position: absolute;
				bottom: -.75rem;
				right: -1rem;
				background-image: url('~/assets/svg/agent-corner.svg');
				background-size: 100% auto;
				background-repeat: no-repeat;
				background-position: center;
				height: 4.75rem;
				width: 2.25rem;
			}

			.agent-media {
				font-size: .75rem;
				position: relative;

				.agent-media-title {
					background-image: url('~/assets/images/activity/agent/bar-title.png');
					background-size: 100% auto;
					background-repeat: no-repeat;
					background-position: 0 0;
					width: 100vw;
					height: 4.5rem;
					position: absolute;
					top: -3.125rem;
					left: -1.4375rem;
					text-align: center;
					font-weight: 700;
					padding-top: .875rem;
					text-shadow:
						-1px -1px 0 #E64021,
						1px -1px 0 #E64021,
						-1px  1px 0 #E64021,
						1px  1px 0 #E64021;
				}

				.agent-media-link {
					width: 100%;
					display: flex;
					flex-direction: column;
					gap: .3125rem;
					padding: 0 .4375rem;

					.agent-media-link-icons {
						width: 100%;
						overflow: auto hidden;
						gap: .625rem;
						display: flex;
						flex-wrap: nowrap;

						.agent-media-link-icon {
							min-width: 2.1875rem;
							min-height: 2.1875rem;
						}
					}

					.share-tabs {
						--van-tabs-nav-background: linear-gradient(90deg, rgba(38, 57, 156, 0) 0%, #3345A3 50%, rgba(38, 57, 156, 0) 100%);
						--van-tabs-line-height: auto;

						:deep(.van-tabs__nav.van-tabs__nav--line.van-tabs__nav--complete) {
							--van-tabs-bottom-bar-height: 0;
							padding: .75rem 0;
							gap: 0.625rem;

							.van-tab.van-tab--line.van-tab--grow {
								padding: 0;

								.share-icon {
									width: 2.1875rem;
									height: 2.1875rem;
								}
							}
						}
					}

					.share-url-warp {
						padding: 0 .25rem;
						display: flex;
						align-items: center;
						justify-content: center;
						background: linear-gradient(90deg, rgba(38, 57, 156, 0) 0%, #3345A3 50%, rgba(38, 57, 156, 0) 100%);

						.url-title {
							font-weight: 500;
						}

						.url-link {
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							color: var(--ep-color-text-brand-primary);
							flex: 1;
						}

						.copy-icon {
							zoom: 0.9;
						}
					}

					.details-warp {
						display: flex;
						margin-top: 1rem;
						padding: .875rem;
						align-items: center;
						border-radius: .25rem;
						background: var(--color-background-fill-glow-primary-opacity-40, #0A77DA66);

						.details-content {
							flex: 1;
							display: flex;
							align-items: center;
							justify-content: space-between;

							.bet-register-count {
								flex: 1;

								.count-text {
									color: var(--ep-color-text-warning);
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
