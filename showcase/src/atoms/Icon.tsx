import * as React from 'react';
import {
	Text,
	View,
	Icon,
} from 'kot-kit';

export default () => (
	<View>
		<Text header large>Default icons</Text>
		<Text paragraph>
			<Icon size={32} name="menu-avia" />
			<Icon size={32} name="menu-bus" />
			<Icon size={32} name="menu-etrain" />
			<Icon size={32} name="menu-hotels" />
			<Icon size={32} name="menu-tours-hot" />
			<Icon size={32} name="menu-tours" />
			<Icon size={32} name="menu-train" />
		</Text>
		<Text paragraph>
			<Icon size={32} color="#e53935" name="menu-avia" />
			<Icon size={32} color="#fb8c00" name="menu-bus" />
			<Icon size={32} color="#fdd835" name="menu-etrain" />
			<Icon size={32} color="#7cb342" name="menu-hotels" />
			<Icon size={32} color="#00acc1" name="menu-tours-hot" />
			<Icon size={32} color="#3949ab" name="menu-tours" />
			<Icon size={32} color="#5e35b1" name="menu-train" />
		</Text>
		<Text paragraph>
			<Icon size={8} name="menu-avia" />
			<Icon size={16} name="menu-bus" />
			<Icon size={24} name="menu-etrain" />
			<Icon size={32} name="menu-hotels" />
			<Icon size={40} name="menu-tours-hot" />
			<Icon size={48} name="menu-tours" />
			<Icon size={56} name="menu-train" />
		</Text>
	</View>
)