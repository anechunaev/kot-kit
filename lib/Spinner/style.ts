import { defaultProps } from './index';

export default (theme: any) => ({
	wrapper: {
		display: 'block',
		position: 'relative',
		width: ({ length = defaultProps.length, innerRadius = defaultProps.innerRadius}) => (length + innerRadius) * 2,
		height: ({ length = defaultProps.length, innerRadius = defaultProps.innerRadius}) => (length + innerRadius) * 2,
	},
	indicator: {
		display: 'block',
		position: 'absolute',
		width: ({ width = defaultProps.width }) => width,
		height: ({ length = defaultProps.length }) => length,
		left: ({ width = defaultProps.width }) => `calc(50% - ${width/2}px)`,
		top: ({ length = defaultProps.length, innerRadius = defaultProps.innerRadius}) => `calc(50% - ${length + innerRadius}px)`,
		borderRadius: ({ borderRadius = defaultProps.borderRadius }) => borderRadius,
		backgroundColor: theme.context.text.color.normal,
		transformOrigin: ({ length = defaultProps.length, innerRadius = defaultProps.innerRadius}) => `50% ${length + innerRadius}px`,
		animation: '1s linear 0s normal none infinite running spinnerFade'
	},
	'@keyframes spinnerFade': {
		'0%': {
			opacity: 1,
		},
		'100%': {
			opacity: 0,
		},
	}
});