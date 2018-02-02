import * as React from 'react';
import {
	View,
	Input,
	Group,
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
		<View>
			<Group>
				<Input value="123" />
				<Input invalid value="123" />
				<Input disabled value="123" />
			</Group>
		</View>
	</View>
);