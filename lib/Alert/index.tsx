import * as React from 'react';
import { withStyles, StyleContextProvider } from 'provider';
import styles from './style';
import View, { IOuterProps as IViewProps } from './view';

export interface IProps extends IViewProps {
}

const EnhancedView = withStyles(styles)(View);

const Alert: React.SFC<IProps> = (props: IProps) => (
	<StyleContextProvider light={props.danger}>
		<EnhancedView {...props} />
	</StyleContextProvider>
);

export default Alert;