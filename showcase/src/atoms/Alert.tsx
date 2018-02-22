import * as React from 'react';
import { View, Alert, Text, Button } from 'kot-kit';

import Knobs from '../Knobs';

export default () => (
	<View>
		<Knobs>
			{({ boolean, text }: any) => (
				<Alert danger={boolean('Is danger', false)}>
					{text('Default content', 'Default alert')}
				</Alert>
			)}
		</Knobs>

		<Alert danger title="With title and button">
			<Text paragraph>Lorem ipsum dolor sit amet</Text>
			<Button>Default button</Button>
		</Alert>
	</View>
);