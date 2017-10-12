export default (theme: any) => ({
	group: {
		'&>*:first-child': {
			borderRadius: [theme.variables.interactive.borderRadius, 0, 0, theme.variables.interactive.borderRadius],
		},
		'&>*:last-child': {
			borderRadius: [0, theme.variables.interactive.borderRadius, theme.variables.interactive.borderRadius, 0],
		},
	},
	vertical: {
		flexDirection: 'column',
		'&>*:first-child': {
			borderRadius: [theme.variables.interactive.borderRadius, theme.variables.interactive.borderRadius, 0, 0],
		},
		'&>*:last-child': {
			borderRadius: [0, 0, theme.variables.interactive.borderRadius, theme.variables.interactive.borderRadius],
		},
	},
})