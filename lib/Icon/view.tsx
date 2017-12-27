import * as React from 'react';
import { withTheme } from 'provider';
import cn from 'classnames';

export interface IOuterProps {
	name: string;
	size?: number;
	color?: string;
	elementRef?: (n: SVGSVGElement) => void; // @TODO Move to IBaseComponentProps
	className?: string;
}
export interface IInnerProps extends IOuterProps {
	theme: any;
	classes: Dictionary<string>;
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