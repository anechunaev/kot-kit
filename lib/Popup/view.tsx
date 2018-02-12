import * as React from 'react';
import cn from 'classnames';
import { Manager, Target, Popper, Arrow } from 'react-popper';
import Panel from '../Panel';

export interface IOuterProps {
	danger?: boolean;
	warning?: boolean;
	open?: boolean;
	position?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
	usePortal?: boolean;
	popupRef?: (n: HTMLElement) => void;
	targetRef?: (n: HTMLElement) => void;
	disabled?: boolean;

	targetClassName?: string;
}

export interface IInnerProps extends IOuterProps {
	classes: Dictionary<string>;
	className?: string;
}

export interface IState {
	open: boolean;
}

class PopupView extends React.Component<IInnerProps, IState> {
	public static defaultProps = {
		danger: false,
		warning: false,
		open: false,
		position: 'auto',
		usePortal: true,
		popupRef: () => {},
		targetRef: () => {},
		disabled: false,
	};

	public popupElement: HTMLElement;
	public targetElement: HTMLElement;
	//private isShadowMounting = false;
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

		this.state = { open: false };
	}

	private handleTargetClick = (e: React.MouseEvent<HTMLElement>) => {
		if (!this.props.disabled && !this.isElementInPopover(e.target as HTMLElement)) {
			this.setState({ open: !this.state.open });
		}
	};

	private isElementInPopover(element: Element) {
		return this.popupElement != null && this.popupElement.contains(element);
	}

	public render() {
		const { classes, className, targetClassName } = this.props;
		const { open } = this.state;
		const targetProps = {
			onClick: this.handleTargetClick,
			className: cn(targetClassName),
		};

		return (
			<Manager tag="span" className={className}>
				<Target {...targetProps} innerRef={this.targetRef}>
					{typeof this.props.children === "object" && this.props.children !== null ? this.props.children : null}
				</Target>
				<Popper
					innerRef={this.popupRef}
					placement="bottom"
					className={classes.wrapper}
				>
					{open && (
						<Panel
							className={cn({
								[classes.popup]: true,
								[classes.danger]: this.props.danger,
								[classes.warning]: this.props.warning,
							})}
						>
							Popper Content
							<Arrow />
						</Panel>
					)}
				</Popper>
			</Manager>
		);
	}
}

export default PopupView;