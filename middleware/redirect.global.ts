// Redirect middleware <middleware executes on every route navigation>
export default defineNuxtRouteMiddleware((to) => {
	if (['/', '/main'].includes(to.path)) {
		return navigateTo('/main/home')
	}
})
