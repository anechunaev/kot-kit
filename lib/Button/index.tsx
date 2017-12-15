import * as React from 'react';
import { withStyles, StyleContextProvider } from 'provider';
import styles from './style';
import View, { IOuterProps as IViewProps } from './view';

const EnhancedView = withStyles(styles)(View);

export interface IProps extends IViewProps {
}

const Button: React.SFC<IProps> = (props: IProps) => (
	<StyleContextProvider light={props.primary}>
		<EnhancedView {...props} />
	</StyleContextProvider>
)

export default Button;