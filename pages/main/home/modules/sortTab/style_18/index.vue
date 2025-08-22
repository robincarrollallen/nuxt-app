<script setup lang="ts">
import { useSortTabLogic } from '../logic'
import GameWarp from '~/widgets/gameWarp/index.vue'

const { active, homeHotList, homePlatformList, tabsOffsetTop, getGameListByPlatform } = useSortTabLogic()
</script>

<template>
	<van-tabs class="segment-tabs" v-model:active="active" scrollspy sticky :offset-top="tabsOffsetTop">
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
