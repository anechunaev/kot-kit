import * as React from 'react';
import ThemeProvider, { withThemePatched as withTheme } from './theme';

export interface IProps {
	theme: any;		// @TODO: theme types
	primary?: boolean;
	secondary?: boolean;
	dark?: boolean;
	light?: boolean;
}

class ContextProvider extends React.Component<IProps> {
	public render() {
		const { theme, children, primary, secondary, light, dark } = this.props;

		const patchedTheme = {...theme};

		if (secondary && !primary) {
			patchedTheme.context.text.font = theme.fonts.secondary;
		} else {
			patchedTheme.context.text.font = theme.fonts.primary;
		}

		if (light && !dark) {
			patchedTheme.context.text.color = theme.palette.text.light;
		} else {
			patchedTheme.context.text.color = theme.palette.text.dark;
		}

		patchedTheme.hash = Date.now();

		return <ThemeProvider theme={patchedTheme}>{children}</ThemeProvider>;
	}
}

export default withTheme(ContextProvider);