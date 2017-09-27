export default {
	clickable: {
		default: {
			normal: 'linear-gradient(to bottom, #faf9f7, #f0efeb 50%, #e5e4df 50%, #dedcd4)',
			hover: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.0), #eae8df), linear-gradient(to bottom, #fefefd, #f0efeb 50%, #e5e4df 50%, #dedcd4)',
			active: 'linear-gradient(to top, #eeeee7 2%, #c3c1b4 99%)',
		},
		primary: {
			normal: 'linear-gradient(to bottom, #30a2da, #0871b3 51%, #045893 51%, #0665a4 51%, #005889)',
			hover: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.0), rgba(0, 125, 189, 0.9)), linear-gradient(to bottom, #37b1ed, #0871b3 49%, #045893 51%, #0663a2 51%, #006799)',
			active: 'linear-gradient(to top, #1e95cd, #134e82)',
		},
	},
	selectable: {
		default: {
			normal: '',
			hover: 'linear-gradient(to bottom, #d6f5ff, #a5e1f8)',
			active: 'linear-gradient(to top, #c6e7f3, #6cb4ce), linear-gradient(#98cbdf, #98cbdf)',
		},
		alternative: {
			normal: '',
			hover: '',
			active: 'linear-gradient(to top, #fed0e4, #da77a1)',
		},
	},
	editable: {
		default: {
			normal: '#ffffff',
			focus: '#ffffff',
			invalid: '#fffce0',
		}
	},
	passive: {
		default: '#ffffff',
		alternative: '#f3faf3',
		accent: '#f4f3db',
		success: '#c7e98c',
		danger: '',
		warning: '',
	},
	link: {
		default: {
			normal: '',
			hover: '',
			active: '',
		},
		dark: {
			normal: '',
			hover: '',
			active: '',
		},
		light: {
			normal: '',
			hover: '',
			active: '',
		},
		danger: {
			normal: '',
			hover: '',
			active: '',
		},
		success: {
			normal: '',
			hover: '',
			active: '',
		},
		secondary: {
			normal: '',
			hover: '',
			active: '',
		},
	},
	text: {
		default: {
			normal: '#000000',
			hover: '',
			active: '',
		},
		dark: {
			normal: '',
			hover: '',
			active: '',
		},
		light: {
			normal: '#ffffff',
			hover: '',
			active: '',
		},
		danger: {
			normal: '',
			hover: '',
			active: '',
		},
		success: {
			normal: '',
			hover: '',
			active: '',
		},
		secondary: {
			normal: '',
			hover: '',
			active: '',
		},
	}
};