<script setup lang="ts">
import { gameList } from './data'
import Marquee from './modules/marquee/index.vue'
import GameWarp from '~/widgets/gameWarp/index.vue'
import Banner from './modules/banner/index.vue'
import PwaBar from './modules/pwaBar/index.vue'
import NavBar from './modules/navBar/index.vue'

defineOptions({
	name: 'HomePage'
})

definePageMeta({
	layout: 'main',
	keepalive: true
})

const gameStore = useGameStore()

const homeHotList = computed(() => gameStore.homeHotList) // 首页热门游戏列表
const homePlatformList = computed(() => { // 首页平台列表
	const platformList = [...gameStore.homePlatformList]

	platformList.unshift({
		id: 0,
		name: 'POPULAR',
		code: 'POPULAR',
		status: 'ON',
		openType: true,
		type: 'sort',
		sort: 12,
	})

	return platformList
})

const active = ref(0)

// 使用 computed 缓存每个平台的游戏列表
const platformGamesMap = computed(() => {
	const map = new Map<number, any[]>()

	// 预处理所有平台的游戏列表
	homePlatformList.value.forEach(platform => {
		if (platform.id === 0) {
			map.set(0, homeHotList.value)
		} else {
			const list = gameList.filter(item => item.gameList[0]?.platformId === platform.id)
			let result = []
			if (list.length > 1) {
				list.forEach(item => {
					result.push(...item.gameList)
				})
			} else if (list.length === 1) {
				result = list[0].gameList
			}
			map.set(platform.id, result)
		}
	})

	return map
})

const getGameListByPlatform = (platformId: number) => {
	return platformGamesMap.value.get(platformId) || []
}
</script>

<template>
  <div class="home-page">
		<ClientOnly>
			<header>
				<PwaBar />
				<NavBar />
			</header>

			<main class="main-warp">
				<Banner />
				<Marquee />

				<van-tabs class="segment-tabs" v-model:active="active" scrollspy sticky>
					<van-tab class="segment-pane" v-for="platform of homePlatformList" :key="platform.id">
						<template #title>
							<div class="segment-tab">
								<SvgIcon class="segment-tab-icon" :url="platform.logo" :type="platform.type" :name="platform.name" />
								<div>{{ platform.name }}</div>
							</div>
						</template>
						<div class="segment-pane-wrap">
							<GameWarp :platform="platform" :list="getGameListByPlatform(platform.id)"/>
						</div>
					</van-tab>
				</van-tabs>
			</main>
		</ClientOnly>
  </div>
</template>

<style scoped lang="less">
.home-page {
	position: relative;
	z-index: 0;

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
