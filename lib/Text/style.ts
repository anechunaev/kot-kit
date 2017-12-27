export default (theme: any) => ({
	base: {
		color: theme.context.text.color.normal,
		font: theme.context.text.font.style.paragraphMedium,
	},
	header: {
		display: 'block',
		width: '100%',
		font: theme.context.text.font.style.headerMedium,
	},
	paragraph: {
		display: 'block',
		width: '100%',
		margin: [10, 0],
	},
	extraSmall: {
		font: theme.context.text.font.style.paragraphExtraSmall,

		'&$header': {
			font: theme.context.text.font.style.headerExtraSmall,
		},
	},
	small: {
		font: theme.context.text.font.style.paragraphSmall,
		
		'&$header': {
			font: theme.context.text.font.style.headerSmall,
		},
	},
	large: {
		font: theme.context.text.font.style.paragraphLarge,
		
		'&$header': {
			font: theme.context.text.font.style.headerLarge,
		},
	},
	extraLarge: {
		font: theme.context.text.font.style.paragraphExtraLarge,
		
		'&$header': {
			font: theme.context.text.font.style.headerExtraLarge,
		},
	},
})