type FontStyle = {
	[key: string]: {
		[key: string]: string | number;
	};
};

const size: FontStyle = {
	primary: {
		headerExtraLarge: 24,
		headerLarge: 20,
		headerMedium: 18,
		headerSmall: 15,
		headerExtraSmall: 15,
		paragraphExtraLarge: 20,
		paragraphLarge: 18,
		paragraphMedium: 15,
		paragraphSmall: 13,
		paragraphExtraSmall: 12,
	},
};
const lineHeight: FontStyle = {
	primary: {
		headerExtraLarge: 1.13,
		headerLarge: 1.2,
		headerMedium: 1.22,
		headerSmall: 1.2,
		headerExtraSmall: 1.2,
		paragraphExtraLarge: 1.2,
		paragraphLarge: 1.22,
		paragraphMedium: 1.33,
		paragraphSmall: 1.38,
		paragraphExtraSmall: 1.42,
	},
};
const weight: FontStyle = {
	primary: {
		headerExtraLarge: 600,
		headerLarge: 600,
		headerMedium: 600,
		headerSmall: 600,
		headerExtraSmall: 600,
		paragraphExtraLarge: 400,
		paragraphLarge: 400,
		paragraphMedium: 400,
		paragraphSmall: 400,
		paragraphExtraSmall: 400,
	},
};
const family: FontStyle = {
	primary: {
		headerExtraLarge: 'sans-serif',
		headerLarge: 'sans-serif',
		headerMedium: 'sans-serif',
		headerSmall: 'sans-serif',
		headerExtraSmall: 'sans-serif',
		paragraphExtraLarge: 'sans-serif',
		paragraphLarge: 'sans-serif',
		paragraphMedium: 'sans-serif',
		paragraphSmall: 'sans-serif',
		paragraphExtraSmall: 'sans-serif',
	},
};

const getFontStyle = (context: string, style: string) => `${weight[context][style]} ${size[context][style]}px/${lineHeight[context][style]} ${family[context][style]}`;

export default {
	size,
	lineHeight,
	weight,
	family,
	primary: {
		headerExtraLarge: getFontStyle('primary', 'headerExtraLarge'),
		headerLarge: getFontStyle('primary', 'headerLarge'),
		headerMedium: getFontStyle('primary', 'headerMedium'),
		headerSmall: getFontStyle('primary', 'headerSmall'),
		headerExtraSmall: getFontStyle('primary', 'headerExtraSmall'),
		paragraphExtraLarge: getFontStyle('primary', 'paragraphExtraLarge'),
		paragraphLarge: getFontStyle('primary', 'paragraphLarge'),
		paragraphMedium: getFontStyle('primary', 'paragraphMedium'),
		paragraphSmall: getFontStyle('primary', 'paragraphSmall'),
		paragraphExtraSmall: getFontStyle('primary', 'paragraphExtraSmall'),
	},
};