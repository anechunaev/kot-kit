export default (theme: any) => ({
	base: {
		color: theme.context.text.color.normal,
		font: theme.context.text.font.paragraphMedium,
	},
	header: {
		display: 'block',
		width: '100%',
		font: theme.context.text.font.headerMedium,
	},
	paragraph: {
		display: 'block',
		width: '100%',
		margin: [10, 0],
	},
	extraSmall: {
		font: theme.context.text.font.paragraphExtraSmall,

		'&$header': {
			font: theme.context.text.font.headerExtraSmall,
		},
	},
	small: {
		font: theme.context.text.font.paragraphSmall,
		
		'&$header': {
			font: theme.context.text.font.headerSmall,
		},
	},
	large: {
		font: theme.context.text.font.paragraphLarge,
		
		'&$header': {
			font: theme.context.text.font.headerLarge,
		},
	},
	extraLarge: {
		font: theme.context.text.font.paragraphExtraLarge,
		
		'&$header': {
			font: theme.context.text.font.headerExtraLarge,
		},
	},
})