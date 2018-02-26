import * as React from 'react';
import {
	View,
	Icon,
	IconProvider,
} from 'kot-kit';
import * as readme from '../../../lib/Icon/readme.md';
import MarkdownViewer from '../MarkdownViewer';
import Knobs from '../Knobs';

export default () => (
	<View>
		<Knobs>
			{({ select, number, text }: any) => {
				const pack = select('Icon pack', { default: undefined, material: '/material-icons.svg' }, 'default');
				const size = number('Size', 32);
				const color = text('Color', 'rgb(51, 102, 153)');

				return (
					<IconProvider pack={pack}>
						{ !pack ? [
							<Icon color={color} size={size} name="menu-avia" />,
							<Icon color={color} size={size} name="menu-bus" />,
							<Icon color={color} size={size} name="menu-etrain" />,
							<Icon color={color} size={size} name="menu-hotels" />,
							<Icon color={color} size={size} name="menu-tours-hot" />,
							<Icon color={color} size={size} name="menu-tours" />,
							<Icon color={color} size={size} name="menu-train" />,
						] : [
							<Icon color={color} size={size} name="copy" />,
							<Icon color={color} size={size} name="paste" />,
							<Icon color={color} size={size} name="file" />,
							<Icon color={color} size={size} name="folder" />,
							<Icon color={color} size={size} name="home" />,
							<Icon color={color} size={size} name="stack" />,
						]}
					</IconProvider>
				)
			}}
		</Knobs>

		<MarkdownViewer source={readme} />
	</View>
)