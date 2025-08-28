export let interval: NodeJS.Timeout | null = null

export const setAmountInterval = (amountInterval: NodeJS.Timeout) => {
	interval = amountInterval
}
