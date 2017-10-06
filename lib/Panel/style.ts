export default (theme: any) => ({
	panel: {
		borderRadius: theme.variables.interactive.borderRadius,
		background: '#ffffff',
	},
	withPadding: {
		padding: [8, 25, 15, 15],
		boxSizing: 'border-box',
	},
	withMargin: {
		margin: [10, -25, 15, -15],
		boxSizing: 'content-box',
	},
	withShadow: {
		boxShadow: '0 4px 5px 0 rgba(65, 97, 124, 0.1), 0 4px 11px 1px rgba(65, 97, 124, 0.4), 0 0 1px 1px rgba(65, 97, 124, 0.1)',
	},
})