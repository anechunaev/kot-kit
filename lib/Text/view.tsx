import * as React from 'react';
import * as cn from 'classnames';

export interface IProps {
	classes: Dictionary<string>;
	className?: string;
	header?: boolean;
	large?: boolean;
	extraLarge?: boolean;
	small?: boolean;
	extraSmall?: boolean;
	paragraph?: boolean;
}

class TextView extends React.PureComponent<IProps> {
	public render() {
		return (
			<span
				className={cn({
					[this.props.className || '']: !!this.props.className,
					[this.props.classes.base]: true,
					[this.props.classes.header]: this.props.header,
					[this.props.classes.paragraph]: this.props.paragraph,
					[this.props.classes.extraSmall]: this.props.extraSmall,
					[this.props.classes.small]: this.props.small,
					[this.props.classes.large]: this.props.large,
					[this.props.classes.extraLarge]: this.props.extraLarge,
				})}
			>
				{this.props.children}
			</span>
		)
	}
}

export default TextView;