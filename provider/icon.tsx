import * as React from 'react';
import deepmerge from 'deepmerge';
import ThemeProvider, { withThemePatched as withTheme } from './theme';

export interface IProps {
	pack: string;
}
export interface IInnerProps extends IProps {
	theme: any;
}

const Child = (children: any) => () => children; // React v15 compatibility

class IconProvider extends React.Component<IInnerProps> {
	public render() {
		const { theme, pack, children } = this.props;
		const patchedTheme = deepmerge.all([{}, theme, {
			variables: { iconSource: pack }
		}]);
		const ProviderChildren = Child(children);

		return <ThemeProvider theme={patchedTheme}><ProviderChildren /></ThemeProvider>;
	}
}

export default withTheme(IconProvider);