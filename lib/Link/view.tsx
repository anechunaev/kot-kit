import * as React from 'react';
import cn from 'classnames';
import { IWithIcons } from '../withIcons';
import { IBaseInnerProps, IBaseOuterProps } from '../base';

export type CustomLink = HTMLSpanElement | HTMLAnchorElement;

export interface IOuterProps extends
	IBaseOuterProps<CustomLink>,
	IWithIcons {
	pseudo?: boolean;
}

export interface IInnerProps extends IBaseInnerProps, IOuterProps {
}

const getChildren = ({ iconSlotLeft, iconSlotRight, classes, children }: IInnerProps & React.Props<CustomLink>) => [
	!!iconSlotLeft && (
		<div key="slotLeft" className={classes.slotLeft}>{iconSlotLeft}</div>
	),
	children,
	!!iconSlotRight && (
		<div key="slotRight" className={classes.slotRight}>{iconSlotRight}</div>
	),
];

class InputView extends React.PureComponent<IInnerProps> {
	public static defaultProps = {
		pseudo: false,
		className: '',
	};

	public render() {
		const { classes, pseudo, children, className, iconSlotLeft, iconSlotRight, theme, ...rest } = this.props;
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
		);
	}
}

export default InputView;