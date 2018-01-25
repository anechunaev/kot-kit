import { withStyles } from 'provider';
import styles from './style';
import View, { IOuterProps as IViewProps } from './view';

export interface IProps extends IViewProps {
}

export default withStyles(styles)(View);