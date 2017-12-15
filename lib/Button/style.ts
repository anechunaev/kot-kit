const active = (theme: any) => ({
	backgroundImage: theme.palette.clickable.default.active,
	boxShadow: [0, 1, 0, 0, 'rgba(255, 255, 255, .5)'],
	'&:after': {
		display: 'none',
	},
});

export default (theme: any) => ({
	wrapper: {
		...theme.mixins.groupItem(theme),
		font: theme.fonts.default,
		color: theme.context.text.color.normal,
		border: 'none',
		backgroundImage: theme.palette.clickable.default.normal,
		backgroundClip: 'padding-box',
		cursor: 'pointer',
		textShadow: '0 1px 0 rgba(255, 255, 255, 0.6)',
		display: 'flex',
		position: 'relative',
		padding: [0, 6],

		'&:after': {
			...theme.mixins.groupItem(theme),
			content: '""',
			display: 'block',
			border: [1, 'solid', '#d2d2d2'],
			position: 'absolute',
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			boxSizing: 'border-box',
		},

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

		'&:after': {
			display: 'none',
		},
	
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
		color: theme.context.text.color.normal,
		textShadow: '0 -0.5px 0 rgba(0, 0, 0, 0.15)',

		'&:after': {
			display: 'none',
		},

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

		'&:after': {
			display: 'none',
		},

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