// @ts-nocheck

const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');

module.exports = {
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.md'],
		modules: ['node_modules', path.resolve(__dirname, '../../')],
	},
	module: {
		rules: [
			{
				test: /\.md$/,
				use: "raw-loader"
			},
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			}
		]
	},
	plugins: [
		new CheckerPlugin()
	]
};