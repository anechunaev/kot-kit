import * as React from 'react';

export type Hint = {
	value: any,
	hiddenValue?: any,
}

export interface IHintProps {
	onClick: (hint: Hint) => void;
}

export interface IInputProps {
	value?: any;
	hiddenValue?: any;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IProps extends IInputProps {
	withHintsComponents: React.ComponentType<IHintProps>;
	withHintsInnerComponent: React.ComponentType<IInputProps>;
}

class WithHints extends React.Component<IProps, Hint> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			value: props.value,
			hiddenValue: props.hiddenValue,
		}
	}

	private onHintClick = (hint: Hint) => () => this.setState(hint)

	private onComponentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (this.props.onChange) {
			this.props.onChange(e);
		}

		this.setState({
			value: e.target.value,
			hiddenValue: e.target.value,
		})
	}

	public componentWillReceiveProps(nextProps: IProps) {
		if (this.props.value !== nextProps.value || this.props.hiddenValue !== nextProps.hiddenValue) {
			this.setState({
				value: nextProps.value,
				hiddenValue: nextProps.hiddenValue,
			});
		}
	}

	public render() {
		const { withHintsComponents, withHintsInnerComponent, ...rest } = this.props;
		const Component = withHintsInnerComponent;
		const Hint = withHintsComponents;

		return [
			<Component key="comp" {...rest} value={this.state.value} hiddenValue={this.state.hiddenValue} onChange={this.onComponentChange} />,
			<Hint key="hint" onClick={this.onHintClick} />,
		];
	}
}

export default (Hints: React.ComponentType<IHintProps>) =>
	(Component: React.ComponentType<IInputProps>) =>
	(props: IInputProps) => <WithHints {...props} withHintsComponents={Hints} withHintsInnerComponent={Component} />