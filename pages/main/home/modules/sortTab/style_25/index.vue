<script setup lang="ts">
import { Assets } from '~/theme/assets'
import { useSortTabLogic } from '../logic'
import GameWarp from '@/widgets/gameWarp/index.vue'

const props = defineProps({
	getCategoryIconStyle: {
		type: Function,
		default: () => (() => {}),
	},
})

const { active, homeHotList, homePlatformList, tabsOffsetTop, getGameListByPlatform, homeList, isGameCategory } = useSortTabLogic(props)

console.log('>>>>>>>>>>>>>>', homeList)
</script>

<template>
	<van-tabs v-if="isGameCategory" class="segment-tabs" v-model:active="active" animated sticky :offset-top="tabsOffsetTop">
		<van-tab class="segment-pane" v-for="gameCategory of homeList" :key="gameCategory.id">
			<template #title>
				<div class="segment-tab" :style="{ backgroundImage: `url(${Assets.bg_game_category_25[gameCategory.code]})` }">
					<p class="segment-tab-icon" :style="gameCategory.iconStyle" />
					<div>{{ gameCategory.name }}</div>
				</div>
			</template>
			<div class="segment-pane-wrap">
				<GameWarp :platform="gameCategory" :list="homeHotList" v-if="gameCategory.id === 'POPULAR'"/>
				<GameWarp :platform="gameCategory" :list="getGameListByPlatform(gameCategory.id)" v-else/>
			</div>
		</van-tab>
	</van-tabs>
	<van-tabs v-else class="segment-tabs" v-model:active="active" scrollspy sticky :offset-top="tabsOffsetTop">
		<van-tab class="segment-pane" v-for="platform of homePlatformList" :key="platform.id">
			<template #title>
				<div class="segment-tab">
					<SvgIcon class="segment-tab-icon" :url="platform.logo" />
					<div>{{ platform.name }}</div>
				</div>
			</template>
			<div class="segment-pane-wrap">
				<GameWarp :platform="platform" :list="homeHotList" v-if="platform.id === 0"/>
				<GameWarp :platform="platform" :list="getGameListByPlatform(platform.id)" v-else/>
			</div>
		</van-tab>
	</van-tabs>
</template>

<style scoped lang="less">
.segment-tabs {

	:deep(.van-sticky) {
		background: var(--ep-color-background-fill-body-default);

		.van-tabs__wrap {
			--van-tabs-line-height: 5rem;

			.van-tabs__nav.van-tabs__nav--line.van-tabs__nav--complete {
				--van-padding-sm: 0;
				background: transparent;
				background-size: 100% 50%;
				background-position: center 80%;
				padding: 0 0 .5rem 0;
				gap: .5rem;

				.van-tabs__line {
					display: none;
					background: var(--ep-color-icon-success);
					bottom: .5rem;
				}

				.segment-tab {
					width: 5rem;
					aspect-ratio: 1;
					font-size: .75rem;
					text-align: center;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					background-size: 100% 100%;
					color: var(--ep-color-text-default);

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
</style>
