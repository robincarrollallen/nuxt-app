<script setup lang="ts">
import { useAgentStore } from '~/stores/agent'
import TeamLevel from './modules/teamLevel/index.vue'

defineOptions({
	name: 'InvitePage'
})

const agentStore = useAgentStore()

</script>

<template>
	<div class="about-page">
		<ClientOnly>
			<NavigateBar title="My Team" left-arrow/>
			<main class="main-container">
				<!-- My Team -->
				<TeamLevel />
			</main>
		</ClientOnly>
	</div>
</template>

<style lang="less" scoped>
@import '~/assets/css/variables.less';

.about-page {
  height: 100%;
	display: flex;
	flex-direction: column;

	.main-container {
		flex: 1;
		padding: 1rem 0;

		.share-card {
			background: var(--ep-color-background-fill-surface-raised-L1);
			border-radius: .5rem;
			padding: 1rem;

			.share-url-warp {
				display: flex;
				align-items: center;
				justify-content: center;
				padding-bottom: .75rem;
				border-bottom: 1px solid var(--ep-color-border-default);

				.url-title {
					font-weight: 500;
				}

				.url-link {
					@text-ellipsis();
					color: var(--ep-color-text-brand-primary);
					flex: 1;
				}

				.copy-icon {
					zoom: 0.9;
				}
			}

			.quick-share-warp {
				padding: 1rem 0;
				border-bottom: 1px solid var(--ep-color-border-default);

				.share-tabs {
					--van-tab-active-text-color: var(--ep-color-text-brand-primary);
					--van-tab-text-color: var(--ep-color-text-navigation-default);
					--van-tabs-nav-background: transparent;
					padding-top: 0.5rem;

					:deep(.van-tabs__nav.van-tabs__nav--line.van-tabs__nav--complete) {
						--van-tabs-bottom-bar-height: 0;
						padding: 0;
						gap: 0.5rem;

						.van-tab.van-tab--line.van-tab--grow {
							padding: 0;

							.share-icon {
								width: 2rem;
								height: 2rem;
							}
						}
					}
				}
			}

			.details-warp {
				display: flex;
				align-items: center;
				padding-top: 1rem;

				.details-content {
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.bet-register-count {
						flex: 1;
						font-size: 0.875rem;

						.count-text {
							color: var(--ep-color-text-success);
						}
					}

					.details-btn {
						color: var(--ep-color-text-brand-primary);
					}
				}
			}
		}
	}
}
</style>
