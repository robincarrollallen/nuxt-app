import microApp from '@micro-zoe/micro-app'

// 微前端插件<页面初次加载时执行一次>
export default defineNuxtPlugin(() => {
	microApp.start()
})
