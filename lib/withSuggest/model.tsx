import * as React from 'react';
import withKeyEventHandler, { IKeyHandlerProps } from '../withKeyEventHandler';
import { IInnerProps as IViewInnerProps } from './view';
import { IProps as ISuggestProps } from '../Suggest';

export interface IOuterProps { // @TODO: IEditableProps
	onOpen?: () => void;
	onClose?: () => void;
	onFocus?: () => void;
	onBlur?: () => void;
	value?: string;
	placeholder?: string;
	hiddenValue?: string;
	defaultValue?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface ICurriedProps extends IOuterProps {
	suggestEditableComponent: React.ComponentType<any>;
	suggestInnerComponent: React.ComponentType<ISuggestProps>;
}
export interface IInnerProps extends ICurriedProps {
	withSuggestInnerComponent: React.ComponentType<IViewInnerProps & IKeyHandlerProps>;
}
export interface IState {
	opened: boolean;
	focused: boolean;
	value: string | undefined;
	hiddenValue: string | undefined;
}

class WithSuggest extends React.Component<IInnerProps, IState> {
	constructor(props: IInnerProps) {
		super(props);

		this.state = {
			opened: false,
			focused: false,
			value: props.value || props.defaultValue || '',
			hiddenValue: props.hiddenValue,
		}
	}

	private toggleOpened = (value: boolean) => {
		this.setState({ opened: value });

		const handler = value ? this.props.onOpen || (() => {}) : this.props.onClose || (() => {});
		handler();
	}

	private toggleFocused = (value: boolean) => {
		this.setState({ focused: value });

		const handler = value ? this.props.onFocus || (() => {}) : this.props.onBlur || (() => {});
		handler();
	}

	private onSelect = (value: string, hiddenValue?: string) => {
		this.setState({ value, hiddenValue });
		this.close();
	}

	private onComponentFocus = () => {
		this.open();
		this.toggleFocused(true);
	}

	private onComponentBlur = () => {
		this.close();
		this.toggleFocused(false);
	}

	private handleKeyClose = () => {
		if (this.state.opened) {
			this.close();
		} else {
			if (this.state.focused) {
				this.open();
			}
		}
	}

	private handleOpen = () => {
		if (this.state.focused && !this.state.opened) {
			this.open();
		}
	}

	private open = () => {
		if (!this.state.opened) {
			this.toggleOpened(true);
		}
	}

	private close = () => {
		if (this.state.opened) {
			this.toggleOpened(false);
		}
	}

	public componentWillReceiveProps(nextProps: IInnerProps) {
		if (this.props.value !== nextProps.value || this.props.hiddenValue !== nextProps.hiddenValue) {
			this.setState({
				value: nextProps.value,
				hiddenValue: nextProps.hiddenValue,
			});
		}
	}

	private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (this.props.onChange) {
			this.props.onChange(e);
		}

		this.setState({
			value: e.target.value
		});
	}

	public render() {
		const { withSuggestInnerComponent, ...rest } = this.props;
		const View = withSuggestInnerComponent;
		return (
			<View
				onComponentFocus={this.onComponentFocus}
				onComponentBlur={this.onComponentBlur}
				onSelect={this.onSelect}
				onChange={this.onChange}
				handlers={[
					{ key: 'Escape', callback: this.handleKeyClose },
					{ key: 'ArrowUp', callback: this.handleOpen },
					{ key: 'ArrowDown', callback: this.handleOpen },
				]}
				{...rest}
				{...this.state}
			/>
		);
	}
}


export default (View: React.ComponentType<IViewInnerProps>) => {
	const EnhancedView = withKeyEventHandler(View);

	return (props: ICurriedProps) => <WithSuggest withSuggestInnerComponent={EnhancedView} {...props} />
}