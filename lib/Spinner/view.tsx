import * as React from 'react';
import cn from 'classnames';
import { defaultProps } from './index';
import { IBaseInnerProps, IBaseOuterProps } from '../base';

export interface IOuterProps extends IBaseOuterProps<HTMLDivElement> {
	count?: number;
	width?: number;
	length?: number;
	borderRadius?: number;
	innerRadius?: number;
}

export interface IInnerProps extends IBaseInnerProps, IOuterProps {
}

// @TODO pure component + refactor
// @TODO add elementRef
const SpinnerView: React.SFC<IInnerProps> = ({ classes, className, count = defaultProps.count }) => (
	<div
		className={cn(classes.wrapper, className)}
		role="progressbar"
	>
		{new Array(count).join().split(',').map((_, index) => (
			<div
				key={index}
				className={classes.indicator}
				style={{
					transform: `rotate(${360 * (index / count)}deg)`,
					animationDelay: 1 / count * index + 's',
				}}
			/>
		))}
	</div>
)

export default SpinnerView;