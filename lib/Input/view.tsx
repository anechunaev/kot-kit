import * as React from 'react';
import cn from 'classnames';
import { IWithIcons } from '../withIcons';

export interface IOuterProps extends IWithIcons {
	value?: string;
	defaultValue?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	invalid?: boolean;
	expanded?: boolean;
	type?: 'text' | 'password' | 'email' | 'tel' | 'number';
	placeholder?: string;
	className?: string; // @TODO в базовый интерфейс
}

export interface IInnerProps extends IOuterProps {
	classes: Dictionary<string>,
	theme?: any, // @TODO разобраться, откуда появилась
	children?: React.ReactNode | React.ReactNode[]; // @TODO React d.ts patch
}

export interface IState {
	value: string;
}


class InputView extends React.Component<IInnerProps, IState> {
	public static defaultProps = {
		type: "text",
	}

	constructor(props: IInnerProps) {
		super(props);

		this.state = {
			value: props.value || props.defaultValue || ''
		};
	}
	
	private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (this.props.onChange) this.props.onChange(e);

		this.setState({
			value: e.target.value
		});
	}

	public componentWillReceiveProps(newProps: IInnerProps) {
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
		const {
			iconSlotLeft,
			iconSlotRight,
			value,
			onChange,
			defaultValue,
			classes,
			invalid,
			expanded,
			theme,
			className,
			...rest
		} = this.props;

		const inputProps = {
			className: cn({
				[classes.input]: true,
				[classes.invalid]: invalid,
				[classes.expanded]: expanded,
			}, className),
			value: this.state.value,
			onChange: this.onInputChange,
			...rest
		};

		return (
			<div
				className={classes.wrapper}
			>
				{!!iconSlotLeft && (
					<div className={classes.slotLeft}>{iconSlotLeft}</div>
				)}
				<input {...inputProps} />
				{!!iconSlotRight && (
					<div className={classes.slotRight}>{iconSlotRight}</div>
				)}
			</div>
		)
	}
}


export default InputView;