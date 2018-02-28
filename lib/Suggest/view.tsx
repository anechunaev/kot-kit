import * as React from 'react';
import Panel from '../Panel';
import Group from '../Group';
import { IBaseInnerProps, IBaseOuterProps } from '../base';

export interface IOuterProps extends IBaseOuterProps<HTMLDivElement> {
	visible?: boolean;
}
export interface IInnerProps extends IBaseInnerProps, IOuterProps {
}

class SuggestView extends React.Component<IInnerProps> {
	public render() {
		const { children, visible = false, classes, ...rest } = this.props;
		return visible ? (
			<Panel className={classes.wrapper} withPadding={false} withMargin={false} sizeByContent {...rest}>
				<Group vertical withMargin={false}>
					{children}
				</Group>
			</Panel>
		) : null;
	}
}

export default SuggestView;