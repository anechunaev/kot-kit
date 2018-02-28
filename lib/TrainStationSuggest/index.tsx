import Model, { IOuterProps as IModelProps } from './model';
import View, { IOuterProps as IViewProps } from './view';

export type IProps = IModelProps & IViewProps;

export default Model(View);