export default () => ({
	container: {
		width: ({ size }: any) => size ? size + 'px' : '1em',
		height: ({ size }: any) => size ? size + 'px' : '1em',
		display: 'inline-block',
	},
})