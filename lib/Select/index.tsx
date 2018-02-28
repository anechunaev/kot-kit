import { withStyles } from 'provider';
import styles from './style';
import View, { IOuterProps as IViewProps } from './view';
import Model, { IOuterProps as IModelProps } from './model';

export type IProps = IModelProps & IViewProps;

export default Model(withStyles(styles)(View));