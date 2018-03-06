const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: path.resolve(__dirname, "../entries/lib.ts"),
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "lib.js",
		library: "order",
		libraryTarget: "commonjs2",
		devtoolModuleFilenameTemplate: "order:///[resource-path]",
		devtoolFallbackModuleFilenameTemplate: "order:///[resource-path]?[hash]",
	},
	module: {
		rules: [
			{
				test: /\.(j|t)sx?$/,
				loader: "awesome-typescript-loader",
				exclude: path.resolve(__dirname, "../node_modules"),
			}
		],
	},
	resolve: {
		modules: [
			"node_modules",
			path.resolve(__dirname, "../"),
		],
	
		extensions: [".ts", ".tsx", ".js"],
	},
	devtool: "source-map",
	externals: [nodeExternals()],
};