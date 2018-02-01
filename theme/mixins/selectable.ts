export default (theme: any) => ({
	color: theme.context.text.color.normal,
	background: theme.palette.selectable.default.normal,
	cursor: 'pointer',

	'&:hover': {
		background: theme.palette.selectable.default.hover,
	},

	'&:active': {
		background: theme.palette.selectable.default.active,
	},
})