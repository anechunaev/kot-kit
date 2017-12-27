import * as React from 'react';
import deepmerge from 'deepmerge';
import { ThemeProvider } from 'provider';
import cn from 'classnames';

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
					display: 'block',
					height: '100%',
				})
			},
		});

		const lastIndex = React.Children.count(this.props.children) - 1;

		return (
			<ThemeProvider theme={groupTheme}>
				<ViewBox
					nowrap
					className={cn({
						[this.props.classes.vertical]: this.props.vertical,
					})}
				>
					{React.Children.map(
						this.props.children,
						(child, index) => React.cloneElement(child as React.ReactElement<any>, {
							key: index,
							className: cn({
								[this.props.classes.groupItemFirst]: index === 0,
								[this.props.classes.groupItemLast]: index === lastIndex,
							}),
						})
					)}
				</ViewBox>
			</ThemeProvider>
		);
	}
}

export default GroupView;