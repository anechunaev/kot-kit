export default (theme: any) => ({
	base: {
		color: theme.context.text.color.normal,
		font: '400 15px/1.33 sans-serif',
	},
	header: {
		display: 'block',
		width: '100%',
		font: '600 18px/1.22 sans-serif',
	},
	paragraph: {
		display: 'block',
		margin: [10, 0],
	},
	extraSmall: {
		font: '400 12px/1.42 sans-serif',

		'&$header': {
			font: '600 15px/1.2 sans-serif',
		},
	},
	small: {
		font: '400 13px/1.38 sans-serif',
		
		'&$header': {
			font: '600 15px/1.2 sans-serif',
		},
	},
	large: {
		font: '400 18px/1.22 sans-serif',
		
		'&$header': {
			font: '600 20px/1.2 sans-serif',
		},
	},
	extraLarge: {
		font: '400 20px/1.2 sans-serif',
		
		'&$header': {
			font: '600 24px/1.13 sans-serif',
		},
	},
})