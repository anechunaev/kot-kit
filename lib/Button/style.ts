export default (theme: any) => ({
	wrapper: {
		...theme.mixins.groupItem(theme),
		...theme.mixins.clickable.default(theme),
		font: theme.fonts.default,
		textShadow: `0 1px 0 ${theme.colors.shadow.white}`,
		display: 'flex',
		position: 'relative',
		padding: 0,
		margin: theme.mixins.metrics.box(theme).wrapper,
	},
	disabled: {
		opacity: 0.5,
		cursor: 'default',
		backgroundImage: theme.palette.clickable.default.normal,
		boxShadow: 'inherit',

		'&:hover, &:active': {
			backgroundImage: theme.palette.clickable.default.normal,
			boxShadow: 'inherit',
		},
	},
	primary: {
		...theme.mixins.clickable.primary(theme),
		textShadow: `0 -1px 0 ${theme.colors.shadow.black}`,

		'&$disabled': {
			backgroundImage: theme.palette.clickable.primary.normal,
			boxShadow: 'inherit',
			cursor: 'default',
			'&:hover, &:active': {
				backgroundImage: theme.palette.clickable.primary.normal,
				boxShadow: 'inherit',
			},
		},
	},
	expanded: {
		width: '100%',
	},
	toggled: {
		...theme.mixins.clickable.toggled(theme),

		'&:hover': {
			backgroundImage: theme.palette.selectable.default.active,
		},
	},
	slotContent: {
		padding: theme.mixins.metrics.box(theme).content,
		alignSelf: 'center',
	},
	slotLeft: {
		padding: theme.mixins.metrics.box(theme).content,
		paddingRight: 0,
		alignSelf: 'center',
	},
	slotRight: {
		padding: theme.mixins.metrics.box(theme).content,
		paddingLeft: 0,
		alignSelf: 'center',
	},
});