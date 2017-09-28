export default (theme: any) => ({
	group: {
		display: 'flex',
		'& *:first-child': {
			borderRadius: [theme.variables.interactive.borderRadius, 0, 0, theme.variables.interactive.borderRadius],
		},
		'& *:last-child': {
			borderRadius: [0, theme.variables.interactive.borderRadius, theme.variables.interactive.borderRadius, 0],
		},
	}
})