const { resolve } = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		contentBase: resolve(__dirname, 'build'),
		compress: true,
		port: 3000,
		historyApiFallback: true,
		publicPath: '/',
	},
});
