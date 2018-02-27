import * as React from 'react';
import cn from 'classnames';
import { IWithIcons } from '../withIcons';
import {
	IBaseInnerProps,
	IBaseOuterProps,
	IClickableProps,
	//IEditableProps,
} from '../base';

export interface IOuterProps extends
	IBaseOuterProps<HTMLButtonElement | HTMLAnchorElement>,
	IClickableProps<HTMLButtonElement | HTMLAnchorElement>,
	IWithIcons
{
	href?: string;
	target?: string;
	disabled?: boolean;
	tabIndex?: number;
	expanded?: boolean;
	primary?: boolean;
	toggled?: boolean;
}

export interface IInnerProps extends IBaseInnerProps, IOuterProps {
}

const Container: React.SFC<IOuterProps> = ({ href, target, children, className, onClick, elementRef, disabled, tabIndex }) => !!href ? (
	<a
		href={href}
		target={target}
		className={className}
		onClick={onClick}
		ref={elementRef}
		tabIndex={tabIndex}
	>
		{children}
	</a>
) : (
	<button
		className={className}
		onClick={onClick}
		ref={elementRef}
		disabled={disabled}
		tabIndex={tabIndex}
	>
		{children}
	</button>
);

class ButtonView extends React.PureComponent<IInnerProps> {
	public static defaultProps = {
		onClick: () => {},
		elementRef: () => {},
		disabled: false,
		active: false,
		primary: false,
		expanded: false,
	}

	public render() {
		const {
			children,
			classes,
			disabled,
			href,
			onClick,
			elementRef,
			target,
			primary,
			tabIndex,
			expanded,
			toggled,
			iconSlotLeft,
			iconSlotRight,
			className,
		} = this.props;

		return (
			<Container
				className={cn({
					[classes.wrapper]: true,
					[classes.disabled]: disabled,
					[classes.primary]: primary,
					[classes.expanded]: expanded,
					[classes.toggled]: toggled,
				}, className)}
				onClick={!disabled ? onClick : () => {}}
				href={href}
				target={target}
				elementRef={elementRef}
				disabled={disabled}
				tabIndex={tabIndex}
			>
				{!!iconSlotLeft && (
					<div className={classes.slotLeft}>{iconSlotLeft}</div>
				)}
				<div className={classes.slotContent}>{children}</div>
				{!!iconSlotRight && (
					<div className={classes.slotRight}>{iconSlotRight}</div>
				)}
			</Container>
		);
	}
}

export default ButtonView;