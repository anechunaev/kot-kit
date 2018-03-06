import * as React from 'react';
import ThemeProvider, { withThemePatched as withTheme } from './theme';

export interface IProps extends React.Props<HTMLDivElement> {
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
			patchedTheme.context.metrics.box = theme.metrics.box.secondary;
			patchedTheme.context.metrics.text = theme.metrics.text.secondary;
		} else {
			patchedTheme.context.text.font = theme.fonts.primary;
			patchedTheme.context.metrics.box = theme.metrics.box.primary;
			patchedTheme.context.metrics.text = theme.metrics.text.primary;
		}

		patchedTheme.context.text.color = light && !dark ? theme.palette.text.light : theme.palette.text.dark;

		patchedTheme.hash = Date.now();

		return <ThemeProvider theme={patchedTheme}>{children}</ThemeProvider>;
	}
}

export default withTheme(ContextProvider);