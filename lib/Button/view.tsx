import * as React from 'react';
import cn from 'classnames';
import { IWithIcons } from '../withIcons';

export interface IOuterProps extends IWithIcons {
	href?: string;
	target?: string;
	onClick?: (e: React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>) => any;
	disabled?: boolean;
	elementRef?: React.Ref<HTMLButtonElement | HTMLAnchorElement>;
	tabIndex?: number;
	expanded?: boolean;
	active?: boolean;
	primary?: boolean;
	toggled?: boolean;
	alternate?: boolean;
	className?: string;
}

export interface IInnerProps extends IOuterProps {
	classes: Dictionary<string>;
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
			active,
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
			alternate,
			iconSlotLeft,
			iconSlotRight,
		} = this.props;

		return (
			<Container
				className={cn({
					[classes.wrapper]: true,
					[classes.disabled]: disabled,
					[classes.active]: active,
					[classes.primary]: primary,
					[classes.expanded]: expanded,
					[classes.toggled]: toggled,
					[classes.alternate]: alternate,
				})}
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