import View from './view';
import Model, { IOuterProps as IModelProps } from './model';
import styles from './style';
import { withStyles } from 'provider';

export type IProps = IModelProps;

export default Model(withStyles(styles)(View));