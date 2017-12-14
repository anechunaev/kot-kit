import * as React from 'react';

export interface IOuterProps {
	name: string;
	size?: number;
	color?: string;
}
export interface IInnerProps extends IOuterProps {
	theme: any;
}

export default ({ name, size = 16, color = 'currentColor', theme }: IInnerProps) => (
	<svg width={size} height={size}>
		<use style={{ color }} xlinkHref={theme.variables.iconSource + '#' + name} />
	</svg>
)