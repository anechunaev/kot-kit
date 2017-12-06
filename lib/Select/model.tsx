import * as React from 'react';
import { default as withKeyEventHandler } from '../withKeyEventHandler';
import { IOuterProps as IViewProps } from './view';

export interface IOuterProps {
	hiddenValue?: string;
	value: string;
	onClick?: (value: string, hiddenValue?: string) => void;
}

export interface IInnerProps extends IOuterProps, IViewProps {
	selectInnerComponentView: React.ComponentType<any>;
}

class SelectModel extends React.Component<IInnerProps> {
	public static defaultProps = {
		onClick: () => {},
	};

	private select = () => {
		if (this.props.selected && this.props.onClick) {
			this.props.onClick(this.props.value, this.props.hiddenValue);
		}
	}

	public render() {
		const {
			selectInnerComponentView,
			selected,
			className,
			children,
			onClick,
			value,
			hiddenValue,
			...rest
		} = this.props;
		const View = selectInnerComponentView;

		return (
			<View
				selected={selected}
				className={className}
				onSelect={this.select}
				handlers={[
					{ key: 'Enter', callback: this.select },
					{ key: 'Tab', callback: this.select, event: 'keydown' },
				]}
				{...rest}
			>
				{children}
			</View>
		)
	}
}

export default (View: React.ComponentType<IViewProps>) => {
	const EnhancedView = withKeyEventHandler(View);

	return (props: IOuterProps & IViewProps) => <SelectModel selectInnerComponentView={EnhancedView} {...props} />
}