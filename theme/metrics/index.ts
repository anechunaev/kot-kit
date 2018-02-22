import variables from '../variables';
const STEP = variables.metricsStep;

export default {
	step: STEP,
	box: {
		primary: {
			content: [2 * STEP, 3 * STEP, 2 * STEP, 3 * STEP],
			wrapper: [2 * STEP, 3 * STEP, 2 * STEP, 0],
		},
		default: {
			content: [2 * STEP, 3 * STEP, 2 * STEP, 3 * STEP],
			wrapper: [2 * STEP, 3 * STEP, 2 * STEP, 0],
		},
		secondary: {
			content: [1 * STEP, 2 * STEP, 1 * STEP, 2 * STEP],
			wrapper: [2 * STEP, 3 * STEP, 2 * STEP, 0],
		},
	},
	text: {
		primary: {
			wrapper: [2 * STEP, 0, 2 * STEP, 0],
		},
		default: {
			wrapper: [2 * STEP, 0, 2 * STEP, 0],
		},
		secondary: {
			wrapper: [2 * STEP, 0, 2 * STEP, 0],
		},
	},
};