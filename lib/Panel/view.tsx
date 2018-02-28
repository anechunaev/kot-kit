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
		const { classes, withPadding, withMargin, withShadow, sizeByContent, className, children, ...rest } = this.props;
		return (
			<ViewBox
				{...rest}
				className={cn({
					[classes.panel]: true,
					[classes.withPadding]: withPadding,
					[classes.withMargin]: withMargin,
					[classes.withShadow]: withShadow,
					[classes.sizeByContent]: sizeByContent,
					[className || '']: !!className,
				})}
			>
				{children}
			</ViewBox>
		);
	}
}

export default PanelView;