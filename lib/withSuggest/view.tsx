import * as React from 'react';
import { IProps as ISuggestProps } from '../Suggest';

// tslint:disable-next-line:no-empty-interface
export interface IOuterProps { // @TODO правильно описать props
}
export interface IInnerProps extends IOuterProps {
	suggestInnerComponent: React.ComponentType<ISuggestProps>;
	suggestEditableComponent: React.ComponentType<any>;
	onComponentFocus: (e?: React.FocusEvent<HTMLInputElement | HTMLAnchorElement>) => void;
	onComponentBlur: (e?: React.FocusEvent<HTMLInputElement | HTMLAnchorElement>) => void;
	opened?: boolean;
	focused?: boolean;
	onSelect: (value: string, hiddenValue?: string) => void;
	value?: string; // @TODO: mix IEditableProps to Component
	hiddenValue?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class SuggestContainerView extends React.Component<IInnerProps> {
	public render() {
		const {
			suggestEditableComponent,
			suggestInnerComponent,
			onComponentFocus,
			onComponentBlur,
			opened = false,
			focused = false,
			onSelect,
			value,
			hiddenValue,
			...rest
		} = this.props;
		const Component = suggestEditableComponent;
		const Suggest = suggestInnerComponent;
	
		// @TODO: move inline style to class
		return (
			<span style={{ display: 'inline-block' }}>
				<Component {...rest} value={value} hiddenInputProps={{ value: hiddenValue }} onFocus={onComponentFocus} onBlur={onComponentBlur} />
				<Suggest onSelect={onSelect} visible={opened} value={value} />
			</span>
		);
	}
}

export default SuggestContainerView;