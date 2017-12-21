import View from './view';
import Model, { IOuterProps as IModelProps } from './model';

export type IProps = IModelProps;

export default Model(View);