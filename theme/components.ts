export const Components = {
	/** 底部导航栏组件 */
	tabbar: (style: string) => () => import(`@/widgets/tabbar/${style}/index.vue`),

	/** pwa栏组件 */
	pwaBar: () => import('@/pages/main/home/modules/pwaBar/style_18/index.vue'),

	/** 导航栏组件 */
	navBar: () => import('@/components/DynamicLayout'),
	/** 导航栏菜单组件 */
	navBarMenu: () => import('@/pages/main/home/modules/navBar/menu/style_18/index.vue'),
	/** 导航栏logo组件 */
	navBarLogo: () => import('@/pages/main/home/modules/navBar/logo/style_18/index.vue'),
	/** 导航栏语言组件 */
	navBarLanguage: (style: string) => () => import(`@/pages/main/home/modules/navBar/language/${style}/index.vue`),
	/** 导航栏登录组件 */
	navBarLogin: () => import('@/pages/main/home/modules/navBar/login/style_18/index.vue'),

	/** 轮播图组件 */
	banner: () => import('@/pages/main/home/modules/banner/style_18/index.vue'),

	/** 跑马灯组件 */
	marquee: (style: string) => () => import(`@/pages/main/home/modules/marquee/${style}/index.vue`),

	/** 分类组件 */
	mainSortTab: (style: string) => () => import(`@/pages/main/home/modules/sortTab/${style}/index.vue`),

	/** 首页侧边栏组件 */
	drawer: () => import('@/pages/main/home/modules/drawer/index.vue'),
	/** 首页侧边栏头部组件 */
	drawerHeader: () => import('@/components/DynamicLayout'),
	/** 首页侧边栏头部组件: Logo */
	drawerHeaderLogo: () => import('@/widgets/sidebar/modules/logo/index.vue'),
	/** 首页侧边栏头部组件: Login */
	drawerHeaderLogin: () => import('@/widgets/sidebar/modules/login/index.vue'),
	/** 首页侧边栏内容组件 */
	drawerContent: () => import('@/components/DynamicLayout'),
	/** 首页侧边栏内容组件: Language */
	drawerHeaderLanguage: () => import('@/widgets/sidebar/modules/language/index.vue'),
	/** 首页侧边栏内容组件: Language Dialog */
	drawerContentLanguageDialog: () => import('@/widgets/languageDialog/index.vue'),
	/** 首页侧边栏内容组件: Activity */
	drawerContentActivity: () => import('@/widgets/sidebar/modules/activity/index.vue'),
	/** 首页侧边栏内容组件: Category */
	drawerContentCategory: () => import('@/widgets/sidebar/modules/category/index.vue'),
	/** 首页侧边栏底部组件 */
	drawerFooter: () => import('@/components/DynamicLayout'),
	/** 首页侧边栏底部组件: Support */
	drawerContentSupport: () => import('@/widgets/sidebar/modules/support/index.vue'),
}
