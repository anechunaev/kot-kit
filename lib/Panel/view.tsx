import * as React from 'react';
import cn from 'classnames';

import ViewBox from '../View';

export interface IProps {
	classes: Dictionary<string>;
	className?: string;
	withPadding?: boolean;
	withMargin?: boolean;
	withShadow?: boolean;
	sizeByContent?: boolean;
}

class PanelView extends React.Component<IProps> {
	public static defaultProps = {
		withPadding: true,
		withMargin: true,
		withShadow: true,
		sizeByContent: false,
	};

	public render() {
		return (
			<ViewBox
				className={cn({
					[this.props.classes.panel]: true,
					[this.props.classes.withPadding]: this.props.withPadding,
					[this.props.classes.withMargin]: this.props.withMargin,
					[this.props.classes.withShadow]: this.props.withShadow,
					[this.props.classes.sizeByContent]: this.props.sizeByContent,
					[this.props.className || '']: !!this.props.className,
				})}
			>
				{this.props.children}
			</ViewBox>
		);
	}
}

export default PanelView;