export default (theme: any) => ({
	item: {
		...theme.mixins.selectable.default(theme),
		...theme.mixins.groupItem(theme),
		padding: theme.mixins.metrics.box(theme).content,
		margin: 0,
		width: '100%',
	},
	selected: {
		...theme.mixins.selectable.selected(theme),
	},
})