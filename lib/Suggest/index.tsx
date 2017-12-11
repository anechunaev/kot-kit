import { withStyles } from 'provider';
import styles from './style';
import View, { IOuterProps as IViewProps } from './view';
import Model, { IOuterProps as IModelProps } from './model';

export interface IProps extends IModelProps, IViewProps {
}

const Suggest: React.ComponentType<IProps> = Model(withStyles(styles)(View));
export default Suggest;