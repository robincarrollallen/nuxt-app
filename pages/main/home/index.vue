<script setup lang="ts">
import { getComponentConfig } from '~/theme/componentConfig'
import Sidebar from '~/widgets/sidebar/index.vue'
import type { ThemeType } from '~/theme'

const tenantStore = useTenantStore()
const statusStore = useStatusStore()

defineOptions({
	name: 'HomePage'
})

definePageMeta({
	layout: 'main',
	keepalive: true
})

const homeHeaderComponent = computed(() => getComponentConfig(tenantStore.tenantInfo.skinTwoType as ThemeType, 'HomeHeaderComponent')) // 首页头部组件配置
const homeContentComponent = computed(() => getComponentConfig(tenantStore.tenantInfo.skinTwoType as ThemeType, 'HomeContentComponent')) // 首页内容组件配置

</script>

<template>
  <div class="home-page">
		<header>
			<component v-for="(item, index) in homeHeaderComponent.children" :key="index" :is="defineAsyncComponent(item.component)" v-bind="{...item.options, components: item.children}"/>
		</header>

		<main class="main-warp">
			<component v-for="(item, index) in homeContentComponent.children" :key="index" :is="defineAsyncComponent(item.component)" v-bind="{...item.options, components: item.children}"/>
		</main>

		<!-- 左侧抽屉 -->
		<ClientOnly>
			<van-popup
				round
				position="left"
				teleport="#__main"
				overlay-class="sidebar-overlay"
				v-model:show="statusStore.showMainLeftDrawer"
				:style="{ height: '100%' }"
			>
				<Sidebar/>
			</van-popup>
		</ClientOnly>
  </div>
</template>

<style scoped lang="less">
.home-page {
	height: 100%;
	position: relative;
	z-index: 0;
	display: flex;
	flex-direction: column;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 6.25rem;
		z-index: -1;
		width: 4.0625rem;
		height: 15rem;
		transform: rotate(-57.248deg);
		background: var(--ep-color-background-fill-glow-primary-opacity-40);
		filter: blur(4.375rem);
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		z-index: -1;
		width: 6.3125rem;
		height: 10.8125rem;
		transform: rotate(-39.331deg);
		background: var(--ep-color-background-fill-unusual-primary-opacity-40);
		filter: blur(3rem);
	}

	.main-warp {
		display: grid;
		grid-template-columns: 100%;
		gap: 1rem;
		padding: .5rem 1rem 0;
		flex: 1;
		overflow: hidden auto;

		.segment-tabs {

			:deep(.van-sticky) {
				background: var(--ep-color-background-fill-body-default);

				.van-tabs__wrap {
					--van-tabs-line-height: 4rem;

					.van-tabs__nav.van-tabs__nav--line.van-tabs__nav--complete {
						background: url('~/assets/images/bgTrapezoid.png') no-repeat;
						background-size: 100% 50%;
						background-position: center 80%;
						padding: 0 0 .5rem 0;

						.van-tabs__line {
							background: var(--ep-color-icon-success);
							bottom: .5rem;
						}

						.segment-tab {
							font-size: .75rem;
							text-align: center;

							.segment-tab-icon {
								width: 2.5rem;
								height: 2.5rem;
							}
						}

						.van-tab--active {
							.segment-tab {
								color: var(--ep-color-text-default);

								.segment-tab-icon {
									color: var(--ep-color-icon-danger);
								}
							}
						}
					}
				}
			}

			:deep(.van-tabs__content) {
				.segment-pane {
					padding: .5rem 0 0;

					.segment-pane-wrap {
						border: none;
					}
				}
			}
		}
	}
}

</style>
