import * as React from 'react';
import {
	View,
	Text,
	Icon,
	Button,
	withIcons,
	Group,
} from 'kot-kit';

const FirstButton = withIcons(<Icon name="menu-train" />)(Button);
const SecondButton = withIcons([
	<Icon name="menu-train" />,
	<Icon name="menu-tours-hot" slot="right" />,
])(Button);
const ThirdButton = withIcons(<Icon name="menu-tours-hot" slot="right" />)(Button);

export default () => (
	<View>
		<Text header large>HOC withIcons</Text>
		<Group>
			<FirstButton>First button</FirstButton>
			<SecondButton primary>Second</SecondButton>
			<ThirdButton>Third button</ThirdButton>
		</Group>
	</View>
);