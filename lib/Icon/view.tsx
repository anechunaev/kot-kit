import * as React from 'react';
import { withTheme } from 'provider';

export interface IOuterProps {
	name: string;
	size?: number;
	color?: string;
	elementRef?: (n: SVGSVGElement) => void; // @TODO Move to IBaseComponentProps
}
export interface IInnerProps extends IOuterProps {
	theme: any;
}

class IconView extends React.Component<IInnerProps> {
	public render() {
		const { name, size = 16, color = 'currentColor', theme, elementRef = () => {} } = this.props;
		return (
			<svg width={size} height={size} ref={elementRef} aria-hidden="true">
				<use style={{ color }} xlinkHref={theme.variables.iconSource + '#' + name} />
			</svg>
		);
	}
}

export default withTheme(IconView);