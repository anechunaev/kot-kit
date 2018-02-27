import * as React from 'react';
import cn from 'classnames';
import { IBaseOuterProps, IBaseInnerProps } from '../base';
import ViewBox from '../View';

export interface IOuterProps extends IBaseOuterProps<HTMLDivElement> {
	withPadding?: boolean;
	withMargin?: boolean;
	withShadow?: boolean;
	sizeByContent?: boolean;
}

export interface IInnerProps extends IBaseInnerProps, IOuterProps {
}

class PanelView extends React.Component<IInnerProps> {
	public static defaultProps = {
		withPadding: true,
		withMargin: true,
		withShadow: true,
		sizeByContent: false,
		elementRef: () => {},
	};

	public render() {
		return (
			<ViewBox
				elementRef={this.props.elementRef}
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