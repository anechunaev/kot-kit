import * as React from 'react';
import { default as Text } from '../Text';

export interface IOuterProps {
	selected?: boolean;
	className?: string;
	onSelect: () => void;
}

export interface IInnerProps extends IOuterProps {
	classes: Dictionary<string>;
}

const SelectView: React.SFC<IInnerProps> = ({
	children,
	className,
	selected = false,
	classes,
	onSelect = () => {},
	...rest
}) => (
	<div
		onMouseDown={onSelect}
		className={`${classes.item} ${selected ? classes.selected : ''} ${className}`}
		{...rest}
	>
		<Text>{children}</Text>
	</div>
);

export default SelectView;