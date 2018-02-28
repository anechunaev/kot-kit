import * as React from 'react';
import { withTheme } from 'provider';
import cn from 'classnames';
import { IBaseInnerProps, IBaseOuterProps } from '../base';

export interface IOuterProps extends IBaseOuterProps<SVGSVGElement> {
	name: string;
	size?: number;
	color?: string;
}
export interface IInnerProps extends IBaseInnerProps, IOuterProps {
}

class IconView extends React.Component<IInnerProps> {
	public render() {
		const { classes, className, name, color = 'currentColor', theme, elementRef = () => {} } = this.props;
		return (
			<svg className={cn(className, classes.container)} ref={elementRef} aria-hidden="true">
				<use style={{ color }} xlinkHref={theme.variables.iconSource + '#' + name} />
			</svg>
		);
	}
}

export default withTheme(IconView);