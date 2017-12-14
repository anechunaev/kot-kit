import View from './view';
import Model, { IOuterProps as IModelProps } from './model';

export interface IProps extends IModelProps {
}

export default Model(View);