import * as React from 'react';
import { View, Alert, Text, Button } from 'kot-kit';

export default () => (
	<View>
		<Alert><Text>Default alert</Text></Alert>
		<Alert danger><Text>Danger alert</Text></Alert>
		<Alert danger title="With title and button">
			<Text paragraph>Lorem ipsum dolor sit amet</Text>
			<Button>Default button</Button>
		</Alert>
	</View>
)