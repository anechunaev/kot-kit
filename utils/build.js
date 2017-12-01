//@ts-nocheck
const rollup = require('rollup');
const tsLoader = require('rollup-plugin-typescript2');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
//const uglify = require('rollup-plugin-uglify');
//const { minify } = require('uglify-es');
const visualizer = require('rollup-plugin-visualizer');
const path = require('path');
const fs = require('fs');

const build = async function () {
	const external = [
		'react',
		'react-dom',
		'deepmerge',
		'classnames',
		'jss',
		'react-jss',
		'jss-preset-default',
	];

	const bundle = await rollup.rollup({
		external,
		input: './entries/lib.ts',
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
			tsLoader({ tsconfig: path.join(__dirname, '../tsconfig.json'), verbose: 3 }),
			//uglify({}, minify),
			visualizer({ filename: './dist/stats.html' }),
		],
	});

	const generateBundle = async (options = {}) => {
		const outOptions = {
			name: 'library',
			sourcemap: true,
			...options,
		};
		const { code, map } = await bundle.generate(outOptions);

		console.log('Build ' + outOptions.file + '    ' + (code.length / 1024).toFixed(3) + ' kiB');

		fs.writeFileSync(path.resolve(process.cwd(), outOptions.file), code);
		fs.writeFileSync(path.resolve(process.cwd(), outOptions.file + '.map'), map);
	};

	await generateBundle({
		file: './dist/entries/lib.js',
		format: 'cjs',
	});
	await generateBundle({
		file: './dist/entries/lib-es.js',
		format: 'es',
	});
}

build();