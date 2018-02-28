import View, { IOuterProps as IViewProps } from './view';
import Model, { IOuterProps as IModelProps } from './model';
import styles from './style';
import { withStyles } from 'provider';

export type IProps = IModelProps & IViewProps;

export default Model(withStyles(styles)(View));