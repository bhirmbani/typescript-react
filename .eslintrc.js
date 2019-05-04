module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'airbnb',
		// 'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
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
	plugins: ['@typescript-eslint', 'react'],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'react/jsx-indent': [2, 'tab'],
		indent: ['error', 'tab'],
	},
};
