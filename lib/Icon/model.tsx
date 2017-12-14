import * as React from 'react';
import { IOuterProps as IViewProps } from './view';
import { svg4everybody } from '../svg4everybody';

export interface IOuterProps extends IViewProps {
}

export interface IInnerProps extends IOuterProps {
	iconViewInnerComponent: React.ComponentType<IViewProps>;
}

class IconModel extends React.Component<IInnerProps> {
	private svgNode: SVGSVGElement;

	private getSvgNode = (node: SVGSVGElement) => this.svgNode = node;

	public componentDidMount() {
		// Polyfill for IE9+, Edge12, Android Browser <40, iOS6, iOS7, Safari6
		svg4everybody();
	}

	public render() {
		const { iconViewInnerComponent, ...rest } = this.props;
		const View = iconViewInnerComponent;
		return (
			<View {...rest} elementRef={this.getSvgNode} />
		)
	}
}

export default (View: React.ComponentType<IViewProps>) =>
	(props: IOuterProps) => <IconModel {...props} iconViewInnerComponent={View} />