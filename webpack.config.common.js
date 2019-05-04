/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.tsx',
	},
	output: {
		path: resolve(__dirname, 'build/'),
		filename: '[name].js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Babel + TypeScript + React = ❤️',
			template: join(__dirname, 'public/index.html'),
		}),
	],
	module: {
		rules: [
			{
				// Include ts, tsx, js, and jsx files.
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
};
