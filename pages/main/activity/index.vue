<script setup>
defineOptions({
	name: 'ActivityPage'
})

// Use main layout
definePageMeta({
	layout: 'main'
})
</script>

<template>
  <div class="activity-page">
    <ClientOnly>
			<van-tabs>
				<van-tab :title="$t('activity.events')"></van-tab>
			</van-tabs>
		</ClientOnly>
  </div>
</template>

<style lang="less" scoped>
.activity-page {
	height: 100%;
	display: flex;
	flex-direction: column;

	.van-tabs {
		flex: 1;
		height: 0;
		display: flex;
		flex-direction: column;
		--van-tabs-bottom-bar-height: 2px;
		--van-tab-active-text-color: var(--ep-agent-color-highlight-primary, var(--ep-color-text-selected));
		--van-tabs-nav-background: var(--ep-color-background-fill-surface-lowered);

		:deep(.van-tabs__content) {
			flex: 1;
			height: 0;
			overflow: hidden;

			.van-tab__panel {
				height: 100%;
			}
		}
	}
}
</style>
