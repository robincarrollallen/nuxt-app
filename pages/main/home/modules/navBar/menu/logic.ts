export const useNavBarMenuLogic = () => {
	const statusStore = useStatusStore()

	const showMainLeftDrawer = () => {
		statusStore.setShowMainLeftDrawer(true)
	}

	return {
		showMainLeftDrawer
	}
}
