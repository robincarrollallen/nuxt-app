export const Components = {
	/** pwa栏组件 */
	pwaBar: () => import('~/pages/main/home/modules/pwaBar/style_18/index.vue'),

	/** 导航栏组件 */
	navBar: () => import('~/components/DynamicLayout'),
	/** 导航栏菜单组件 */
	navBarMenu: () => import('~/pages/main/home/modules/navBar/menu/style_18/index.vue'),
	/** 导航栏logo组件 */
	navBarLogo: () => import('~/pages/main/home/modules/navBar/logo/style_18/index.vue'),
	/** 导航栏语言组件 */
	navBarLanguage: (index: number) => () => import(`~/pages/main/home/modules/navBar/language/style_${index}/index.vue`),
	/** 导航栏登录组件 */
	navBarLogin: () => import('~/pages/main/home/modules/navBar/login/style_18/index.vue'),

	/** 轮播图组件 */
	banner: () => import('~/pages/main/home/modules/banner/style_18/index.vue'),

	/** 跑马灯组件 */
	marquee: (index: number) => () => import(`~/pages/main/home/modules/marquee/style_${index}/index.vue`),

	/** 分类组件 */
	mainSortTab: (index: number) => () => import(`~/pages/main/home/modules/sortTab/style_${index}/index.vue`),
}
