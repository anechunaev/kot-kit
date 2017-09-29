import * as React from 'react';
import * as cn from 'classnames';

export interface IProps {
	classes: Dictionary<string>;
	className?: string;
	width?: number;
	elementRef?: React.Ref<HTMLDivElement>;
}

class View extends React.Component<IProps> {
	public static defaultProps = {
		width: 1,
		elementRef: () => {},
	};

	public render() {
		const width = this.props.width || 1;

		return (
			<div
				className={cn({
					[this.props.classes.wrapper]: true,
					[this.props.className || '']: !!this.props.className,
				})}
				ref={this.props.elementRef}
				style={{width: width * 100 + '%'}}
			>
				{this.props.children}
			</div>
		)
	}
}

export default View;