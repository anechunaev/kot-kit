import * as React from 'react';
import { withStyles, StyleContextProvider } from 'provider';
import styles from './style';
import View, { IOuterProps as IViewProps } from './view';
import Model, { IOuterProps as IModelProps } from './model';

export type IProps = IModelProps & IViewProps;

const EnhancedView = Model(withStyles(styles)(View));

const Popup: React.SFC<IProps> = (props: IProps) => (
	<StyleContextProvider light={props.danger}>
		<EnhancedView {...props} />
	</StyleContextProvider>
);

export default Popup;