export default (theme: any) => ({
	wrapper: {
		zIndex: 2,

		'&[data-placement="bottom"]': {
			marginTop: 7,

			'& $arrow': {
				top: -7,
			},
		},
		'&[data-placement="top"]': {
			marginBottom: 7,

			'& $arrow': {
				bottom: -7,
				transform: 'rotate(180deg)',
			},
		},
		'&[data-placement="left"]': {
			marginRight: 7,

			'& $arrow': {
				right: -28,
				transform: 'rotate(90deg)',
			},
		},
		'&[data-placement="right"]': {
			marginLeft: 7,

			'& $arrow': {
				left: -28,
				transform: 'rotate(270deg)',
			},
		},

		'&[data-x-out-of-boundaries]': {
			display: 'none',
		},
	},
	arrow: {
		width: 50,
		height: 7,
		position: 'absolute',
		display: 'block',
	},
	arrowSVG: {
		display: 'block',
		padding: [0, 15],
	},
	popup: {
		...theme.mixins.passive.default(theme),
	},
	arrowShape: {
		fill: '#fff',
		stroke: 'rgba(65, 97, 124, .1)',
	},
	danger: {
		...theme.mixins.passive.danger(theme),

		'$wrapper[data-placement="bottom"] & + $arrow $arrowShape': {
			fill: '#ff6669',
			stroke: 'rgba(65, 97, 124, .1)',
		},
		'$wrapper[data-placement="top"] & + $arrow $arrowShape': {
			fill: '#e53e41',
		},
		'$wrapper[data-placement="left"] & + $arrow $arrowShape, $wrapper[data-placement="right"] & + $arrow $arrowShape': {
			fill: '#f25255',
		},
	},
	warning: {
		...theme.mixins.passive.warning(theme),

		'$wrapper[data-placement="bottom"] & + $arrow $arrowShape': {
			fill: '#ffe780',
			stroke: 'rgba(65, 97, 124, .1)',
		},
		'$wrapper[data-placement="top"] & + $arrow $arrowShape': {
			fill: '#ffda69',
		},
		'$wrapper[data-placement="left"] & + $arrow $arrowShape, $wrapper[data-placement="right"] & + $arrow $arrowShape': {
			fill: '#ffe074',
		},
	},
	closeButton: {
		position: 'absolute',
		width: 10,
		height: 10,
		padding: 5,
		right: 0,
		top: 0,
		cursor: 'pointer',
		color: theme.palette.link.default.normal,

		'&:hover': {
			color: theme.palette.link.default.hover,
		},
	}
});