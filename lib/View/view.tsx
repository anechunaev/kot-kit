import * as React from 'react';
import cn from 'classnames';

export interface IProps {
	classes: Dictionary<string>;
	className?: string;
	width?: number;
	elementRef?: React.Ref<HTMLDivElement>;
	nowrap?: boolean;
}

class View extends React.Component<IProps> {
	public static defaultProps = {
		elementRef: () => {},
	};

	public render() {
		const { width = 1, nowrap, className, classes, elementRef, children, ...rest } = this.props;
		const attributes = {} as any;

		if (typeof this.props.width !== 'undefined') { // ToDo: кажется можно выпилить проверку
			attributes.style = {
				width: width * 100 + '%'
			}
		}

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