export default (theme: any) => ({
	item: {
		...theme.mixins.selectable.default(theme),
		...theme.mixins.groupItem(theme),
		width: '100%',
		padding: [5, 10],
	},
	selected: {
		...theme.mixins.selectable.selected(theme),
	},
})