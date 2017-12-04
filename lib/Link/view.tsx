import * as React from 'react';
import cn from 'classnames';

export interface IProps {
	pseudo?: boolean;
	className?: string;
	classes: Dictionary<string>;
}

class InputView extends React.PureComponent<IProps> {
	public static defaultProps = {
		pseudo: false,
		className: '',
	};

	public render() {
		const { classes, pseudo, children, className, ...rest } = this.props;
		return pseudo ? (
			<span
				className={cn(classes.base, classes.pseudo, className)}
				{...rest}
			>
				{children}
			</span>
		) : (
			<a
				className={cn(classes.base, className)}
				{...rest}
			>
				{children}
			</a>
		)
	}
}

export default InputView;