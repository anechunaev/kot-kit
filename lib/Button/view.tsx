import * as React from 'react';
import cn from 'classnames';
import { IProps as IBaseProps } from './index';

export interface IProps extends IBaseProps {
	classes: Dictionary<string>;
}

const Container: React.SFC<IBaseProps> = ({ href, target, children, className, onClick, elementRef, disabled, tabIndex }) => !!href ? (
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

class ButtonView extends React.PureComponent<IProps> {
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
				{children}
			</Container>
		);
	}
}

export default ButtonView;