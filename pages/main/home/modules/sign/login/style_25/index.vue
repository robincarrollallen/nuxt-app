<script setup lang="ts">
import { loginApi } from '@/api/user'

const userStore = useUserStore()

const loginHandler = async () => {
	try {
		const res = await loginApi({
			username: '11999990000',
			password: '123456',
		})
		console.log(res)

		// 登录成功后的处理逻辑
		if (res.success) {
			// 设置 token
			const { setToken } = useAuth()
			setToken(res.data.token)

			// 更新用户信息
			await userStore.setUser()
		}
	} catch (error) {
		console.error('Login failed:', error)
		// 添加错误处理
	}
}
</script>

<template>
	<div v-if="userStore.user?.userId">
		<Button>{{ $t("main.entrar") }}</Button>
	</div>
	<div v-else class="login-out-box">
		<Button @click="loginHandler">{{ $t("main.login") }}</Button>
		<Button class="register">{{ $t("main.signUp") }}</Button>
	</div>
</template>

<style scoped lang="less">
.login-out-box {
	display: flex;
	gap: .5rem;
	justify-content: center;
	align-items: center;
}

button {
	--padding-top: .25rem;
	--padding-bottom: .25rem;
	--padding-start: .75rem;
	--padding-end: .75rem;

	font-weight: var(--ep-font-weight-medium, 600);
	background: var(--ep-dynamic-primary);
	border-radius: var(--ep-border-radius-s, .25rem);
	border: var(--ep-border-width-surface-default, .125rem) var(--ep-border-style-surface-default, solid) var(--ep-color-btn-level-2-border, #19CC10);

	&.register {
		background: var(--ep-color-btn-level-3-bg);
		border-color: var(--ep-color-btn-level-3-border, #FFC754);
	}
}
</style>
