import * as React from 'react';
import {
	Text,
	View,
	Spinner,
	Button,
} from 'kot-kit';

export default () => (
	<View>
		<Text header large>Default spinner</Text>
		<Text paragraph>
			<Spinner />
		</Text>
		
		<Text header large>Custom spinner</Text>
		<Text paragraph>
			<Spinner
				count={6}
				width={6}
				length={12}
				innerRadius={5}
				borderRadius={2}
			/>
		</Text>

		<Text header large>Default in dark context</Text>
		<Button primary>
			<Spinner />
		</Button>
	</View>
)