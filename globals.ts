type Dictionary<T> = {
	[index: string]: T;
}

declare module 'storybook-addon-jsx' {
	const addon: any;
	export default addon; 
}

declare module '@storybook/addon-knobs' {
	type Decorator<T> = (label: string, value: T) => T;
	type Select = (label: string, options: Dictionary<any>, defaultValue: string) => string;
	export const withKnobs: () => void;
	export const text: Decorator<string>;
	export const boolean: Decorator<boolean>;
	export const number: Decorator<number>;
	export const color: Decorator<string>;
	export const object: Decorator<any>;
	export const array: Decorator<Array<any>>;
	export const select: Select;
	export const date: Decorator<Date>;
}

declare module 'storybook-readme/with-readme' {
	const withReadme: (readme: any) => any;
	export default withReadme;
}

declare module '*.md' {
	const content: any;
	export default content;
}

declare module 'react-jss' {
	const decorator: (c: any, options?: any) => any;
	export default decorator;
	export const ThemeProvider: any;
	export const withTheme: (c: any) => any;
	export const createTheming: (namespace: string) => any;
	export const JssProvider: any;
	export const SheetsRegistry: any;
	export const createGenerateClassName: () => any;
}

declare module '@storybook/addon-actions' {
	export const action: (msg: string) => () => void;
}

declare module 'jss' {
	export const create: any;
}

declare module 'jss-preset-default' {
	const preset: () => void;
	export default preset;
}