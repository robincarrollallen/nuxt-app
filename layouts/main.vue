<script setup lang="ts">
const tabbarList = [
	{
		path: '/main/home',
		icon: 'https://zhu-1.w-x-2-c.com/assets/inicio-2-Yv8wOcPh.png',
		label: 'Home',
	},
	{
		path: '/main/activity',
		icon: 'https://zhu-1.w-x-2-c.com/assets/promo-2-NH0VS4wJ.png',
		label: 'Activity',
	},
	{
		path: '',
		icon: 'https://zhu-1.w-x-2-c.com/assets/agency-2-CpUFH4JT.png',
		label: 'Invite',
	},
	{
		path: '/main/deposit',
		icon: 'https://zhu-1.w-x-2-c.com/assets/entrar-2-DD5Q0vEm.png',
		label: 'Deposit',
	},
	{
		path: '/main/profile',
		icon: 'https://zhu-1.w-x-2-c.com/assets/perfil-2-BpUdZ6ap.png',
		label: 'My',
	}
]
</script>

<template>
  <NuxtLayout id="__main" name="default">
		<div class="main-content">
			<NuxtPage keepalive />
		</div>
		<ClientOnly>
			<div class="tabbar">
				<NuxtLink class="tab-item" active-class="active" replace v-for="item in tabbarList" :key="item.path" :to="item.path">
					<div class="tab-icon-warp" :class="{ 'invite': !item.path }">
						<div class="invite-icon-warp" v-if="!item.path" @click="navigateTo('/activity/invite')">
							<van-image class="invite-icon-bg" src="https://yo.qu6.xyz/assets/tab-move1-CuSYYZkd.png" :show-loading="false" />
							<van-image class="invite-icon" src="https://yo.qu6.xyz/assets/flexible-1-BvyCopiC.png" :show-loading="false" />
						</div>
						<van-image class="tab-icon" v-else :src="item.icon" :show-loading="false" />
					</div>
					<span class="tab-label">{{ item.label }}</span>
				</NuxtLink>
			</div>
		</ClientOnly>
  </NuxtLayout>
</template>

<style scoped lang="less">
.main-content {
	flex: 1;
	padding-bottom: 60px; /* Leave space for tabbar */
	position: relative;
	height: 100%;
}

.main-content::-webkit-scrollbar {
	display: none; /* Chrome, Safari and Opera */
}

@media (max-width: 539px) {
	.tabbar {
		background: url('@/assets/svg/tabbar-bg-phantom-blue.svg') no-repeat;
		background-size: 100% 100%;
		position: fixed;
		bottom: 0;
		max-width: 539px;
		width: 100%;
		aspect-ratio: 8/1;
		display: grid;
		grid-template-columns: repeat(5, 1fr);

		.tab-item {
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			color: var(--ep-color-text-navigation-default);
			transition: all 0.3s ease;

			&:hover {
				transform: translateY(-2px);
			}

			.tab-icon-warp {
				position: relative;
				width: 1.25rem;
				height: 1.25rem;
				margin-bottom: 0.125rem;

				&.invite {
					width: 3rem;

					.invite-icon-warp {
						position: absolute;
						display: flex;
						align-items: center;
						justify-content: center;
						width: 100%;
						aspect-ratio: 1/1;
						top: -2.2rem;
						z-index: 0;
						background: linear-gradient(90deg,var(--ep-color-background-fill-gradients-primary-a),var(--ep-color-background-fill-gradients-primary-b));
						border-radius: 50%;

						&::before {
							content: '';
							position: absolute;
							top: .1rem;
							left: .1rem;
							bottom: .1rem;
							right: .1rem;
							background: var(--ep-color-background-fill-surface-raised-L2);
							border-radius: 50%;
						}

						.invite-icon-bg {
							position: absolute;
							inset: 0;
							animation: inviteRotate 5s linear infinite;
						}

						.invite-icon {
							width: 80%;
							height: 80%;
						}
					}
				}

				.tab-icon {
					filter: grayscale(1);
				}
			}

			&.active {
				color: var(--ep-color-text-navigation-selected);
				animation: tabBtnAnimation 500ms;

				.tab-icon-warp {
					padding: 0.1rem;
					border-radius: .25rem;
					background: linear-gradient(to bottom, var(--ep-color-background-fill-glow-primary-opacity-100) 0%, var(--ep-color-background-fill-gradients-primary-a) 100%);

					&::after {
						content: '';
						position: absolute;
						top: .05rem;
						left: .05rem;
						bottom: .05rem;
						right: .05rem;
						background: radial-gradient(70% 50% at 50% 100%,var(--ep-color-background-fill-glow-primary-opacity-100),var(--ep-color-background-fill-surface-raised-L2));
						border-radius: .25rem;
					}

					.tab-icon {
						display: absolute;
						z-index: 1;
						width: 100%;
						height: 100%;
						filter: grayscale(0);
					}
				}
			}
		}

		.tab-label {
			font-size: .625rem;
			font-weight: 500;
		}
	}
}

@media (min-width: 540px) {
  .main-layout {
    .main-content {
      padding-bottom: 0;
    }
  }

  .tabbar {
      display: none;
    }
}

@keyframes tabBtnAnimation {
	0% {
		transform: scale(0);
	}

	50% {
		transform: scale(1.2);
	}

	100% {
		transform: scale(1);
	}
}

@keyframes inviteRotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
