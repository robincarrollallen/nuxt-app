<script setup lang="ts">
import type { ComponentConfig } from '@/theme/componentConfig'

defineOptions({
	name: 'SideBar'
})

const props = defineProps({
	components: {
		type: Array as PropType<ComponentConfig[]>,
		default: () => []
	},
})
</script>

<template>
	<aside>
		<component v-for="(item, index) in props.components" :key="index" :is="defineAsyncComponent(item.component)" v-bind="{...item.options, components: item.children}"/>
	</aside>
</template>

<style scoped lang="less">
aside {
	gap: 1rem;
  width: 20rem;
	height: 100%;
  padding: 1rem;
	display: flex;
	flex-direction: column;
	color: var(--ep-color-text-default);
  background-color: var(--ep-color-background-fill-body-default);
}

@media (min-width: 540px) and (max-width: 1023px) {
  aside {
    width: 8rem;
    height: 100%;
		padding: .5rem;

		.close-icon {
			display: none;
		}

		.login-btn-wrap {
			display: grid;
		}

    .language-option-wrap {
      .language-content {
        justify-content: center;
      }

      .language-btn {
        display: none;
      }
    }

		.activity-recommend-wrap {
			.activity-recommend-list {
				.activity-recommend-item {
					&:nth-child(even) {
						display: none;
					}
				}
			}
		}
  }
}

@media (min-width: 1024px) {
	aside {
		.close-icon {
			display: none;
		}

		.login-btn-wrap {
			display: grid;
		}
	}
}
</style>
