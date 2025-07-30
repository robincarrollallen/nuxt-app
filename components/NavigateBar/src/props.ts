import type { ExtractPropTypes } from 'vue'

export const navigateBarProps = {
	title: {
		type: String,
		required: true
	},
	'left-text': {
		type: String,
		required: false
	},
	'right-text': {
		type: String,
		required: false
	}
}

export type MyButtonProps = ExtractPropTypes<typeof navigateBarProps>
