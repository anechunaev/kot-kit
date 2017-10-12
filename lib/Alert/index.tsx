import * as React from 'react';
import { withStyles, StyleContextProvider } from 'provider';
import styles from './style';
import View from './view';

export interface IProps {
	className?: string;
	withMargin?: boolean;
	danger?: boolean;
	title?: string;
}

const EnhancedView = withStyles(styles)(View);

const Alert: React.SFC<IProps> = (props: IProps) => (
	<StyleContextProvider light={props.danger}>
		<EnhancedView {...props} />
	</StyleContextProvider>
);

export default Alert;