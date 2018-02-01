export default (theme: any) => ({
	color: theme.context.text.color.normal,
	background: theme.palette.editable.default.normal,
	boxShadow: `inset 0 2px 3px 0 ${theme.colors.shadow.grey}`,
	border: `1px solid ${theme.colors.border.grey}`,

	'&:invalid': {
		background: theme.palette.editable.default.invalid,
		boxShadow: `0 1px 0 0 ${theme.colors.shadow.white}, inset 0 1px 4px 0 ${theme.colors.shadow.yellow}`,
		border: 0,
	},

	'&:focus': {
		background: theme.palette.editable.default.focus,
		boxShadow: `0 1px 0 0 ${theme.colors.shadow.white}, inset 0 1px 4px 0 ${theme.colors.shadow.blueLight}`,
		border: 0,
	},

	'&:disabled': {
		background: theme.palette.editable.default.disabled,
		boxShadow: `inset 0 1px 0 0 ${theme.colors.shadow.black}`,
		border: 0,
	},
})