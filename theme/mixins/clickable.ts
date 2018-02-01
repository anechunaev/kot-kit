export default {
	primary: (theme: any) => ({
		color: theme.context.text.color.normal,
		background: theme.palette.clickable.primary.normal,
		cursor: 'pointer',
		boxShadow: `0 1px 0 0 ${theme.colors.shadow.white}`,

		'&:hover': {
			background: theme.palette.clickable.primary.hover,
		},

		'&:active': {
			background: theme.palette.clickable.primary.active,
			boxShadow: `0 1px 0 0 ${theme.colors.shadow.white}, 0 1px 3px 0 ${theme.colors.shadow.blue}`,
		},
	}),
	default: (theme: any) => ({
		color: theme.context.text.color.normal,
		background: theme.palette.clickable.default.normal,
		cursor: 'pointer',
		border: `1px solid ${theme.colors.border.grey}`,

		'&:hover': {
			background: theme.palette.clickable.default.hover,
		},

		'&:active': {
			background: theme.palette.clickable.default.active,
			border: 0,
			boxShadow: `0 1px 0 0 ${theme.colors.shadow.white}`,
		},
	}),
	toggled: (theme: any) => ({
		background: theme.palette.selectable.default.active,
		border: 0,
		boxShadow: `inset 0 1px 3px 0 ${theme.colors.shadow.blueAlternative}`,
	}),
}