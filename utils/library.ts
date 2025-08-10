/**
 * 异步节流（只支持 async 定义的函数）
 * @param func 异步或同步函数
 * @param delay 延迟时间（ms）
 */
export function throttle(func, delay) {
	let lastExecTime = 0
	let pendingResult = null

	// 预检测是否为 async 函数（只检查一次）
	const isAsyncFunction = func.constructor.name === 'AsyncFunction'

	return function (...args) {
		const now = Date.now()

		// 时间窗口外 → 执行并更新结果
		if (now - lastExecTime >= delay) {
			lastExecTime = now
			const result = func.apply(this, args)
			pendingResult = result
			// 如果是 async 函数，但返回的不是 Promise，包一层
			return isAsyncFunction && !(result instanceof Promise)
				? Promise.resolve(result)
				: result
		}

		// 时间窗口内 → 返回缓存结果
		if (isAsyncFunction) {
			// async 函数始终返回 Promise
			return pendingResult instanceof Promise
				? pendingResult
				: Promise.resolve(pendingResult)
		}
		// 同步函数直接返回值
		return pendingResult
	}
}

