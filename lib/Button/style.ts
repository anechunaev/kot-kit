export default (theme: any) => ({
	wrapper: {
		...theme.mixins.groupItem(theme),
		...theme.mixins.clickable.default(theme),
		font: theme.fonts.default,
		textShadow: '0 1px 0 rgba(255, 255, 255, 0.6)',
		display: 'flex',
		position: 'relative',
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
		textShadow: '0 -1px 0 rgba(0, 0, 0, 0.15)',

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
		alignSelf: 'center',
		padding: [7, 10],
	},
	slotLeft: {
		alignSelf: 'center',
		padding: [7, 0, 7, 10],
	},
	slotRight: {
		alignSelf: 'center',
		padding: [7, 10, 7, 0],
	},
});