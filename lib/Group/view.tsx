import * as React from 'react';
import deepmerge from 'deepmerge';
import { ThemeProvider } from 'provider';
import * as cn from 'classnames';

import ViewBox from '../View';

export interface IProps {
	theme: any; // @TODO patch decorator provider/withTheme
	classes: Dictionary<string>;
	vertical?: boolean;
}

class GroupView extends React.Component<IProps> {
	public render() {
		const groupTheme = deepmerge(this.props.theme, {
			mixins: {
				groupItem: (): any => ({
					...this.props.theme.mixins.groupItem(this.props.theme),
					borderRadius: 0,
				})
			},
		});

		return (
			<ThemeProvider theme={groupTheme}>
				<ViewBox
					nowrap
					className={cn({
						[this.props.classes.group]: true,
						[this.props.classes.vertical]: this.props.vertical,
					})}
				>
					{this.props.children}
				</ViewBox>
			</ThemeProvider>
		);
	}
}

export default GroupView;