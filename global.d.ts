type Dictionary<T> = {
	[index: string]: T;
}

declare module 'react-jss' { // @TODO @types/react-jss
	const decorator: (c: any, options?: any) => any;
	export default decorator;
	export const ThemeProvider: any;
	export const withTheme: (c: any) => any;
	export const createTheming: (namespace: string) => any;
	export const JssProvider: any;
	export const SheetsRegistry: any;
	export const createGenerateClassName: () => any;
}

declare module 'jss' { // @TODO @types/jss
	export const create: any;
}

declare module 'jss-preset-default' { // @TODO @types/jss-preset-default
	const preset: () => void;
	export default preset;
}

declare module 'classnames' { // @TODO @types/classnames
	const cn: (c: any, c2?: any, c3?: any) => string;
	export default cn;
}

interface NodeRequire { // @TODO webpack patch
	context?: any;
}
