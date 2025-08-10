<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import { useStatusStore } from '~/stores/status'
import { useTenantStore } from '~/stores/tenant'
import Sidebar from '~/widgets/sidebar/index.vue'

const appStore = useAppStore()
const statusStore = useStatusStore()
const tenantStore = useTenantStore()
const systemStore = useSystemStore()

const showPopover = ref(false)

const langList = computed(() => tenantStore.tenantInfo.appLanguage)
const tenantInfo = computed(() => tenantStore.tenantInfo)
const fontSize = computed(() => systemStore.fontSize)
const locale = computed(() => appStore.locale)

const changeLanguage = (lang: any) => {
	appStore.setLocale(lang)
	showPopover.value = false
}
</script>

<template>
  <div class="navbar-bar">
		<div class="navbar-wrap">
			<div class="left-wrap">
				<SvgIcon url="~/assets/svg/menu.svg" class="menu-svg" @click="statusStore.setShowMainLeftDrawer(true)" />
				<van-image class="logo" :src="tenantInfo.logo" :show-loading="false" />
			</div>
			<div class="login-btn-wrap">
				<Button class="login-btn">{{ $t('main.login') }}</Button>
				<Button class="register-btn">{{ $t('main.signUp') }}</Button>
				<van-popover v-model:show="showPopover" :show-arrow="false" placement="bottom-end" trigger="click" overlay :offset="[fontSize, fontSize]" :overlay-style="{background: 'transparent'}">
					<div class="change-language-wrap">
						<div v-for="lang in langList" :key="lang" class="change-language-item" :class="{'active': locale.toString() == lang}" @click="changeLanguage(lang)">
							<Flag :iso="lang.split('-')[1]" class="flag-icon" />
							<span class="change-language-item-name">
								{{ getLanguageName(lang, locale) }}
							</span>
						</div>
					</div>
					<template #reference>
						<SvgIcon url="~/assets/svg/earth.svg" class="earth-svg" />
					</template>
				</van-popover>
			</div>
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
	</div>
</template>

<style scoped lang="less">
.navbar-bar {
	width: 100%;
	height: 3.125rem;
	border-style: solid;
	border-width: 0;

	@media (min-width: 540px) {
		display: none;
	}

	.navbar-wrap {

		z-index: 2;
		width: 100%;
		display: flex;
		position: fixed;
		padding: 0 1rem;
		height: 3.125rem;
		align-items: center;
		justify-content: space-between;
		background: var(--ep-color-background-fill-active-disabled);

		&:after {
			top: 0;
			left: 0;
			content: '';
			width: 100%;
			height: .0625rem;
			position: absolute;
			background: linear-gradient(90deg, rgba(10, 119, 218, 0.00) 0%, rgba(10, 119, 218, 0.00) 25%, var(--ep-color-border-brand, #0A77DA) 50%, rgba(10, 119, 218, 0.00) 75%, rgba(10, 119, 218, 0.00) 100%);
		}
		&:before {
			top: 50%;
			left: 50%;
			content: '';
			height: 60%;
			width: 12.5rem;
			display: block;
			position: absolute;
			filter: blur(.875rem);
			transform: translate(-50%, -50%);
			background: radial-gradient(50% 50% at 50% 50%,var(--ep-color-background-fill-glow-primary-opacity-100) 0%,var(--ep-color-background-fill-glow-primary-opacity-100) 60%,transparent 100%);
		}

		.left-wrap {
			display: flex;
			align-items: center;
			gap: 1rem;

			.menu-svg {
				width: 1.5rem;
				height: 1.5rem;
			}

			@media (min-width: 540px) {
				.menu-svg {
					display: none;
				}
			}

			.logo {
				width: 6.25rem;
				height: 1.875rem;
			}
		}

		.login-btn-wrap {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			.login-btn {
				width: 3.75rem;
				height: 1.875rem;
				font-size: 0.75rem;
				border-radius: .375rem;
				background: transparent;
				border: 1px solid var(--ep-color-text-default);
			}

			.register-btn {
				width: 3.75rem;
				height: 1.875rem;
				font-size: 0.75rem;
				border-radius: .375rem;
				background: linear-gradient(90deg, var(--ep-color-background-fill-gradients-tertiary-a, #3A8EE3) -27.5%, var(--ep-color-background-fill-gradients-tertiary-b, #CF3F5B) 127.5%);
			}

			.earth-svg {
				width: 1.5rem;
				height: 1.5rem;
			}
		}
	}
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

.sidebar-overlay {
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	background: linear-gradient(
		45deg,
		var(--ep-color-background-fill-glow-primary-opacity-40),
		var(--ep-color-background-fill-glow-secondary-opacity-40)
	);
}
</style>
