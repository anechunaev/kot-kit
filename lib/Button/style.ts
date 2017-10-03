const active = (theme: any) => ({
	backgroundImage: theme.palette.clickable.default.active,
	boxShadow: [0, 1, 0, 0, 'rgba(255, 255, 255, .5)'],
	border: 'none',
	padding: [7, 16]
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
		textShadow: '0 1px 0 rgba(255, 255, 255, 0.6)',

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
		border: 'none',
		padding: [7, 16],
	
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
		border: 'none',
		padding: [7, 16],
		textShadow: '0 -0.5px 0 rgba(0, 0, 0, 0.15)',

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
	expanded: {
		width: '100%',
	},
	toggled: {
		backgroundImage: 'linear-gradient(to top, #c6e7f3, #6cb4ce)',
		boxShadow: 'inset 0 1px 3px 0 rgba(0, 46, 88, 0.33)',
		border: 'none',
		padding: [7, 16],
		'&:hover': {
			backgroundImage: 'linear-gradient(to top, #c6e7f3, #6cb4ce)',
		},
	},
	alternate: {
		'&$toggled': {
			backgroundImage: 'linear-gradient(to top, #fed0e4, #da77a1)',
			'&:hover': {
				backgroundImage: 'linear-gradient(to top, #fed0e4, #da77a1)',
			},
		},
	},
});