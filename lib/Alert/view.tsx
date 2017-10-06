import * as React from 'react';
import * as cn from 'classnames';

import Panel from '../Panel';
import Text from '../Text';

export interface IProps {
	classes: Dictionary<string>;
	className?: string;
	withMargin?: boolean;
	danger?: boolean;
	title?: string;
}

class PanelView extends React.Component<IProps> {
	public static defaultProps = {
		withMargin: true,
		danger: false,
	}

	public render() {
		return (
			<Panel
				className={cn({
					[this.props.classes.alert]: true,
					[this.props.classes.danger]: this.props.danger,
					[this.props.className || '']: !!this.props.className,
				})}
				withShadow={false}
				withMargin={this.props.withMargin}
			>
				{!!this.props.title && (
					<Text header>{this.props.title}</Text>
				)}
				{this.props.children}
			</Panel>
		);
	}
}

export default PanelView;