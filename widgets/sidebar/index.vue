<script setup lang="ts">
import { useSidebarLogic } from './logic'
import { interval, setAmountInterval, sortIconPosition } from './data'

defineOptions({
	name: 'SideBar'
})

const {
	locale,
	langList,
	merchantCy,
	tenantInfo,
	activityList,
	showLanguage,
	dynamicAmount,
	mainMediaList,
	currentLanguage,
	gameCategoryList,
	showLanguageDialog,
	setShowMainLeftDrawer,
	changeLanguage,
} = useSidebarLogic()

onMounted(() => {
	setAmountInterval(setInterval(() => {
		dynamicAmount.value = parseInt(Date.now().toString().slice(-9)) / 100
	}, 3000))
})

onUnmounted(() => {
	clearInterval(interval)
})
</script>

<template>
  <div class="side-bar-wrap">
		<!-- Logo -->
		<div class="logo-wrap">
			<van-icon class="close-icon" name="cross" @click="setShowMainLeftDrawer" />
			<van-image class="logo" :src="tenantInfo.siteLogo" :show-loading="false" />
		</div>

		<!-- Login Button -->
    <div class="login-btn-wrap">
      <Button class="login-btn">
        {{ $t('main.login') }}
      </Button>
      <Button class="register-btn">
        {{ $t('main.signUp') }}
      </Button>
    </div>

		<!-- Language Option -->
    <div class="language-option-wrap" @click="showLanguage = true">
      <span class="language-content">
        <Flag :iso="locale.split('-')[1]" class="flag-icon" />
        <span class="language-text">{{ currentLanguage }}</span>
      </span>
      <div class="language-btn">
        <van-icon name="arrow-down" />
      </div>
    </div>

		<!-- Activity Recommend -->
		<div class="activity-recommend-wrap">
			<div class="activity-recommend-title">
				<div class="activity-recommend-highly-icon" />
				<div class="activity-recommend-title-text">
					<div>{{ merchantCy }}<AnimatedNumber :value="dynamicAmount" :decimals="2" /></div>
					<p>JACKPOT</p>
				</div>
			</div>

			<div class="activity-recommend-list">
				<div v-for="activity in activityList" :key="activity.id" class="activity-recommend-item">
					<van-image class="activity-recommend-item-icon" :src="activity.defaultIconUrl || activity.customIconUrl" :show-loading="false" />
					<div class="activity-recommend-item-title">{{ activity.name }}</div>
				</div>
			</div>
		</div>

		<!-- Game Category -->
		<div class="game-category-wrap">
			<div class="game-category-icon" />
			<div v-for="category in gameCategoryList" :key="category" class="game-category-item">
				<span class="game-category-item-icon" :style="sortIconPosition[category]" />
				<span class="game-category-item-title">{{ category }}</span>
			</div>
		</div>

		<!-- Support -->
		<div class="support-wrap">
			<div class="support-item">
				<SvgIcon class="support-icon" url="~/assets/svg/support.svg" />
				<span class="support-text">{{ $t('main.suporte') }}</span>
			</div>
			<div class="media-list">
				<div v-for="media in mainMediaList" :key="media.id" class="media-item">
					<van-image :src="media.icon" class="media-icon" fit="cover" :show-loading="false" />
				</div>
			</div>
		</div>

		<!-- Language Dialog -->
    <van-dialog v-if="showLanguageDialog" className="language-dialog" teleport="#__nuxt" v-model:show="showLanguage" :title="$t('label.chooseLanguage')" :show-confirm-button="false" close-on-click-overlay>
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
	gap: 1rem;
  width: 16rem;
	height: 100%;
  padding: 1rem;
	display: flex;
	overflow-y: auto;
	flex-direction: column;
	color: var(--ep-color-text-default);
  background-color: var(--ep-color-background-fill-body-default);

	.logo-wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.logo {
			height: 1.875rem;
		}
	}

  .login-btn-wrap {
    gap: 1rem;
		display: none;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  .language-option-wrap {
    display: flex;
		cursor: pointer;
    padding: 0.5rem;
    align-items: center;
    border-radius: 0.75rem;
    border: .5px solid var(--ep-color-border-default);

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

	.activity-recommend-wrap {
		.activity-recommend-title {
			gap: 0.375rem;
			display: flex;
			cursor: pointer;
			flex-wrap: wrap;
			align-items: center;
			text-shadow: rgb(0, 212, 255) 0px 0px 0.625rem;

			.activity-recommend-highly-icon {
				width: 3rem;
				height: 3rem;
				background: url('~/assets/images/highly.png') no-repeat center center;
				background-size: 100% 100%;
			}

			.activity-recommend-title-text {
				font-weight: 700;
				font-style: italic;

				div {
					display: flex;
					align-items: center;
					gap: 0.25rem;
					font-size: .75rem;
				}

				p {
					font-size: 0.5rem;
					-webkit-text-fill-color: transparent;
					background: linear-gradient(90deg, rgb(36, 208, 151), rgb(35, 155, 196)) text;
				}
			}
		}

		.activity-recommend-list {
			gap: 0.5rem;
			display: grid;
			margin-top: 0.5rem;
			grid-template-columns: repeat(auto-fit, minmax(6.5rem, 1fr));

			.activity-recommend-item {
				gap: 0.25rem;
				display: flex;
				cursor: pointer;
				padding: 0.5rem;
				border-radius: 0.25rem;
				align-items: center;
				background-color: var(--ep-color-background-fill-surface-raised-L2);

				.activity-recommend-item-icon {
					width: 1rem;
					height: 1rem;
				}

				.activity-recommend-item-title {
					flex: 1;
					font-size: 0.625rem;
					font-weight: 700;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
	}

	.game-category-wrap {
		gap: 0.5rem;
		display: flex;
		flex-direction: column;

		.game-category-icon {
			width: 3rem;
			height: 3rem;
			background: url('~/assets/images/category.png') no-repeat center center;
			background-size: 100% 100%;
		}

		.game-category-item {
			gap: 0.5rem;
			display: flex;
			align-items: center;

			.game-category-item-icon {
				width: 1.25rem;
				height: 1.25rem;
				background-size: auto 100%;
				background-image: url('~/assets/images/sort.png');
			}

			.game-category-item-title {
				font-size: 0.625rem;
				font-weight: 700;
				color: var(--ep-color-text-weaker);
			}
		}
	}

	.support-wrap {
		gap: 0.5rem;
		display: grid;
		padding: 1rem 0 0;
		border-top: 1px solid var(--ep-color-border-default);
		grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));

		.support-item {
			gap: 0.5rem;
			display: flex;
			align-items: center;

			.support-icon {
				width: 1.5rem;
				height: 1.5rem;
			}
		}

		.media-list {
			display: flex;
			gap: 0.5rem;
			overflow-x: auto;

			.media-item {
				display: flex;
				min-width: 1.75rem;
				min-height: 1.75rem;
				padding: 0.25rem;
				border-radius: 50%;
				align-items: center;
				justify-content: center;
				background: rgba(42,171,238,.2);

				.media-icon {
					width: 100%;
					height: 100%;
					overflow: hidden;
					border-radius: 50%;
				}
			}
		}
	}
}

@media (min-width: 540px) and (max-width: 1023px) {
  .side-bar-wrap {
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
	.side-bar-wrap {
		.close-icon {
			display: none;
		}

		.login-btn-wrap {
			display: grid;
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
