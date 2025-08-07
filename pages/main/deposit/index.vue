<script setup lang="ts">
import { CONDITION_TYPE, generateAgencyRule } from './data'
import { useActivityAgentLogic } from './logic'

defineOptions({
	name: 'AgentPage'
})

// Use main layout
definePageMeta({
	layout: 'main'
})

const appStore = useAppStore()
const agentStore = useAgentStore()
const activityStore = useActivityStore()
const { CONDITION_NAME } = useActivityAgentLogic()

const locale = computed(() => appStore.locale) // 当前语言
const agentMediaList = computed(() => agentStore.shareConfig.software || []) // 分享列表
const conditionType = computed(() => activityStore.agentActivityDetail.validUsers.type || 'ONE') // 条件类型
// 所有获取奖励条件
const allConditions = computed(() => Object.keys(activityStore.agentActivityDetail.validUsers).map(key => ({
	key,
	amount: activityStore.agentActivityDetail.validUsers[key].amount || safeNumber(activityStore.agentActivityDetail.validUsers[key].days),
	status: activityStore.agentActivityDetail.validUsers[key].status === 'ON',
})))
const ruleContent = computed(() => {
	let variablesValue = { multiplier: 1 }
	try {
		const rules = JSON.parse(activityStore.agentActivityDetail.rule)
		variablesValue = rules.variablesValue
	} catch (error) {}
	return generateAgencyRule(locale.value, variablesValue)
})
const rewardList = computed(() => activityStore.agentActivityDetail.rewardConfig.map((item, index) => {
	const receivedItem = activityStore.agentActivityDetail.rewardList.find((v) => v.levelId === item.uuid)
	let isTrue = false // 4 和 4的倍数 不显示, 最后一位也不显示
	if ((index + 1 == 4) || (index + 1) % 4 == 0 || (index + 1) == activityStore.agentActivityDetail.rewardConfig.length) {
		isTrue = true
	}

	return {
		uuid: item.uuid,
		userCount: item.userCount,
		min: formatMoneyToLocal(item.min),
		max: formatMoneyToLocal(item.max),
		rewardAmount: formatMoneyToLocal(receivedItem?.awardCount ?? 0),
		isOpen: !!receivedItem,
		isMeet: activityStore.agentActivityDetail.validCount >= item.userCount && !receivedItem,
		showOpenAni: false,
		isTrue
	}
}))
</script>

<template>
  <div class="agent-page">
    <ClientOnly>
			<NavigateBar :title="$t('agent.center')" left-arrow>
				<template #right>
					<SvgIcon url="~/assets/svg/record.svg" class="agent-nav-record" />
				</template>
			</NavigateBar>
			<div class="agent-poster">
				<!-- <div class="agent-poster-gift" /> -->
				<div class="agent-poster-treasure" />
			</div>
			<div class="agent-content">
				<div class="agent-content-wrap">
					<!-- 快速分享 -->
					<div class="agent-media">
						<div class="agent-media-title">
							<span>{{ $t('activity.agent2') }}</span>
						</div>
						<div class="agent-media-link">
							<van-tabs class="share-tabs">
								<van-tab v-for="item in agentMediaList" :key="item.name">
									<template #title><SvgIcon class="share-icon" :url="`~/assets/svg/share/first/${item.name.toLowerCase()}.svg`" /></template>
								</van-tab>
							</van-tabs>
							<div class="share-url-warp">
								<div class="url-title">Invite link ：</div>
								<div class="url-link">https://tg3-gray.7-v-s-8.com/?pid=575718350</div>
								<SvgIcon url="~/assets/svg/copy.svg" class="copy-icon" @click="copy('https://tg3-gray.7-v-s-8.com/?pid=575718350')"/>
							</div>
							<div class="details-warp">
								<div class="details-content">
									<div class="bet-register-count">
										My direct subordinates
										<span class="count-text">{{ `${0}` }}</span>
										{{ `${$t('Person')} (${$t('Valid')}` }}
										<span class="count-text">{{ `${0} ` }}</span>
										<span class="valid-text">{{ `${$t('Person')})` }}</span>
									</div>
									<Button> {{ `${$t('Details')} >` }}</Button>
								</div>
							</div>
						</div>
					</div>
					<!-- 奖励列表 -->
					<div class="agent-reward-list">
						<div class="agent-reward-list-title">
							<span>{{ $t('activity.agent16') }}</span>
						</div>
						<div class="agent-reward-list-content">

						</div>
					</div>
					<!-- 获取奖励条件 -->
					<div class="agent-condition">
						<div class="agent-condition-title">
							<p>{{ $t('activity.agent13') }}
								<span v-if="conditionType === CONDITION_TYPE.ALL">{{ $t('activity.agent14') }}</span>
								<span v-if="conditionType === CONDITION_TYPE.ONE">{{ $t('activity.agent15') }}</span>
							</p>
						</div>
						<div class="agent-condition-item" v-for="item in allConditions" :key="item.key" v-show="item.status">
							<div class="agent-condition-item-title">
								{{ CONDITION_NAME[item.key] }}
							</div>
							<div class="agent-condition-item-amount">
								{{ `≥${(['rechargeDays', 'rechargeCount'].includes(item.key) ? item.amount : fixedNumber(item.amount))}` }}
							</div>
						</div>
					</div>
					<!-- 活动规则 -->
					<div class="agent-rule">
						<div class="agent-rule-title">
							<span class="agent-rule-title-line" />
							{{ $t('registerReward.000004') }}
							<span class="agent-rule-title-line" />
						</div>
						<div class="agent-rule-content">
							{{ ruleContent }}
						</div>
					</div>
				</div>
			</div>
		</ClientOnly>
  </div>
