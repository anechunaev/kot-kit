export default (theme: any) => ({
	input: {
		...theme.mixins.groupItem(theme),
		padding: [6, 15],
		margin: 0,
		minWidth: 65,
		color: theme.palette.text.default.normal,
		font: theme.fonts.default,
		background: theme.palette.passive.default,
		boxShadow: 'inset 0 2px 3px 0 rgba(135, 135, 135, 0.25)',
		boxSizing: 'border-box',
		border: [1, 'solid', '#d2d2d2'],

		'&:focus': {
			boxShadow: '0 1px 0 0 rgba(255, 255, 255, 0.5), inset 0 1px 4px 0 #0091e1',
			borderColor: 'transparent',
		},

		'&:disabled': {
			opacity: 0.5,
		},
	},
	invalid: {
		background: '#fffce0',
		boxShadow: '0 0.5px 0 0 rgba(255, 255, 255, 0.5), 0 0.5px 0 0 rgba(255, 255, 255, 0.5), inset 0 0.5px 2px 0 #ffcd00',
		borderColor: 'transparent',

		'&:focus': {
			boxShadow: '0 0.5px 0 0 rgba(255, 255, 255, 0.5), 0 0.5px 0 0 rgba(255, 255, 255, 0.5), inset 0 0.5px 2px 0 #ffcd00',
		},
	},
	expanded: {
		width: '100%',
	},
})