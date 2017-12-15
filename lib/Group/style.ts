const left = (r: number) => [r, 0, 0, r];
const right = (r: number) => [0, r, r, 0];
const top = (r: number) => [r, r, 0, 0];
const bottom = (r: number) => [0, 0, r, r];

export default (theme: any) => ({
	group: {
		'&>*:first-child': {
			borderRadius: left(theme.variables.interactive.borderRadius),

			'&:after': {
				borderRadius: left(theme.variables.interactive.borderRadius),
			},
		},
		'&>*:last-child': {
			borderRadius: right(theme.variables.interactive.borderRadius),

			'&:after': {
				borderRadius: right(theme.variables.interactive.borderRadius),
			},
		},
	},
	vertical: {
		flexDirection: 'column',
		'&>*:first-child': {
			borderRadius: top(theme.variables.interactive.borderRadius),

			'&:after': {
				borderRadius: top(theme.variables.interactive.borderRadius),
			},
		},
		'&>*:last-child': {
			borderRadius: bottom(theme.variables.interactive.borderRadius),

			'&:after': {
				borderRadius: bottom(theme.variables.interactive.borderRadius),
			},
		},
	},
})