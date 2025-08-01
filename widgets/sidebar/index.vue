<script setup lang="ts">
defineOptions({
	name: 'SideBar'
})

const appStore = useAppStore() // Application store
const systemStore = useSystemStore() // System store
const statusStore = useStatusStore() // Status store
const tenantStore = useTenantStore() // Tenant store

const showLanguage = ref(false) // Whether to show language selection

const locale = computed(() => appStore.locale) // Current language
const tenantInfo = computed(() => tenantStore.tenantInfo) // Tenant information
const langList = computed(() => tenantStore.tenantInfo.appLanguage) // Language list
const currentLanguage = computed(() => getLanguageName(locale.value, locale.value).split(' ')[0]) // Current language
const showLanguageDialog = computed(() => systemStore.screenWidth >= 540 || statusStore.showMainLeftDrawer) // Whether to show language dialog

const changeLanguage = (lang: any) => {
	appStore.setLocale(lang) // Set language
	showLanguage.value = false // Close language selection
}
</script>

<template>
  <div class="side-bar-wrap">
		<div class="logo-wrap">
			<van-icon class="close-icon" name="cross" @click="statusStore.setShowMainLeftDrawer()" />
			<van-image class="logo" :src="tenantInfo.logo" :show-loading="false" />
		</div>
    <div class="login-btn-wrap">
      <Button class="login-btn">
        {{ $t('common.login') }}
      </Button>
      <Button class="register-btn">
        {{ $t('common.register') }}
      </Button>
    </div>
    <div class="language-option-wrap" @click="showLanguage = true">
      <span class="language-content">
        <Flag :iso="locale.split('-')[1]" class="flag-icon" />
        <span class="language-text">{{ currentLanguage }}</span>
      </span>
      <div class="language-btn">
        <van-icon name="arrow-down" />
      </div>
    </div>

    <van-dialog v-if="showLanguageDialog" className="language-dialog" teleport="#__nuxt" v-model:show="showLanguage" :title="$t('common.chooseLanguage')" :show-confirm-button="false" close-on-click-overlay>
      <div class="language-dialog-list">
        <div v-for="lang in langList" :key="lang" class="change-language-item" @click="changeLanguage(lang)">
          <p class="change-language-item-name">
            {{ getLanguageName(lang, locale) }}
          </p>
          <van-checkbox v-if="locale === lang" :checked="true" />
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<style scoped lang="less">
.side-bar-wrap {
  width: 16rem;
	height: 100%;
  padding: 1rem;
	color: var(--ep-color-text-default);
  background-color: var(--ep-color-background-fill-body-default);

	.logo-wrap {
    padding: 0 0 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.logo {
			height: 1.875rem;
		}
	}

  .login-btn-wrap {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }

  .language-option-wrap {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border: .5px solid var(--ep-color-border-default);
    border-radius: 0.75rem;
    margin-top: 1rem;

    .language-content {
      flex: 1;
      display: flex;
      gap: 0.5rem;

      .flag-icon {
				width: 1rem;
				height: 1rem;
        border-radius: 50%;
      }

      .language-text {
        font-size: 0.625rem;
        font-weight: 700;
      }
    }

    .language-btn {
      display: inline-block;
    }
  }
}

@media (min-width: 540px) and (max-width: 1023px) {
  .side-bar-wrap {
    width: 8rem;
    height: 100%;

		.close-icon {
			display: none;
		}

    .language-option-wrap {
      .language-content {
        justify-content: center;
      }

      .language-btn {
        display: none;
      }
    }
  }
}

@media (min-width: 1024px) {
	.side-bar-wrap {
		.close-icon {
			display: none;
		}
	}
}

:global(.language-dialog) {
	--van-text-color: var(--ep-color-text-default);
  background: var(--ep-color-background-fill-active-disabled);
}

.language-dialog-list {
	color: var(--ep-color-text-default);
  padding: 0.5rem 1rem;

  .change-language-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #252b42;

    .change-language-item-name {
      padding: 0.5rem 0;
    }
  }
}
</style>
