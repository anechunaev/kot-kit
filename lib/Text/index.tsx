import { withStyles } from 'provider';
import View, { IOuterProps as IViewProps } from './view';
import styles from './style';

export type IProps = IViewProps;

export default withStyles(styles)(View);