const active = (theme: any) => ({
	backgroundImage: theme.palette.clickable.default.active,
	boxShadow: [0, 1, 0, 0, 'rgba(255, 255, 255, .5)'],

	'&::after': {
		backgroundImage: 'none',
	},
});

export default (theme: any) => ({
	wrapper: {
		...theme.mixins.interactive(), // ToDo: move to GroupItem component
		font: theme.fonts.default,
		color: theme.palette.text.default.normal,
		border: [1, 'solid', 'transparent'],
		backgroundClip: 'padding-box',
		position: 'relative',
		backgroundImage: theme.palette.clickable.default.normal,

		'&::after': {
			content: '""',
			position: 'absolute',
			top: -1,
			right: -1,
			bottom: -1,
			left: -1,
			background: 'linear-gradient(to bottom, #e7e7e4 0%, #b3b3b2 100%)',
			zIndex: -1,
			borderRadius: 4,
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
		borderColor: '#e7e7e4',
		backgroundImage: theme.palette.clickable.default.normal,
	
		'&::after': {
			backgroundImage: 'none',
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
		color: theme.palette.text.light.normal,

		'&::after': {
			backgroundImage: 'none',
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
});