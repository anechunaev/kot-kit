import * as React from 'react';
import cn from 'classnames';
import { IProps as IBaseProps, defaultProps } from './index';

export interface IProps extends IBaseProps {
	classes: Dictionary<string>;
}

const SpinnerView: React.SFC<IProps> = ({ classes, className, count = defaultProps.count }) => (
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