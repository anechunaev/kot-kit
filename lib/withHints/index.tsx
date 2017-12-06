import * as React from 'react';

export type Hint = {
	value: any,
	hiddenValue?: any,
}

export interface IHintProps {
	onClick: (hint: Hint) => void;
}

export interface IInputProps {
	value?: string;
	defaultValue?: string;
	hiddenInputProps?: any;
	name?: string;
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
			hiddenValue: (props.hiddenInputProps || {}).value,
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
		const getHiddenValue = (props: IProps) => (props.hiddenInputProps || {}).value;
		if (this.props.value !== nextProps.value || getHiddenValue(this.props) !== getHiddenValue(nextProps)) {
			this.setState({
				value: nextProps.value,
				hiddenValue: getHiddenValue(nextProps),
			});
		}
	}

	public render() {
		const { withHintsComponents, withHintsInnerComponent, hiddenInputProps = {}, ...rest } = this.props;
		const Component = withHintsInnerComponent;
		const HintComponent = withHintsComponents;
		const hiddenProps = {
			...hiddenInputProps,
			value: this.state.hiddenValue,
		};

		return [
			<Component key="comp" {...rest} value={this.state.value} hiddenInputProps={hiddenProps} onChange={this.onComponentChange} />,
			<HintComponent key="hint" onClick={this.onHintClick} />,
		];
	}
}

export default (Hints: React.ComponentType<IHintProps>) =>
	(Component: React.ComponentType<IInputProps>) =>
	(props: IInputProps) => <WithHints {...props} withHintsComponents={Hints} withHintsInnerComponent={Component} />