const getInputPadding = ({ iconSlotLeft, iconSlotRight }: any, delta: number) => `${6 + delta}px ${iconSlotRight ? `calc(1em + ${10 + delta}px)` : (15 + delta) + 'px'} ${6 + delta}px ${iconSlotLeft ? `calc(1em + ${10 + delta}px)` : (15 + delta) + 'px'}`;


export default (theme: any) => ({
	input: {
		...theme.mixins.groupItem(theme),
		padding: (props: any) => getInputPadding(props, 0),
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
			border: 'none',
			padding: (props: any) => getInputPadding(props, 1),
		},

		'&:disabled': {
			opacity: 0.5,
		},
	},
	invalid: {
		background: '#fffce0',
		boxShadow: '0 0.5px 0 0 rgba(255, 255, 255, 0.5), 0 0.5px 0 0 rgba(255, 255, 255, 0.5), inset 0 0.5px 2px 0 #ffcd00',
		border: 'none',
		padding: (props: any) => getInputPadding(props, 1),

		'&:focus': {
			boxShadow: '0 0.5px 0 0 rgba(255, 255, 255, 0.5), 0 0.5px 0 0 rgba(255, 255, 255, 0.5), inset 0 0.5px 2px 0 #ffcd00',
		},
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