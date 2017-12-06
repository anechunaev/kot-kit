export default (theme: any) => ({
	item: {
		...theme.mixins.groupItem(theme),
		display: 'block',
		width: '100%',
		boxSizing: 'border-box',
		padding: [5, 10],
		color: theme.context.text.color.normal,
		background: theme.palette.selectable.default.normal,
		cursor: 'pointer',

		'&:hover': {
			color: theme.context.text.color.normal,
			background: theme.palette.selectable.default.hover,
		},

		'&:active': {
			background: theme.palette.selectable.default.active,
		},
	},
	selected: {
		background: theme.palette.selectable.default.hover,
	},
})