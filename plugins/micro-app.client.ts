import microApp from '@micro-zoe/micro-app'

// Micro frontend plugin <executed once on initial page load>
export default defineNuxtPlugin(() => {
	microApp.start()
})
