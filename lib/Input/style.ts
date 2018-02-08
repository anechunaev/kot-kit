const getInputPadding = (iconSlotLeft: any, iconSlotRight: any, padding: number[]) =>
	padding[0] + 'px ' +
	(!!iconSlotRight ? `calc(1em + ${padding[1]}px) ` : padding[1] + 'px ') +
	padding[2] + 'px ' +
	(!!iconSlotLeft ? `calc(1em + ${padding[3]}px)` : padding[3] + 'px');

export default (theme: any) => {
	const inputMetrics = theme.mixins.metrics.box(theme);

	return {
		input: {
			...theme.mixins.editable.default(theme),
			...theme.mixins.groupItem(theme),
			padding: ({ iconSlotLeft, iconSlotRight }: any) => getInputPadding(iconSlotLeft, iconSlotRight, inputMetrics.content),
			minWidth: 80,
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
			margin: inputMetrics.wrapper,
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
				backgroundImage: ({ invalid }: any) => `linear-gradient(90deg, rgba(255, 255, 255, 0), ${invalid ? theme.palette.editable.default.invalid : theme.palette.editable.default.normal} 50%)`,
			},
		},
	};
}