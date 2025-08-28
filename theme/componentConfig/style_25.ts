import { Assets } from "../assets"
import { THEME_KEY } from "../type"
import { Components } from "../components"

/** 底部导航栏组件配置 */
export const TabbarComponent = {
	component: Components.tabbar(THEME_KEY.STYLE_25),
}

/** 首页头部组件配置 */
export const HomeHeaderComponent= {
	children: [
		{
			component: Components.pwaBar, // pwa栏组件
		},
		{
			component: Components.layout, // 导航栏组件
			options: {
				class: 'nav-bar, row',
				style: {
					width: '100%',
					height: '3.125rem',
					padding: '0 .75rem',
					gap: '.5rem',
					background: 'linear-gradient(125deg, #121713 0%, #121713 8%, rgba(255, 255, 255, 0.06) 8%, rgba(255, 255, 255, 0.00) 20%, rgba(255, 255, 255, 0.05) 20%, rgba(255, 255, 255, 0.00) 32%, rgba(255, 255, 255, 0.04) 32%, rgba(255, 255, 255, 0.0) 44%, rgba(255, 255, 255, 0.03) 44%, rgba(255, 255, 255, 0.00) 56%, rgba(255, 255, 255, 0.02) 56%, rgba(255, 255, 255, 0.00) 68%, rgba(255, 255, 255, 0.01) 68%, rgba(255, 255, 255, 0.00) 80% ), #121713',
				}
			},
			children: [
				{
					component: Components.navBarLogo, // 导航栏logo组件
					options: {
						icon: '@/assets/svg/menu.svg',
						fit: 'contain',
						position: 'left',
					}
				},
				{
					component: Components.navBarLanguage(THEME_KEY.STYLE_18), // 导航栏语言组件
					options: {
						icon: '@/assets/svg/earth.svg',
						class: 'style-25',
					}
				},
				{
					component: Components.navBarMenu(THEME_KEY.STYLE_18), // 导航栏菜单组件
					options: {
						icon: '@/assets/svg/menu.svg',
						style: {
							padding: '.5rem',
							width: '2.125rem',
							height: '2.125rem',
							color: 'var(--ep-color-icon-default)',
							border: '.0625rem solid var(--ep-color-border-default)',
							background: 'var(--ep-color-background-fill-surface-raised-L2)',
						}
					}
				}
			]
		}
	]
}

/** 首页内容组件配置 */
export const HomeContentComponent = {
	children: [
		{
			component: Components.layout, // 登录与用户信息组件
			options: {
				class: 'row',
				style: {
					gap: '0.5rem',
					display: 'flex',
					alignItems: 'center',
					borderRadius: '.75rem',
					padding: '.6875rem .75rem',
					transform: 'skew(-12deg)',
					justifyContent: 'space-between',
					margin: '.375rem 1.375rem .375rem 2.5rem',
					border: '.125rem solid var(--ep-color-border-default)',
				}
			},
			children: [
				{
					component: Components.info(THEME_KEY.STYLE_25), // 用户信息组件
					options: {
						outAvatar: '@/assets/svg/person-25.svg',
						style: {
							marginLeft: '-1.875rem',
							transform: 'skew(12deg)',
						}
					}
				},
				{
					component: Components.login(THEME_KEY.STYLE_25), // 登录组件
				}
			]
		},
		{
			component: Components.banner(THEME_KEY.STYLE_18), // 轮播图组件
		},
		{
			component: Components.marquee(THEME_KEY.STYLE_25), // 跑马灯组件
		},
		{
			component: Components.jackpot(THEME_KEY.STYLE_25), // 首页Jackpot组件
			options: {
				icon: Assets.jackpot_25,
			}
		},
		{
			component: Components.mainSortTab(THEME_KEY.STYLE_18), // 分类组件
		}
	]
}

/** 首页抽屉组件配置 */
export const HomeDrawerComponent = {
	component: Components.drawer,
	options: {
		position: 'right',
	},
	children: [
		{
			component: Components.drawerHeader,
			children: [
				{
					component: Components.drawerHeaderLogo,
					options: {
						style: {
							flexDirection: 'row-reverse',
						}
					}
				},
				{
					component: Components.drawerHeaderLogin,
				}
			]
		},
		{
			component: Components.drawerContent,
			options: {
				class: 'flex-1 scroll-y column',
				style: {
					gap: '1rem',
				}
			},
			children: [
				{
					component: Components.drawerBanner,
					options: {
						icon: Assets.promo_25,
					}
				},
				{
					component: Components.drawerHeaderLanguage,
					children: [
						{
							component: Components.drawerContentLanguageDialog,
						}
					]
				},
				{
					component: Components.drawerContentActivity(THEME_KEY.STYLE_25),
				},
				{
					component: Components.drawerContentCategory,
				}
			]
		},
		{
			component: Components.drawerFooter,
			children: [
				{
					component: Components.drawerContentSupport,
				}
			]
		}
	]
}
