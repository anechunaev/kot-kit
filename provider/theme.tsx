import * as React from 'react';
import injectStyles, { createTheming } from 'react-jss';

const theming = createTheming('__KOT-KIT__');
const { ThemeProvider, withTheme } = theming;
const Child = (children: any) => () => children; // React v15 compatibility

export default ({ children, theme }: any) => {
	const ProviderChildren = Child(children);
	return (
		<ThemeProvider theme={theme}>
			<ProviderChildren />
		</ThemeProvider>
	);
};

export const withStyles = (styles: any) => (component: React.ComponentType<any>) => injectStyles(styles, { theming })(component);
export const withThemePatched = withTheme;