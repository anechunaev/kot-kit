import * as React from 'react';
import cn from 'classnames';
import { Manager, Target, Popper, Arrow } from 'react-popper';
import Panel from '../Panel';
import Icon from '../Icon';
import Transition from 'react-transition-group/Transition';

export interface IOuterProps {
	danger?: boolean;
	warning?: boolean;
	position?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
	usePortal?: boolean;
	popupRef?: (n: HTMLElement) => void;
	targetRef?: (n: HTMLElement) => void;
	targetElement: React.ReactElement<any>;
	targetClassName?: string;
	contentClassName?: string;
	withCloseButton?: boolean;
}

export interface IInnerProps extends IOuterProps {
	classes: Dictionary<string>;
	className?: string;
	open: boolean;
	handleTargetClick: () => void;
	handleClickOutside: () => void;
	handleCloseButtonClick: () => void;
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

class PopupView extends React.PureComponent<IInnerProps> {
	public static defaultProps = {
		danger: false,
		warning: false,
		position: 'bottom',
		usePortal: true,
		popupRef: () => {},
		targetRef: () => {},
		withCloseButton: false,
	};

	public render() {
		const {
			classes,
			className,
			targetClassName,
			contentClassName,
			position,
			open,
			danger,
			warning,
			targetRef,
			popupRef,
			targetElement,
			handleClickOutside,
			handleTargetClick,
			handleCloseButtonClick,
			withCloseButton,
		} = this.props;
		const targetProps = {
			onClick: handleTargetClick,
			className: targetClassName,
		};

		return (
			<Manager tag="span" className={className}>
				<Target {...targetProps} innerRef={targetRef}>
					{targetElement}
				</Target>
				<Transition
					in={open}
					timeout={duration}
				>
					{(state: string) => (
						<Popper
							innerRef={popupRef}
							placement={position}
							className={cn(classes.wrapper, contentClassName)}
							style={{
								...defaultStyle,
								...transitionStyles[state],
							}}
						>
							{state !== "exited" && (
								<Panel
									withMargin={false}
									onClick={handleClickOutside}
									className={cn({
										[classes.popup]: true,
										[classes.danger]: danger,
										[classes.warning]: warning,
									})}
								>
									{this.props.children}
									{withCloseButton && (
										<div onClick={handleCloseButtonClick} className={classes.closeButton}>
											<Icon size={10} name="close" />
										</div>
									)}
								</Panel>
							)}
							<Arrow className={classes.arrow}>
								<svg className={classes.arrowSVG} viewBox="0 0 20 7" width="20" height="7">
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