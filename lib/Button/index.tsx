import * as React from 'react';
import { withStyles, StyleContextProvider } from 'provider';
import styles from './style';
import View from './view';

const EnhancedView = withStyles(styles)(View);

export interface IProps {
	href?: string;
	target?: string;
	onClick?: (e: React.SyntheticEvent<HTMLButtonElement|HTMLAnchorElement>) => any;
	disabled?: boolean;
	elementRef?: React.Ref<HTMLButtonElement|HTMLAnchorElement>;
	tabIndex?: number;
	expanded?: boolean;
	active?: boolean;
	primary?: boolean;
	toggled?: boolean;
	alternate?: boolean;
	className?: string;
}

const Button: React.SFC<IProps> = (props: IProps) => (
	<StyleContextProvider light={props.primary}>
		<EnhancedView {...props} />
	</StyleContextProvider>
)

export default Button;