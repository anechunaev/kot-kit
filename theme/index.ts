import mixins from './mixins';
import fonts from './fonts';
import palette from './palette';
import colors from './colors';
import variables from './variables';

export default {
	mixins,
	fonts,
	palette,
	colors,
	variables,
	context: {
		text: {
			color: palette.text.default,
			font: fonts.default,
		}
	},
	hash: Date.now()
};