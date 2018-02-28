import * as React from 'react';
import { IOuterProps as IViewProps } from './view';
import { svg4everybody } from '../svg4everybody';

export interface IOuterProps {
	slot?: 'left' | 'right';
}

export interface IInnerProps extends IOuterProps, IViewProps {
	iconViewInnerComponent: React.ComponentType<IViewProps>;
}

class IconModel extends React.Component<IInnerProps> {
	public static defaultProps = {
		slot: 'left',
	};

	public componentDidMount() {
		// Polyfill for IE9+, Edge12, Android Browser <40, iOS6, iOS7, Safari6
		svg4everybody();
	}

	public render() {
		const { iconViewInnerComponent, slot, ...rest } = this.props;
		const View = iconViewInnerComponent;
		return (
			<View {...rest} />
		)
	}
}

export default (View: React.ComponentType<IViewProps>) =>
	(props: IOuterProps & IViewProps) => <IconModel {...props} iconViewInnerComponent={View} />