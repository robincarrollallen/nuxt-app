import { Components } from "../components"

/** pwa栏组件配置 */
export const PwaBarComponent = {
	component: Components.pwaBar,
}

/** 导航栏组件配置 */
export const NavBarComponent = {
	component: Components.navBar,
	options: {
		class: 'nav-bar',
		style: {
			width: '100%',
			height: '3.125rem',
			display: 'flex',
			alignItems: 'center',
			padding: '0 .75rem',
			gap: '.5rem',
			background: 'var(--ep-color-background-fill-active-disabled)',
		}
	},
	children: [
		{
			component: Components.navBarMenu,
			options: {
				icon: '~/assets/svg/menu.svg',
				style: {
					padding: '.125rem',
					width: '1.5rem',
					height: '1.5rem',
				}
			}
		},
		{
			component: Components.navBarLogo,
			options: {
				icon: '~/assets/svg/menu.svg',
				fit: 'contain',
				position: 'left',
			}
		},
		{
			component: Components.navBarLogin,
		},
		{
			component: Components.navBarLanguage(18),
			options: {
				icon: '~/assets/svg/earth.svg',
			}
		}
	]
}

/** 首页轮播图组件配置 */
export const BannerComponent = {
	component: Components.banner,
}

/** 首页跑马灯组件配置 */
export const MarqueeComponent = {
	component: Components.marquee(18),
}

/** 首页分类组件配置 */
export const SortTabComponent = {
	component: Components.mainSortTab(18),
}

/** 首页头部组件配置 */
export const HomeHeaderComponent= {
	children: [
		PwaBarComponent,
		NavBarComponent
	]
}

/** 首页轮播图组件配置 */
export const HomeContentComponent = {
	children: [
		BannerComponent,
		MarqueeComponent,
		SortTabComponent,
	]
}
