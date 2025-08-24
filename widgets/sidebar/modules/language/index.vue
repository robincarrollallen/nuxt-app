<script setup lang="ts">
import { showLanguage } from '~/widgets/languageDialog/data'
import type { ComponentConfig } from '~/theme/componentConfig'

const appStore = useAppStore() // Application store

const props = defineProps({
	components: {
		type: Array as PropType<ComponentConfig[]>,
		default: () => []
	},
})

const locale = computed(() => appStore.locale) // Current language Code

const currentLanguage = computed(() => getLanguageName(locale.value, locale.value).split(' ')[0]) // Current language Name

</script>

<template>
	<section @click="showLanguage = true">
		<span>
			<Flag :iso="locale.split('-')[1]" class="flag-icon" />
			<span class="language-text">{{ currentLanguage }}</span>
		</span>
		<div>
			<van-icon name="arrow-down" />
		</div>
	</section>

	<component v-for="(item, index) in props.components" :key="index" :is="defineAsyncComponent(item.component)" v-bind="{...item.options, components: item.children, showLanguage: showLanguage}"/>
</template>

<style scoped lang="less">
section {
	display: flex;
	cursor: pointer;
	padding: 0.5rem;
	align-items: center;
	border-radius: 0.75rem;
	border: .5px solid var(--ep-color-border-default);

	>span {
		flex: 1;
		display: flex;
		gap: 0.5rem;

		>span {
			--flag-size: 1rem;
			border-radius: 50%;
		}

		.language-text {
			font-size: 0.625rem;
			font-weight: 700;
		}
	}

	>div {
		display: inline-block;
	}
}
</style>
