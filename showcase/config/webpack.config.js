//@ts-nocheck
const { resolve, join } = require('path');
const webpack = require('webpack');

module.exports = (env) => ({
	context: resolve(__dirname, '../'),
	entry: {
		client: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://0.0.0.0:8080',
			'webpack/hot/only-dev-server',
			resolve(__dirname, '../src/client.tsx'),
		],
	},
	devServer: {
		host: '0.0.0.0',
		port: '8080',
		contentBase: [
			join(__dirname, '../static'),
			join(__dirname, '../dist'),
		],
		compress: true,
		publicPath: '/',
		inline: true,
		hot: true,
		noInfo: false,
		overlay: true,
		historyApiFallback: {
			index: '/client.html',
		},
		stats: {
			chunks: false,
			colors: true,
			errors: true,
			hash: true,
			performance: true,
			version: true,
			warnings: true,
		},
	},
	output: {
		filename: '[name].js',
		publicPath: `http://0.0.0.0:8080/`,
	},
	resolve: {
		extensions: [
			'.js',
			'.ts',
			'.tsx',
		],
		modules: [ resolve(__dirname, '../src'), 'node_modules', ],
		alias: {
			"kot-kit": resolve(__dirname, '../../dist/entries/lib.js'),
		},
	},
	devtool: 'cheap-module-source-map',
	module: {
		loaders: [
			{
				test: /\.(j|t)sx?$/,
				loaders: [
					'react-hot-loader/webpack',
					'awesome-typescript-loader',
				],
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
			},
		}),
	],
});