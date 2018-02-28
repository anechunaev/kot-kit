import { withStyles } from 'provider';
import styles from './style';
import View, { IOuterProps as IViewProps } from './view';

export type IProps = IViewProps;

export const defaultProps = {
	count: 8,
	width: 2,
	length: 6,
	innerRadius: 3,
	borderRadius: 0,
	className: '',
};

export default withStyles(styles)(View);