import styles from './style';
import View, { IOuterProps as IViewProps } from './view';
import { withStyles } from 'provider';

export type IProps = IViewProps;

export default withStyles(styles)(View);