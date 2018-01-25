//@ts-nocheck
const rollup = require('rollup');
const tsLoader = require('rollup-plugin-typescript2');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const visualizer = require('rollup-plugin-visualizer');
/* const uglify = require('rollup-plugin-uglify');
const { minify } = require('uglify-es'); */
const path = require('path');
const fs = require('fs');


const external = [
	'react',
	'react-dom',
	'deepmerge',
	'classnames',
	'jss',
	'react-jss',
	'jss-preset-default',
	'react-modal',
	'react-input-mask',
];

export default {
	external,
	input: './entries/lib.ts',
	plugins: [
		nodeResolve({
			jsnext: true,
			main: true,
			customResolveOptions: {
				moduleDirectory: 'node_modules',
			},
			modulesOnly: true,
		}),
		commonjs({
			include: 'node_modules/**',
			namedExports: {
				'react-jss': [
					'createTheming',
				],
				'react': [
					'createElement',
					'Component',
					'PureComponent',
				],
			},
		}),
		tsLoader({ tsconfig: path.join(__dirname, './tsconfig.json') }),
		//uglify({}, minify),
		visualizer({ filename: './dist/stats.html' }),
	],
	output: [
		{
			name: 'library',
			sourcemap: true,
			file: './dist/lib.js',
			format: 'cjs',
		},
		{
			name: 'library',
			sourcemap: true,
			file: './dist/lib-es.js',
			format: 'es',
		}
	]
}