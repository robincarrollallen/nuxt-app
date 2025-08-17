import { Components } from "../components"

/** pwa栏组件配置 */
const PwaBarComponent = {
	component: Components.pwaBar,
}

/** 导航栏组件配置 */
const NavBarComponent = {
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
			component: Components.navBarLanguage,
			options: {
				icon: '~/assets/svg/earth.svg',
			}
		}
	]
}

/** 首页头部组件配置 */
export const HomeHeaderComponent= {
	children: [
		PwaBarComponent,
		NavBarComponent
	]
}
