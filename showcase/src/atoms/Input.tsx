import * as React from 'react';
import {
	View,
	Input,
} from 'kot-kit';

export default () => (
	<View>
		<View>
			<Input defaultValue="Default" />
		</View>
		<View>
			<Input invalid defaultValue="Invalid state" />
		</View>
		<View>
			<Input mask="+7 (999) 999-9999" maskChar="_" />
		</View>
	</View>
);