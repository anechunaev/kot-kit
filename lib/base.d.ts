export interface IBaseOuterProps<T> {
	className?: string;
	elementRef?: React.Ref<T>;
	theme?: any; // @TODO описать тему
}

export interface IBaseInnerProps {
	classes: Dictionary<string>;
}

export interface IEditableProps<T> {
	value?: string;
	defaultValue?: string;
	onChange?: (e: React.ChangeEvent<T>) => void;
	onFocus?: (e: React.FocusEvent<T>) => void;
	onBlur?: (e: React.SyntheticEvent<T>) => void;
}

export interface ISelectableProps {

}

export interface IClickableProps<T> {
	onClick?: (e: React.SyntheticEvent<T>) => void;
}

export interface IPassiveProsp {

}

export interface ITextProps {

}