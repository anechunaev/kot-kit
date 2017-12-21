import * as React from 'react';
import Model, { IOuterProps as IModelProps } from './model';
import View from './view';
import { IProps as ISuggestProps } from '../Suggest';

export type IProps = IModelProps;

const WithSuggest = Model(View);

export default (Suggest: React.ComponentType<ISuggestProps>) =>
	(Component: React.ComponentType<any>) => // @TODO: IEditableProps
	(props: IProps) => <WithSuggest {...props} suggestEditableComponent={Component} suggestInnerComponent={Suggest} />