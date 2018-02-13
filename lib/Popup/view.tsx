import * as React from 'react';
import cn from 'classnames';
import { Manager, Target, Popper, Arrow } from 'react-popper';
import Panel from '../Panel';
import Transition from 'react-transition-group/Transition';

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

const duration = 200;
const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 0,
	willChange: 'opacity',
};

const transitionStyles: Dictionary<any> = {
	entering: { opacity: 0 },
	entered: { opacity: 1 },
};

class PopupView extends React.Component<IInnerProps, IState> {
	public static defaultProps = {
		danger: false,
		warning: false,
		open: false,
		position: 'bottom',
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

	private handleClickOutside = (event: MouseEvent) => {
		if (this.popupElement && !this.popupElement.contains(event.target as HTMLElement)) {
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
		const { classes, className, targetClassName, position } = this.props;
		const { open } = this.state;
		const targetProps = {
			onClick: this.handleTargetClick,
			className: targetClassName,
		};

		return (
			<Manager tag="span" className={className}>
				<Target {...targetProps} innerRef={this.targetRef}>
					{typeof this.props.children === "object" && this.props.children !== null ? this.props.children : null}
				</Target>
				<Transition
					in={open}
					timeout={duration}
				>
					{(state: string) => (
						<Popper
							innerRef={this.popupRef}
							placement={position}
							className={classes.wrapper}
							style={{
								...defaultStyle,
								...transitionStyles[state],
							}}
						>
							{state !== "exited" && (
								<Panel
									withMargin={false}
									onClick={this.handleClickOutside}
									className={cn({
										[classes.popup]: true,
										[classes.danger]: this.props.danger,
										[classes.warning]: this.props.warning,
									})}
								>
									Popper Content<br />dfgadfgsd<br />adfgsdfg<br />Asdfgsdfg<br />dfgsdfgsd<br />zdfgsdf
								</Panel>
							)}
							<Arrow className={classes.arrow}>
								<svg style={{ display: 'block', padding: '0 15px' }} viewBox="0 0 20 7" width="20" height="7">
									<defs>
										<filter id="f" x="0" y="0">
											<feOffset result="o" in="SourceAlpha" dx="0" dy="5" />
											<feGaussianBlur result="b" in="o" stdDeviation="3" />
											<feBlend in="SourceGraphic" in2="b" mode="normal" />
										</filter>
									</defs>
									<path className={classes.arrowShape} d="M0,7C4,6,4,6,10,1C16,6,16,6,20,7" strokeWidth="1" filter="url(#f)" />
								</svg>
							</Arrow>
						</Popper>
					)}
				</Transition>
			</Manager>
		);
	}
}

export default PopupView;