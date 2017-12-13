import * as React from 'react';

export interface IProps {
	name: string;
	size?: number;
	color?: string;
}

export default ({ name, size = 16, color = 'currentColor' }: IProps) => (
	<svg width={size} height={size}>
		<use style={{ color }} xlinkHref={`/icons.svg#${name}`} />
	</svg>
)