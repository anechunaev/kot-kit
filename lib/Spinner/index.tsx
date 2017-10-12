import { withStyles } from 'provider';
import styles from './style';
import View from './view';

export interface IProps {
	count?: number;
	width?: number;
	length?: number;
	borderRadius?: number;
	innerRadius?: number;
	className?: string;
}

export const defaultProps = {
	count: 8,
	width: 2,
	length: 6,
	innerRadius: 3,
	borderRadius: 0,
	className: '',
};

export default withStyles(styles)(View);