</template>

<style lang="less" scoped>
.agent-page {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden auto;

	.agent-poster {
		width: 100%;
		min-height: 18.25rem;
		background-image: url('~/assets/images/activity/agent/bg-poster.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-position: center;

		.agent-poster-gift {
			width: 100%;
			height: 100%;
			background-image: url('~/assets/images/activity/agent/gift-poster.png');
			background-size: auto 9.875rem;
			background-repeat: no-repeat;
			background-position: center 7.75rem;
		}

		.agent-poster-treasure {
			width: 100%;
			height: 100%;
			background-image: url('~/assets/images/activity/agent/treasure-poster.png');
			background-size: auto 10rem;
			background-repeat: no-repeat;
			background-position: center 7.75rem;
		}
	}

	.agent-content {
		padding: 0 1.25rem 1.25rem;

		.agent-content-wrap {
			gap: 1.5rem;
			display: flex;
			position: relative;
			border-top-width: 0;
			padding: 2rem 0 .5rem;
			background: #2A2371;
			flex-direction: column;
			border: 4px solid #797AF1;
			box-shadow: 0px 0px 0px 4px #3852EB;

			&::after {
				content: '';
				position: absolute;
				bottom: -.75rem;
				left: -1rem;
				background-image: url('~/assets/svg/agent-corner.svg');
				background-size: 100% auto;
				background-repeat: no-repeat;
				background-position: center;
				height: 4.75rem;
				width: 2.25rem;
				transform: scaleX(-1);
			}

			&::before {
				content: '';
				position: absolute;
				bottom: -.75rem;
				right: -1rem;
				background-image: url('~/assets/svg/agent-corner.svg');
				background-size: 100% auto;
				background-repeat: no-repeat;
				background-position: center;
				height: 4.75rem;
				width: 2.25rem;
			}

			.agent-media {
				font-size: .75rem;
				position: relative;

				.agent-media-title {
					background-image: url('~/assets/images/activity/agent/bar-title.png');
					background-size: 100% auto;
					background-repeat: no-repeat;
					background-position: 0 0;
					width: calc(100% + 2.875rem);
					aspect-ratio: 120/23;
					position: absolute;
					top: -3.125rem;
					left: -1.4375rem;
					text-align: center;
					font-weight: 700;
					text-shadow:
						-1px -1px 0 #E64021,
						1px -1px 0 #E64021,
						-1px  1px 0 #E64021,
						1px  1px 0 #E64021;

					span {
						height: 57%;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}

				.agent-media-link {
					width: 100%;
					display: flex;
					flex-direction: column;
					gap: .3125rem;
					padding: 0 .4375rem;

					.agent-media-link-icons {
						width: 100%;
						overflow: auto hidden;
						gap: .625rem;
						display: flex;
						flex-wrap: nowrap;

						.agent-media-link-icon {
							min-width: 2.1875rem;
							min-height: 2.1875rem;
						}
					}

					.share-tabs {
						--van-tabs-nav-background: linear-gradient(90deg, rgba(38, 57, 156, 0) 0%, #3345A3 50%, rgba(38, 57, 156, 0) 100%);
						--van-tabs-line-height: auto;

						:deep(.van-tabs__nav.van-tabs__nav--line.van-tabs__nav--complete) {
							--van-tabs-bottom-bar-height: 0;
							padding: .75rem 0;
							gap: 0.625rem;

							.van-tab.van-tab--line.van-tab--grow {
								padding: 0;

								.share-icon {
									width: 2.1875rem;
									height: 2.1875rem;
								}
							}
						}
					}

					.share-url-warp {
						padding: 0 .25rem;
						display: flex;
						align-items: center;
						justify-content: center;
						background: linear-gradient(90deg, rgba(38, 57, 156, 0) 0%, #3345A3 50%, rgba(38, 57, 156, 0) 100%);

						.url-title {
							font-weight: 500;
						}

						.url-link {
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							color: var(--ep-color-text-brand-primary);
							flex: 1;
						}

						.copy-icon {
							zoom: 0.9;
						}
					}

					.details-warp {
						display: flex;
						margin-top: 1rem;
						padding: .875rem;
						align-items: center;
						border-radius: .25rem;
						background: var(--color-background-fill-glow-primary-opacity-40, #0A77DA66);

						.details-content {
							flex: 1;
							display: flex;
							align-items: center;
							justify-content: space-between;

							.bet-register-count {
								flex: 1;

								.count-text {
									color: var(--ep-color-text-warning);
								}
							}

							button {
								width: auto;
							}
						}
					}
				}
			}

			.agent-reward-list {
				font-size: .625rem;
				position: relative;
				padding-top: 20%;

				.agent-reward-list-title {
					background-image: url('~/assets/images/activity/agent/bar-title.png');
					background-size: 100% auto;
					background-repeat: no-repeat;
					background-position: 0 0;
					width: calc(100% + 2.875rem);
					aspect-ratio: 120/23;
					position: absolute;
					top: 0;
					left: -1.4375rem;
					text-align: center;
					font-weight: 700;
					text-shadow:
						-1px -1px 0 #E64021,
						1px -1px 0 #E64021,
						-1px  1px 0 #E64021,
						1px  1px 0 #E64021;

					span {
						height: 57%;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}

				.agent-reward-list-content {
					width: 107%;
					height: 10rem;
					margin-left: -.75rem;
					background-image: url('~/assets/svg/bg-agent-reward-stage.svg');
					background-repeat: repeat-y;
					background-size: 100% 6.25rem;
					background-position: top left;
				}
			}

			.agent-condition {
				padding: .625rem;
				background-color: var(--color-background-fill-glow-primary-opacity-40, #0A77DA66);

				.agent-condition-title {
					padding-bottom: .625rem;

					p {
						font-size: .75rem;
					}
				}

				.agent-condition-item {
					display: flex;
					align-items: center;
					padding: .625rem 0;
					border-top: 1px solid #FFFFFF1A;
					justify-content: space-between;

					.agent-condition-item-amount {
						text-align: right;
						width: 5rem;
					}
				}
			}

			.agent-rule {
				padding: 0 .5rem;

				.agent-rule-title {
					gap: .5rem;
					display: flex;
					padding-top: 1rem;
					align-items: center;
					justify-content: center;

					.agent-rule-title-line {
						width: 1.875rem;
						height: .625rem;
						background-image: url('~/assets/icons/activity/agent/rule-title-line.png');
						background-size: 100% auto;
						background-repeat: no-repeat;
						background-position: 0 0;

						&:last-child {
							transform: scaleX(-1);
						}
					}
				}

				.agent-rule-content {
					white-space: pre-line;
				}
			}
		}
	}
}
</style>
