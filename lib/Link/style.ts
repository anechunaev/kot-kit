import { fade } from '../styleHelpers';

const linkMixin = (color: string) => ({
	color,
	textDecoration: 'none',
	border: 0,
	borderBottom: ['1px', 'solid', fade(color, 0.4)],
	cursor: 'pointer',
	position: 'relative',
	margin: ({ iconSlotLeft, iconSlotRight }: any) => `0 ${iconSlotRight ? '1em' : 0} 0 ${iconSlotLeft ? '1em' : 0}`,

	'&:hover': {
		color: '#cc2529',
		borderColor: fade('#cc2529', 0.4).toString(),
	},
})

export default () => ({
	base: {
		...linkMixin('#369'),
	},
	pseudo: {
		borderStyle: 'dashed',
	},
	dark: {
		...linkMixin('#000'),
	},
	light: {
		...linkMixin('#FFF'),
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