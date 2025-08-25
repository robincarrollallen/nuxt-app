<script setup lang="ts">
import { IndexedDBExample } from '@/storage/indexdb'

defineOptions({
	name: 'ProfilePage'
})

// Use main layout
definePageMeta({
	layout: 'main',
	ssr: false
})

</script>

<template>
	<IndexedDBExample />
</template>

<style scoped>

</style>
