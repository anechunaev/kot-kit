import { fade } from '../../../lib/styleHelpers';

export default (theme: any) => ({
	wrapper: { },
	view: {
		width: '100%',
	},
	'@global': {
		'h1': {
			font: theme.context.text.font.style.headerExtraLarge,
			margin: theme.mixins.metrics.text(theme).wrapper,
			display: 'block',
			width: '100%',
			marginTop: 20,
		},
		'h2': {
			font: theme.context.text.font.style.headerLarge,
			margin: theme.mixins.metrics.text(theme).wrapper,
			display: 'block',
			width: '100%',
			marginTop: 20,
		},
		'h3': {
			font: theme.context.text.font.style.headerMedium,
			margin: theme.mixins.metrics.text(theme).wrapper,
			display: 'block',
			width: '100%',
			marginTop: 20,
		},
		'h4': {
			font: theme.context.text.font.style.headerSmall,
			margin: theme.mixins.metrics.text(theme).wrapper,
			display: 'block',
			width: '100%',
			marginTop: 20,
		},
		'h5, h6, h7': {
			font: theme.context.text.font.style.headerExtraSmall,
			margin: theme.mixins.metrics.text(theme).wrapper,
			display: 'block',
			width: '100%',
			marginTop: 20,
		},
		'a': {
			color: theme.palette.link.default.normal,
			textDecoration: 'none',
			border: 0,
			borderBottom: ['1px', 'solid', fade(theme.palette.link.default.normal, 0.4)],
			cursor: 'pointer',
		},
		'a:hover': {
			color: theme.palette.link.default.hover,
			borderColor: fade(theme.palette.link.default.hover, 0.4).toString(),
		},
		'p': {
			margin: theme.mixins.metrics.text(theme).wrapper,
			display: 'block',
			width: '100%',
		},
		'hr': {
			margin: [20, 0, 30],
			display: 'block',
			width: '100%',
			border: 0,
			borderTop: '1px solid #ccc',
		},
		'code': {
			background: 'rgba(27,31,35,0.05)',
			borderRadius: theme.variables.metricsStep,
			padding: [theme.variables.metricsStep, 2 * theme.variables.metricsStep],
			fontSize: '0.85em',
			fontFamily: 'Consolas, Menlo',
		},
		'pre > code': {
			padding: 0,
			background: 'none',
		},
		'pre': {
			background: 'rgba(27,31,35,0.05)',
			borderRadius: theme.variables.metricsStep,
			padding: [2 * theme.variables.metricsStep, 5 * theme.variables.metricsStep, 2 * theme.variables.metricsStep, 3 * theme.variables.metricsStep],
			margin: [2 * theme.variables.metricsStep, -5 * theme.variables.metricsStep, 2 * theme.variables.metricsStep, -3 * theme.variables.metricsStep],
		},
		'table': {
			width: '100%',
			borderCollapse: 'collapse',
			border: '1px solid #eee',
			margin: [2 * theme.variables.metricsStep, -2 * theme.variables.metricsStep],
		},
		'tr:nth-child(2n)': {
			background: '#f6f8fa',
		},
		'th, td': {
			padding: [2 * theme.variables.metricsStep, 2 * theme.variables.metricsStep],
			border: '1px solid #eee',
		},
		'blockquote': {
			borderLeft: '3px solid #eee',
			margin: [2 * theme.variables.metricsStep, 0],
			padding: [theme.variables.metricsStep, 5 * theme.variables.metricsStep, theme.variables.metricsStep, 2 * theme.variables.metricsStep],
			color: '#666',
		},
		'.hljs': {
			background: 'none !important',
		},
	}
})