import * as React from 'react';
import * as cn from 'classnames';

interface IBaseProps {
	href?: string;
	target?: string;
	onClick?: (e: React.SyntheticEvent<HTMLButtonElement|HTMLAnchorElement>) => any;
	disabled?: boolean;
	active?: boolean;
	elementRef?: React.Ref<HTMLButtonElement|HTMLAnchorElement>;
	primary?: boolean;
}

export interface IProps extends IBaseProps {
	classes: Dictionary<string>;
}

interface IContainerProps extends IBaseProps {
	className?: string;
	children?: React.ReactNode;
}

const Container = ({ href, target, children, className, onClick, elementRef, disabled }: IContainerProps) => !!href ? (
	<a
		href={href}
		target={target}
		className={className}
		onClick={onClick}
		ref={elementRef}
	>
		{children}
	</a>
) : (
	<button
		className={className}
		onClick={onClick}
		ref={elementRef}
		disabled={disabled}
	>
		{children}
	</button>
);

class ButtonView extends React.PureComponent<IProps> {
	public static defaultProps = {
		onClick: () => {},
		elementRef: () => {},
		disabled: false,
		active: false,
		primary: false,
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
		} = this.props;

		return (
			<Container
				className={cn({
					[classes.wrapper]: true,
					[classes.disabled]: disabled,
					[classes.active]: active,
					[classes.primary]: primary,
				})}
				onClick={!disabled ? onClick : () => {}}
				href={href}
				target={target}
				elementRef={elementRef}
				disabled={disabled}
			>
				{children}
			</Container>
		);
	}
}

export default ButtonView;