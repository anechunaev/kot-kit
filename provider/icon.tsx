import * as React from 'react';
import deepmerge from 'deepmerge';
import ThemeProvider, { withThemePatched as withTheme } from './theme';

export interface IProps {
	pack: string;
}
export interface IInnerProps extends IProps {
	theme: any;
}

class IconProvider extends React.Component<IInnerProps> {
	public componentWillReceiveProps(nextProps: IInnerProps) {
		if (nextProps.pack !== this.props.pack) {
			console.log(nextProps);
			// @TODO: добавить асинхронную загрузку пака иконок
		}
	}

	public render() {
		const { theme, pack, children } = this.props;
		const patchedTheme = deepmerge.all([{}, theme, {
			variables: { iconSource: pack }
		}]);

		return <ThemeProvider theme={patchedTheme}>{children}</ThemeProvider>;
	}
}

export default withTheme(IconProvider);