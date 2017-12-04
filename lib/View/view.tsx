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
		const width = this.props.width || 1;
		const attributes = {} as any;

		if (typeof this.props.width !== 'undefined') {
			attributes['style'] = {
				width: width * 100 + '%'
			}
		}

		return (
			<div
				className={cn({
					[this.props.classes.wrapper]: true,
					[this.props.classes.nowrap]: this.props.nowrap,
					[this.props.className || '']: !!this.props.className,
				})}
				ref={this.props.elementRef}
				{...attributes}
			>
				{this.props.children}
			</div>
		)
	}
}

export default View;