//@ts-nocheck
const webpack = require("webpack");
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const chalk = require('chalk');

const padTime = n => ('00' + n).slice(-2);


try {
	webpack(require(path.resolve(argv.config))(process.env, argv.watch || false), (e, stats) => {
		console.log(stats.toString({
			chunks: false,
			chunkModules: false,
			cached: false,
			chunkOrigins: false,
			modules: false,
			colors: true
		}));
		const time = new Date();
		console.log("\n🕐  Process end time:  " + padTime(time.getHours()) + ':' + padTime(time.getMinutes()) + ':' + padTime(time.getSeconds()));
	});
} catch (e) {
	console.log(chalk.red(`[${e.name}]: ${e.message}`));

	if (typeof e.stack !== 'undefined') {
		console.log(chalk.red(e.stack));
	}

	process.exitCode = 1;
}