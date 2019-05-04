module.exports = {
	parser: "@typescript-eslint/parser",
	env: {
		browser: true,
		es6: true,
	},
	extends: ['airbnb'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
		'react',
	],
	rules: {
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".tsx"] }],
		"no-tabs": ["error", { allowIndentationTabs: true }],
		"react/jsx-indent": [2, 'tab'],
		"indent": ["error", "tab"]
	},
};
