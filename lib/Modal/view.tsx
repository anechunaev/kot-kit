import * as React from 'react';
import cn from 'classnames';
import Modal from 'react-modal';

export interface IOuterProps {
	className?: string;	// @TODO move to default component interface
	isOpen: boolean;
}

export interface IInnerProps extends IOuterProps {
	classes: Dictionary<string>;
}

class ModalView extends React.Component<IInnerProps> {
	public render() {
		return (
			<Modal
				className={cn(this.props.className, {
					[this.props.classes.wrapper]: true,
				})}
				isOpen={this.props.isOpen}
			>
				{this.props.children}
			</Modal>
		);
	}
}

export default ModalView;