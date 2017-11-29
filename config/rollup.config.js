//@ts-nocheck
import tsLoader from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import visualizer from 'rollup-plugin-visualizer';

export default {
	input: 'entries/lib.ts',
	output: [
		{
			file: 'dist/lib.js',
			format: 'umd',
		},
		{
			file: 'dist/lib-es.js',
			format: 'es',
		},
	],
	name: 'kot-kit',
	external: [
		'react',
		'react-dom',
		'deepmerge',
		'classnames',
		'jss',
		'react-jss',
		'jss-preset-default',
	],
	globals: {
		'react': 'React',
		'react-jss': 'ReactJSS',
		'deepmerge': 'deepmerge',
		'classnames': 'classNames',
	},
	plugins: [
		nodeResolve({
			jsnext: true,
			main: true,
			customResolveOptions: {
				moduleDirectory: 'node_modules',
			},
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
		tsLoader(),
		uglify({}, minify),
		visualizer({ filename: './dist/stats.html' }),
	],
}