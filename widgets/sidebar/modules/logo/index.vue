<script setup lang="ts">
const tenantStore = useTenantStore() // Tenant store
const statusStore = useStatusStore() // Status store

/**
 * Set show main left drawer
 */
const setShowMainLeftDrawer = () => {
	statusStore.setShowMainLeftDrawer()
}
</script>

<template>
	<section>
		<van-icon class="close-icon" name="cross" @click="setShowMainLeftDrawer" />
		<van-image class="logo" :src="tenantStore.tenantInfo.siteLogo" :show-loading="false" />
	</section>
</template>

<style scoped lang="less">
section {
	display: flex;
	align-items: center;
	justify-content: space-between;

	i {
		padding: .5rem;
		border-radius: var(--ep-border-radius-xl, .625rem);
		background-color: var(--ep-color-background-fill-surface-raised-L2);

		@media (min-width: 540px) {
			opacity: 0;
		}
	}

	div {
		height: 1.875rem;
	}
}
</style>
