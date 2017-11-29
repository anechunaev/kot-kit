import * as React from 'react';
import injectStyles, { createTheming } from 'react-jss';

const theming = createTheming('__KOT-KIT__');
const { ThemeProvider, withTheme } = theming;

export default ({ children, theme }: any) => (
	<ThemeProvider theme={theme}>
		{children}
	</ThemeProvider>
);

export const withStyles = (styles: any) => (component: React.ComponentType<any>) => injectStyles(styles, { theming })(component);
export const withThemePatched = withTheme;