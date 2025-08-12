export type ShareConfigType = 'TikTok' | 'WhatsApp' | 'YouTube' | 'Kwai' | 'Twitter' | 'Instagram' | 'Facebook' | 'Telegram' | 'Email';

export const shareAgentUrl = (type: ShareConfigType, shareUrl: string, name: string, agentShare = true) => {
	const { t } = useI18n()

	if (isProxyUrl(shareUrl)) {
		name = addZeroWidthSpace(name)
	}
	const shareTextIsCustom = useAgentStore().config?.shareTextType === "Custom" && agentShare
	const shareText = addZeroWidthSpace(useAgentStore().config?.shareText ?? '')
	const content = shareTextIsCustom ? shareText : `${t('viewsSpread.agentShareUrl', { name })}`
	const baseUrl = encodeURIComponent(`${content} ${shareUrl}`)
	const recipient = '' // 邮件指定收件人/电话号码
	const subject = encodeURIComponent('') // 邮件分享主题

	const url = shareConfig[type]?.({ baseUrl, content, shareUrl, recipient, subject })
	if (!url) return
	openUrl(url, type)
}

/**
 * @description 跳转到指定URL
 * @param url 跳转网址
 */
export function openUrl(url: string, type?: string) {
	const systemStore = useSystemStore()

	// 使用表驱动定义不同场景的处理方式
	const urlHandlerTable = [
		{
			condition: () => systemStore.isApk || systemStore.isIosShelfPackage || systemStore.browser === BROWSER.WEBKIT,
			handler: () => openWindow(url)
		},
		{
			condition: () => (systemStore.os === OS.ANDROID && type === SOCIAL.KWAI) || type === SOCIAL.OPEN_URL,
			handler: () => window.open(url, "_blank")
		},
		{
			condition: () => true,
			handler: () => window.location.href = url
		}
	]

	// 查表获取对应的处理函数
	const handler = urlHandlerTable.find(item => item.condition())?.handler

	// 代理所有的外跳链接
	sendPwaPramsToParent(
		{ url, type: type || '' },
		IframeTrameTypes.OPEN_URL,
		handler
	)
}
