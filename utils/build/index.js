// @ts-nocheck
const webpack = require("webpack");
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const chalk = require('chalk');

function pad(num) {
	return num.toString().padStart(2, '0');
}

function run(config, callback = e => e) {
	try {
		webpack(config, (e, stats) => {
			console.log(stats.toString({
				chunks: false,
				chunkModules: false,
				cached: false,
				chunkOrigins: false,
				modules: false,
				colors: true
			}));
			var time = new Date(Date.now());
			console.log(`Time: ${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`);
		});

		callback();
	} catch (e) {
		console.log(chalk.red(`[${e.name}]: ${e.message}`));
	
		if (typeof e.stack !== 'undefined') {
			console.log(chalk.red(e.stack));
		}

		callback(e);
		process.exitCode = 1;
	}
}

run({}); // umd config
run({}); // es config