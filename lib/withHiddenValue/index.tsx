import * as React from 'react';
import { hashCode } from '../dataHelpers';

export interface IHiddenProps {
	elementRef?: (node: HTMLInputElement) => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
	name?: string;
}

export interface IEditableProps {
	value?: string;
	defaultValue?: string;
	name?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}

export interface IOuterProps extends IEditableProps {
	hiddenInputProps?: IHiddenProps;
}

export interface IProps extends IOuterProps {
	withHiddenValueInnerComponent: React.ComponentType<any>;
}

export interface IState {
	hiddenValue: string;
}

class WithHiddenValue extends React.Component<IProps, IState> {
	private hash = '';

	constructor(props: IProps) {
		super(props);

		if (!(props.hiddenInputProps || {}).name) {
			this.hash = hashCode(Math.random().toString());
		}

		this.state = {
			hiddenValue: (props.hiddenInputProps || {}).value || props.value || props.defaultValue || ''
		};
	}

	private setHiddenValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			hiddenValue: e.target.value
		})
	}

	public componentWillReceiveProps(newProps: IProps) {
		if (!!(newProps.hiddenInputProps || {}).value) {
			this.setState({
				hiddenValue: (newProps.hiddenInputProps || {}).value || ''
			});
		}
	}

	public render() {
		const { hiddenInputProps = {}, withHiddenValueInnerComponent, ...rest } = this.props;
		const Component = withHiddenValueInnerComponent;
		const hiddenName = hiddenInputProps.name || (rest.name || Component.name) + `_hidden_${this.hash}`;

		return [
			<Component key="comp" onChange={this.setHiddenValue} {...rest} />,
			<input key="hidden" type="hidden" {...hiddenInputProps} name={hiddenName} value={this.state.hiddenValue} />,
		];
	}
}

export default (Component: React.ComponentType<IEditableProps>) =>
	(props: IOuterProps) => <WithHiddenValue {...props} withHiddenValueInnerComponent={Component} />