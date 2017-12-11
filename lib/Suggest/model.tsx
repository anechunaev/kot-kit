import * as React from 'react';
import withKeyEventHandler, { IKeyHandlerProps } from '../withKeyEventHandler';
import { IOuterProps as IViewProps } from './view';
import { IProps } from './index';

export interface IOuterProps {
	selectedIndex?: number;
	onSelect?: (value: string, hiddenValue?: string) => void;
	visible?: boolean;
	value?: string;
}
export interface IInnerProps extends IOuterProps {
	suggestInnerComponent: React.ComponentType<IViewProps & IKeyHandlerProps>;
}
export interface IState {
	selected: number;
}

class SuggestModel extends React.Component<IInnerProps, IState> {
	public static defaultProps = {
		onSelect: () => {},
	}

	constructor(props: IInnerProps) {
		super(props);

		this.state = {
			selected: props.selectedIndex || 0
		};
	}

	private changeSelected(delta: number): void {
		const count = React.Children.count(this.props.children);

		if (this.state.selected + delta > count - 1) {
			this.setState({ selected: this.state.selected + delta - count });
			return;
		}

		if (this.state.selected + delta < 0) {
			this.setState({ selected: count - this.state.selected + delta });
			return;
		}

		this.setState({ selected: this.state.selected + delta });
	}

	public render() {
		const { suggestInnerComponent } = this.props;
		const View = suggestInnerComponent;

		return (
			<View
				handlers={[
					{ key: 'ArrowUp', callback: () => this.changeSelected(-1) },
					{ key: 'ArrowDown', callback: () => this.changeSelected(1) },
				]}
				visible={this.props.visible}
			>
				{React.Children.map(
					this.props.children,
					(child, index) => React.cloneElement(child as React.ReactElement<any>, {
						key: index,
						selected: this.state.selected === index,
						onClick: this.props.onSelect,
						onMouseOver: () => this.setState({ selected: index })
					})
				)}
			</View>
		);
	}
}

export default (View: React.ComponentType<IViewProps>) => {
	const EnhancedView = withKeyEventHandler(View);

	return (props: IProps) => <SuggestModel suggestInnerComponent={EnhancedView} {...props} />
}