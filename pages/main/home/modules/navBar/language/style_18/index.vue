<script setup lang="ts">
import { useNavBarLanguageLogic } from '../logic'

const { showPopover, langList, fontSize, locale, changeLanguage } = useNavBarLanguageLogic()
</script>

<template>
	<van-popover v-model:show="showPopover" :show-arrow="false" placement="bottom-end" trigger="click" overlay :offset="[fontSize * .5, fontSize]" :overlay-style="{background: 'transparent'}">
		<div class="change-language-wrap">
			<div v-for="lang in langList" :key="lang" class="change-language-item" :class="{'active': locale.toString() == lang}" @click="changeLanguage(lang)">
				<Flag :iso="lang.split('-')[1]" class="flag-icon" />
				<span class="change-language-item-name">
					{{ getLanguageName(lang, locale) }}
				</span>
			</div>
		</div>
		<template #reference>
			<SvgIcon url="~/assets/svg/earth.svg" class="earth-svg" v-bind="$attrs"/>
		</template>
	</van-popover>
</template>

<style scoped lang="less">
.earth-svg {
	width: 1.5rem;
	height: 1.5rem;
	cursor: pointer;
}

.change-language-wrap {
	width: max-content;
	color: var(--ep-color-text-default);

	.change-language-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: rgba(20, 24, 37, 1);

		&.active {
			background: #1b202f;
		}

		.flag-icon {
			border-radius: 50%;
		}
	}
}
</style>
