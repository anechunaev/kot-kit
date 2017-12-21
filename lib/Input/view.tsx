import * as React from 'react';
import cn from 'classnames';

export interface IProps {
	value?: string;
	defaultValue?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	invalid?: boolean;
	expanded?: boolean;
	type?: 'text' | 'password' | 'email' | 'tel' | 'number';
	placeholder?: string;
	classes: Dictionary<string>,
}

export interface IState {
	value: string;
}


class InputView extends React.Component<IProps, IState> {
	public static defaultProps = {
		type: "text",
	}

	constructor(props: IProps) {
		super(props);

		this.state = {
			value: props.value || props.defaultValue || ''
		}
	}
	
	private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (this.props.onChange) this.props.onChange(e);

		this.setState({
			value: e.target.value
		});
	}

	public componentWillReceiveProps(newProps: IProps) {
		if (newProps.value !== this.props.value && this.props.onChange) {
			const customEvent = {
				target: {
					value: newProps.value
				},
			};
			this.props.onChange(customEvent as React.ChangeEvent<HTMLInputElement>);
		}

		if (!!newProps.value) {
			this.setState({
				value: newProps.value
			})
		}
	}

	public render() {
		const { value, onChange, defaultValue, classes, invalid, expanded, ...rest } = this.props;

		const props = {
			className: cn({
				[classes.input]: true,
				[classes.invalid]: invalid,
				[classes.expanded]: expanded,
			}),
			value: this.state.value,
			onChange: this.onInputChange,
			...rest
		};

		return (
			<input defaultValue="" {...props} />
		)
	}
}


export default InputView;