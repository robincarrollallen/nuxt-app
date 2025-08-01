// Redirect middleware <Middleware is executed every time the route is redirected>
export default defineNuxtRouteMiddleware((to) => {
	if (['/', '/main'].includes(to.path)) {
		return navigateTo('/main/home')
	}
})
