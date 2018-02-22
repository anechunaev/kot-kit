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
export const KnobBoolean = withStyles(style)(({ label, value, onClick, classes }: IBooleanProps) => (
	<View className={classes.row}>
		<View className={classes.cell + ' ' + classes.cellFirst}>
			<Text>{label}:</Text>
		</View>
		<View className={classes.cell}>
			<input type="checkbox" defaultChecked={value} onClick={onClick} />
		</View>
	</View>
));


export interface ITextProps extends IKnob<string> {
	onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}
export const KnobText = withStyles(style)(({ label, value, onChange, classes }: ITextProps) => (
	<View className={classes.row}>
		<View className={classes.cell + ' ' + classes.cellFirst}>
			<Text>{label}:</Text>
		</View>
		<View className={classes.cell}>
			<Input type="text" onChange={onChange} defaultValue={value} />
		</View>
	</View>
));


export interface INumberProps extends IKnob<number> {
	onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}
export const KnobNumber = withStyles(style)(({ label, value, onChange, classes }: INumberProps) => (
	<View className={classes.row}>
		<View className={classes.cell + ' ' + classes.cellFirst}>
			<Text>{label}:</Text>
		</View>
		<View className={classes.cell}>
			<Input type="number" onChange={onChange} defaultValue={value.toString()} />
		</View>
	</View>
));


export interface IObjectProps extends IKnob<Dictionary<any>> {
	onChange: (e: React.SyntheticEvent<HTMLTextAreaElement>) => void;
}
export const KnobObject = withStyles(style)(({ label, value, onChange, classes }: IObjectProps) => (
	<View className={classes.row}>
		<View className={classes.cell + ' ' + classes.cellFirst}>
			<Text>{label}:</Text>
		</View>
		<View className={classes.cell}>
			<textarea onChange={onChange} defaultValue={JSON.stringify(value)} />
		</View>
	</View>
));


export interface IArrayProps extends IKnob<string> {
	onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}
export const KnobArray = withStyles(style)(({ label, value, onChange, classes }: IArrayProps) => (
	<View className={classes.row}>
		<View className={classes.cell + ' ' + classes.cellFirst}>
			<Text>{label}:</Text>
		</View>
		<View className={classes.cell}>
			<Input type="text" onChange={onChange} defaultValue={value.toString()} />
		</View>
	</View>
));


export interface ISelectProps extends IKnob<string> {
	onChange: (e: React.SyntheticEvent<HTMLSelectElement>) => void;
	list: Dictionary<any>;
}
export const KnobSelect = withStyles(style)(({ label, list, value, onChange, classes }: ISelectProps) => (
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
));