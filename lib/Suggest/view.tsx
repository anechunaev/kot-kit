import * as React from 'react';
import Panel from '../Panel';
import Group from '../Group';

export interface IOuterProps {
	visible?: boolean;
}
export interface IInnerProps extends IOuterProps {
	classes: Dictionary<string>;
}

class SuggestView extends React.Component<IInnerProps> {
	public render() {
		const { children, visible = false, classes } = this.props;
		return visible ? (
			<Panel className={classes.wrapper} withPadding={false} withMargin={false} sizeByContent>
				<Group vertical>
					{children}
				</Group>
			</Panel>
		) : null;
	}
}

export default SuggestView;