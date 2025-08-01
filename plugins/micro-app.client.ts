import microApp from '@micro-zoe/micro-app'

// Micro-frontend plugin <Execute once when the page is first loaded>
export default defineNuxtPlugin(() => {
	microApp.start()
})
