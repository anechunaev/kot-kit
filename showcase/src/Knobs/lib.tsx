import * as React from 'react';

import {
	Input,
	Text,
	View,
	withStyles,
} from 'kot-kit';

import style from './styles';

export interface IKnob<T> {
	label: string;
	value: T;
	options?: Dictionary<any>;
	classes: Dictionary<any>;
}

export interface IBooleanProps extends IKnob<boolean> {
	onClick: () => void;
}
class KnobBoolean extends React.PureComponent<IBooleanProps> {
	public render() {
		const { label, value, onClick, classes } = this.props;
		return (
			<View className={classes.row}>
				<View className={classes.cell + ' ' + classes.cellFirst}>
					<Text>{label}:</Text>
				</View>
				<View className={classes.cell}>
					<input type="checkbox" defaultChecked={value} onClick={onClick} />
				</View>
			</View>
		)
	}
}
const EnhancedKnobBoolean = withStyles(style)(KnobBoolean);
export { EnhancedKnobBoolean as KnobBoolean };


export interface ITextProps extends IKnob<string> {
	onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}
class KnobText extends React.PureComponent<ITextProps> {
	public render() {
		const { label, value, onChange, classes } = this.props;
		return (
			<View className={classes.row}>
				<View className={classes.cell + ' ' + classes.cellFirst}>
					<Text>{label}:</Text>
				</View>
				<View className={classes.cell}>
					<Input type="text" onChange={onChange} defaultValue={value} />
				</View>
			</View>
		);
	}
}
const EnhancedKnobText = withStyles(style)(KnobText);
export { EnhancedKnobText as KnobText };


export interface INumberProps extends IKnob<number> {
	onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}
class KnobNumber extends React.PureComponent<INumberProps> {
	public render() {
		const { label, value, onChange, classes } = this.props;
		return (
			<View className={classes.row}>
				<View className={classes.cell + ' ' + classes.cellFirst}>
					<Text>{label}:</Text>
				</View>
				<View className={classes.cell}>
					<Input type="number" onChange={onChange} defaultValue={value.toString()} />
				</View>
			</View>
		);
	}
}
const EnhancedKnobNumber = withStyles(style)(KnobNumber);
export { EnhancedKnobNumber as KnobNumber };


export interface IObjectProps extends IKnob<Dictionary<any>> {
	onChange: (e: React.SyntheticEvent<HTMLTextAreaElement>) => void;
}
class KnobObject extends React.PureComponent<IObjectProps> {
	public render() {
		const { label, value, onChange, classes } = this.props;
		return (
			<View className={classes.row}>
				<View className={classes.cell + ' ' + classes.cellFirst}>
					<Text>{label}:</Text>
				</View>
				<View className={classes.cell}>
					<textarea onChange={onChange} defaultValue={JSON.stringify(value)} />
				</View>
			</View>
		);
	}
}
const EnhancedKnobObject = withStyles(style)(KnobObject);
export { EnhancedKnobObject as KnobObject };


export interface IArrayProps extends IKnob<string> {
	onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}
class KnobArray extends React.PureComponent<IArrayProps> {
	public render() {
		const { label, value, onChange, classes } = this.props;
		return (
			<View className={classes.row}>
				<View className={classes.cell + ' ' + classes.cellFirst}>
					<Text>{label}:</Text>
				</View>
				<View className={classes.cell}>
					<Input type="text" onChange={onChange} defaultValue={value.toString()} />
				</View>
			</View>
		);
	}
}
const EnhancedKnobArray = withStyles(style)(KnobArray);
export { EnhancedKnobArray as KnobArray };


export interface ISelectProps extends IKnob<string> {
	onChange: (e: React.SyntheticEvent<HTMLSelectElement>) => void;
	list: Dictionary<any>;
}
class KnobSelect extends React.PureComponent<ISelectProps> {
	public render() {
		const { label, list, value, onChange, classes } = this.props;
		return (
			<View className={classes.row}>
				<View className={classes.cell + ' ' + classes.cellFirst}>
					<Text>{label}:</Text>
				</View>
				<View className={classes.cell}>
					<select onChange={onChange} defaultValue={value}>
						{(() => {
							const result: React.ReactElement<any>[] = [];
							let index = 0;
							for (const innerKey in list) {
								if (list.hasOwnProperty(innerKey)) {
									result.push(
										<option key={index} value={innerKey}>{innerKey}</option>
									)
								}
								index++;
							}
							return result;
						})()}
					</select>
				</View>
			</View>
		);
	}
}
const EnhancedKnobSelect = withStyles(style)(KnobSelect);
export { EnhancedKnobSelect as KnobSelect };