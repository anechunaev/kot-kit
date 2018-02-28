import * as React from 'react';
import { IOuterProps as IViewProps } from './view';
import { IProps } from './index';

export interface IOuterProps {
	open?: boolean;
	disabled?: boolean;
}

export interface IInnerProps extends IViewProps, IOuterProps {
	popupViewInnerComponent: React.ComponentType<IViewProps>;
}

export interface IState {
	open: boolean;
}

class PopupModel extends React.Component<IInnerProps, IState> {
	public static defaultProps = {
		open: false,
		disabled: false,
	};

	public popupElement: HTMLElement | null = null;
	public targetElement: HTMLElement | null = null;

	private popupRef = (node: HTMLElement) => {
		this.popupElement = node;
		this.props.popupRef && this.props.popupRef(node);
	}
	private targetRef = (node: HTMLElement) => {
		this.targetElement = node;
		this.props.targetRef && this.props.targetRef(node);
	}

	constructor(props: IInnerProps) {
		super(props);

		this.state = {
			open: props.open || false,
		};
	}

	private handleTargetClick = (e: React.MouseEvent<HTMLElement>) => {
		if (!this.props.disabled && !this.isElementInPopover(e.target as HTMLElement)) {
			this.setState({ open: !this.state.open });
		}
	};

	private handleClickOutside = (event: MouseEvent) => {
		if (!this.props.disabled && !this.isElementInPopover(event.target as HTMLElement)) {
			this.setState({ open: false });
		}
	}

	private handleCloseButtonClick = () => {
		if (!this.props.disabled) {
			this.setState({ open: false });
		}
	}

	private isElementInPopover(element: Element) {
		return this.popupElement != null && this.popupElement.contains(element);
	}

	public componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	public componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	public render() {
		const { popupViewInnerComponent, open, ...rest } = this.props;
		const View = popupViewInnerComponent;

		const viewInnerProps = {
			popupRef: this.popupRef,
			targetRef: this.targetRef,
			handleTargetClick: this.handleTargetClick,
			handleClickOutside: this.handleClickOutside,
			handleCloseButtonClick: this.handleCloseButtonClick,
			open: this.state.open,
		};

		return (
			<View {...viewInnerProps} {...rest} />
		);
	}
}

export default (View: React.ComponentType<IViewProps>) =>
	(props: IProps) => <PopupModel {...props} popupViewInnerComponent={View} />