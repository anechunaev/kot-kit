export default (theme: any) => ({
	wrapper: {
		'&[data-x-out-of-boundaries]': {
			display: 'none',
		},
	},
	popup: {
		...theme.mixins.passive.default(theme),
	},
	danger: {
		...theme.mixins.passive.danger(theme),
	},
	warning: {
		...theme.mixins.passive.warning(theme),
	},
});