export interface IBaseOuterProps<T> {
	className?: string;
	elementRef?: React.Ref<T>;
}

export interface IBaseInnerProps {
	classes: Dictionary<string>;
}

export interface IEditableProps {

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