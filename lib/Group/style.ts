const left = (r: number) => [r, 0, 0, r];
const right = (r: number) => [0, r, r, 0];
const top = (r: number) => [r, r, 0, 0];
const bottom = (r: number) => [0, 0, r, r];

export default (theme: any) => ({
	wrapper: {
		margin: theme.mixins.metrics.box(theme).wrapper,
	},
	groupItemFirst: {
		borderRadius: left(theme.variables.interactive.borderRadius),
		margin: 0,
	},
	groupItemLast: {
		borderRadius: right(theme.variables.interactive.borderRadius),
		margin: 0,
	},

	vertical: {
		flexDirection: 'column',
		'& $groupItemFirst': {
			borderRadius: top(theme.variables.interactive.borderRadius),
		},
		'& $groupItemLast': {
			borderRadius: bottom(theme.variables.interactive.borderRadius),
		},
	},
})