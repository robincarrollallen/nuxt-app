import type { PiniaPluginContext } from 'pinia'
import { useIndexedDB } from '@/storage/indexdb/useIndexedDB'

export function piniaIndexedDBPlugin({ store }: PiniaPluginContext) {
	const { get, set } = useIndexedDB()
	const key = `pinia-${store.$id}`

	// 初始化时恢复
	get(key).then((data) => {
		if (data) {
			store.$patch(data as any)
		}
	})

	// 监听变化自动持久化
	store.$subscribe((_mutation, state) => {
		const plainState = JSON.parse(JSON.stringify(state))
		set(key, plainState)
	})
}
