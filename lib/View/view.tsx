import * as React from 'react';
import cn from 'classnames';
import { IBaseInnerProps, IBaseOuterProps } from '../base';

export interface IOuterProps extends IBaseOuterProps<HTMLDivElement> {
	width?: number;
	nowrap?: boolean;
}

export interface IInnerProps extends IBaseInnerProps, IOuterProps {
}

class View extends React.Component<IInnerProps> {
	public static defaultProps = {
		elementRef: () => {},
	};

	public render() {
		const { width = 1, nowrap, className, classes, elementRef, children, ...rest } = this.props;
		const attributes = {
			style: {
				width: width * 100 + '%'
			}
		} as any;

		return (
			<div
				className={cn({
					[classes.wrapper]: true,
					[classes.nowrap]: nowrap,
					[className || '']: !!className,
				})}
				ref={elementRef}
				{...attributes}
				{...rest}
			>
				{children}
			</div>
		)
	}
}

export default View;