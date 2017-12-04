import * as React from 'react';
import { View, Alert, Text } from 'kot-kit';

export default () => (
	<View>
		<Alert><Text>Default alert</Text></Alert>
		<Alert danger><Text>Danger alert</Text></Alert>
	</View>
)