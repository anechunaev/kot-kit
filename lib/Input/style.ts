const getInputPadding = ({ iconSlotLeft, iconSlotRight }: any) => `7px ${iconSlotRight ? `calc(1em + 10px)` : 15 + 'px'} 7px ${iconSlotLeft ? `calc(1em + 10px)` : 15 + 'px'}`;


export default (theme: any) => ({
	input: {
		...theme.mixins.editable.default(theme),
		...theme.mixins.groupItem(theme),
		padding: (props: any) => getInputPadding(props),
		margin: 0,
		minWidth: 65,
		color: theme.palette.text.default.normal,
		font: theme.fonts.default,
	},
	invalid: {
		...theme.mixins.editable.invalid(theme),
	},
	expanded: {
		width: '100%',
	},
	wrapper: {
		position: 'relative',
	},
	slotLeft: {
		position: 'absolute',
		top: '0.5em',
		height: '1em',
		left: '0.5em',
	},
	slotRight: {
		position: 'absolute',
		top: '0.5em',
		height: '1em',
		right: '0.5em',

		'&:after': {
			content: '""',
			display: 'block',
			position: 'absolute',
			left: -10,
			top: 0,
			width: 10,
			height: '1.2em',
			backgroundImage: ({ invalid }: any) => `linear-gradient(90deg, rgba(255, 255, 255, 0), ${invalid ? '#fffce0' : theme.palette.passive.default} 50%)`,
		},
	},
})