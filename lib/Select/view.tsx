import * as React from 'react';
import { IBaseInnerProps, IBaseOuterProps } from '../base';

export interface IOuterProps extends IBaseOuterProps<HTMLDivElement> {
	selected?: boolean;
	onSelect?: () => void;
}

export interface IInnerProps extends IOuterProps, IBaseInnerProps {
}
class SelectView extends React.PureComponent<IInnerProps> {
	public static defaultProps = {
		selected: false,
		onSelect: () => {},
	};

	public render() {
		const {
			children,
			className,
			selected,
			classes,
			onSelect,
			elementRef,
			theme,
			...rest
		} = this.props;

		return (
			<div
				ref={elementRef}
				onMouseDown={onSelect}
				className={`${classes.item} ${selected ? classes.selected : ''} ${className}`}
				{...rest}
			>
				{children}
			</div>
		);
	}
}

export default SelectView;