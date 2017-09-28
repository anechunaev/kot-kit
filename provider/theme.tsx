import * as React from 'react';
import injectStyles, { createTheming, JssProvider, createGenerateClassName } from 'react-jss';

const theming = createTheming('__KOT-KIT__');
const { ThemeProvider, withTheme } = theming;

const classNamesGenerator = createGenerateClassName();

export default ({ children, theme }: any) => (
	<JssProvider generateClassName={classNamesGenerator}>
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	</JssProvider>
);
export const withStyles = (styles: any) => (component: React.ComponentType) => injectStyles(styles, { theming })(component);
export const withThemePatched = withTheme;