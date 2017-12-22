import * as React from 'react';
import cn from 'classnames';
import { IWithIcons } from '../withIcons';

export interface IOuterProps extends IWithIcons {
	pseudo?: boolean;
	className?: string;
}

export interface IInnerProps extends IOuterProps {
	classes: Dictionary<string>;
	children: React.ReactChildren;
}

const getChildren = ({ iconSlotLeft, iconSlotRight, classes, children }: IInnerProps) => {
	return [
		!!iconSlotLeft && (
			<div className={classes.slotLeft}>{iconSlotLeft}</div>
		),
		children,
		!!iconSlotRight && (
			<div className={classes.slotRight}>{iconSlotRight}</div>
		),
	]
}

class InputView extends React.PureComponent<IInnerProps> {
	public static defaultProps = {
		pseudo: false,
		className: '',
	};

	public render() {
		const { classes, pseudo, children, className, iconSlotLeft, iconSlotRight, ...rest } = this.props;
		return pseudo ? (
			<span
				className={cn(classes.base, classes.pseudo, className)}
				{...rest}
			>
				{getChildren(this.props)}
			</span>
		) : (
			<a
				className={cn(classes.base, className)}
				{...rest}
			>
				{getChildren(this.props)}
			</a>
		)
	}
}

export default InputView;