import * as React from 'react';
import cn from 'classnames';
import { IBaseInnerProps, IBaseOuterProps } from '../base';

export interface IOuterProps extends IBaseOuterProps<HTMLSpanElement> {
	header?: boolean;
	large?: boolean;
	extraLarge?: boolean;
	small?: boolean;
	extraSmall?: boolean;
	paragraph?: boolean;
}

export interface IInnerProps extends IBaseInnerProps, IOuterProps {
}

class TextView extends React.PureComponent<IInnerProps> {
	public render() {
		const {
			className,
			classes,
			theme,
			children,
			elementRef,
			header,
			paragraph,
			extraSmall,
			small,
			large,
			extraLarge,
			...rest
		} = this.props;
		return (
			<span
				ref={elementRef}
				className={cn({
					[className || '']: !!className,
					[classes.base]: true,
					[classes.header]: header,
					[classes.paragraph]: paragraph,
					[classes.extraSmall]: extraSmall,
					[classes.small]: small,
					[classes.large]: large,
					[classes.extraLarge]: extraLarge,
				})}
				{...rest}
			>
				{children}
			</span>
		)
	}
}

export default TextView;