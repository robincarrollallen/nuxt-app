module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
	],
	rules: {
		'semi': ['error', 'never'],
		'no-multi-spaces': 'error',
		'indent': ['error', 'tab'],
		'no-mixed-spaces-and-tabs': 'error',
		'vue/multi-word-component-names': 'off',
		'vue/no-multiple-template-root': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/component-tags-order': ['error', {
			order: ['script', 'template', 'style']
		}],
		'no-multiple-empty-lines': ['error', { max: 1 }],
		'no-trailing-spaces': 'error',
		'eol-last': 'error',
		'vue/valid-v-model': 'off',
		'vue/no-v-model-argument': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-implicit-any': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off'
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2022,
		sourceType: 'module'
	},
	globals: {
		useFetch: 'readonly',
		useHead: 'readonly',
		defineNuxtPlugin: 'readonly',
		defineNuxtConfig: 'readonly',
		definePageMeta: 'readonly',
		defineNuxtRouteMiddleware: 'readonly',
		navigateTo: 'readonly',
		useRoute: 'readonly',
		useRouter: 'readonly',
		useState: 'readonly',
		onActivated: 'readonly',
		onDeactivated: 'readonly',
		reactive: 'readonly',
		computed: 'readonly',
		watch: 'readonly',
		ref: 'readonly',
		defineStore: 'readonly',
		onMounted: 'readonly',
		onUnmounted: 'readonly',
		nextTick: 'readonly',
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly',
		onBeforeMount: 'readonly',
		$fetch: 'readonly'
	},
	overrides: [
		{
			files: ['*.json', '*.jsonc'],
			parser: 'jsonc-eslint-parser',
			plugins: ['jsonc'],
			extends: ['plugin:jsonc/recommended-with-json'],
			rules: {
				'jsonc/indent': ['error', 2], // JSON 缩进必须是2个空格
				'jsonc/comma-dangle': ['error', 'never'], // 不允许尾随逗号
				'jsonc/quote-props': ['error', 'always'], // 属性名必须用引号包围
				'jsonc/quotes': ['error', 'double'], // 必须使用双引号
				'no-multiple-empty-lines': ['error', { max: 0 }], // JSON 中不允许空行
				'no-trailing-spaces': ['error', { skipBlankLines: true, ignoreComments: true }], // 允许注释中有多个空格
				'no-multi-spaces': 'off', // 关闭多空格检测
				'jsonc/no-comments': 'off' // 允许注释
			}
		}
	]
}
