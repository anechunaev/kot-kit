import { fade } from '../styleHelpers';

const linkMixin = (color: string, hoverColor: string) => ({
	color,
	textDecoration: 'none',
	border: 0,
	borderBottom: ['1px', 'solid', fade(color, 0.4)],
	cursor: 'pointer',
	position: 'relative',
	margin: ({ iconSlotLeft, iconSlotRight }: any) => `0 ${iconSlotRight ? '1em' : 0} 0 ${iconSlotLeft ? '1em' : 0}`,

	'&:hover': {
		color: hoverColor,
		borderColor: fade(hoverColor, 0.4).toString(),
	},
})

export default (theme: any) => ({
	base: {
		...linkMixin(theme.palette.link.default.normal, theme.palette.link.default.hover),
	},
	pseudo: {
		borderStyle: 'dashed',
	},
	dark: {
		...linkMixin(theme.palette.link.dark.normal, theme.palette.link.dark.hover),
	},
	light: {
		...linkMixin(theme.palette.link.light.normal, theme.palette.link.light.hover),
	},
	slotLeft: {
		position: 'absolute',
		left: '-1em',
		top: 0,
	},
	slotRight: {
		position: 'absolute',
		right: '-1em',
		top: 0,
	},
})