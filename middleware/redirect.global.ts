// 重定向中间件<中间件每次路由跳转都会执行>
export default defineNuxtRouteMiddleware((to) => {
	if (['/', '/main'].includes(to.path)) {
		return navigateTo('/main/home')
	}
})
