import * as React from 'react';
import deepmerge from 'deepmerge';
import { ThemeProvider } from 'provider';

export interface IProps {
	theme: any; // @TODO patch decorator provider/withTheme
	classes: Dictionary<string>;
}

class GroupView extends React.Component<IProps> {
	public render() {
		const groupTheme = deepmerge(this.props.theme, {
			mixins: {
				groupItem: () => ({
					...this.props.theme.mixins.groupItem(this.props.theme),
					borderRadius: 0,
				})
			},
		});

		return (
			<ThemeProvider theme={groupTheme}>
				<div className={this.props.classes.group}>{this.props.children}</div>
			</ThemeProvider>
		);
	}
}

export default GroupView;