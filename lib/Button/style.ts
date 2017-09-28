const active = (theme: any) => ({
	backgroundImage: theme.palette.clickable.default.active,
	boxShadow: [0, 1, 0, 0, 'rgba(255, 255, 255, .5)'],
	borderColor: 'transparent',
});

export default (theme: any) => ({
	wrapper: {
		...theme.mixins.groupItem(theme),
		font: theme.fonts.default,
		color: theme.palette.text.default.normal,
		padding: [6, 15],
		border: [1, 'solid', '#d2d2d2'],
		backgroundImage: theme.palette.clickable.default.normal,
		backgroundClip: 'padding-box',
		cursor: 'pointer',
		width: '100%',

		'&:hover': {
			backgroundImage: theme.palette.clickable.default.hover,
		},

		'&:active': {
			...active(theme),
		},
	},
	disabled: {
		opacity: 0.5,
		cursor: 'default',
		backgroundImage: theme.palette.clickable.default.normal,
		borderColor: 'transparent',
	
		'&:hover, &:active': {
			backgroundImage: theme.palette.clickable.default.normal,
		},
	},
	active: {
		...active(theme),
		'&:hover, &:disabled': {
			backgroundImage: theme.palette.clickable.default.active,
		},
	},
	primary: {
		backgroundImage: theme.palette.clickable.primary.normal,
		color: theme.palette.text.light.normal,
		borderColor: 'transparent',

		'&:hover': {
			backgroundImage: theme.palette.clickable.primary.hover,
		},
		'&:active': {
			backgroundImage: theme.palette.clickable.primary.active,
		},

		'&$disabled': {
			backgroundImage: theme.palette.clickable.primary.normal,
			'&:hover, &:active': {
				backgroundImage: theme.palette.clickable.primary.normal,
			},
		},
		'&$active': {
			backgroundImage: theme.palette.clickable.primary.active,
			'&:hover, &:disabled': {
				backgroundImage: theme.palette.clickable.primary.active,
			},
		}
	},
});