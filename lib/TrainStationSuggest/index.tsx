import Model, { IOuterProps as IModelProps } from './model';
import View, { IOuterProps as IViewProps } from './view';

export interface IProps extends IModelProps, IViewProps {
}

export default Model(View);