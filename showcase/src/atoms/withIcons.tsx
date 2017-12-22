import * as React from 'react';
import {
	View,
	Text,
	Icon,
	Button,
	withIcons,
	Link,
	Group,
} from 'kot-kit';

const FirstButton = withIcons(<Icon name="menu-train" />)(Button);
const SecondButton = withIcons([
	<Icon name="menu-train" />,
	<Icon name="menu-tours-hot" slot="right" />,
])(Button);
const ThirdButton = withIcons(<Icon name="menu-tours-hot" slot="right" />)(Button);

const FirstLink = withIcons(<Icon name="menu-train" />)(Link);
const SecondLink = withIcons([
	<Icon name="menu-train" />,
	<Icon name="menu-tours-hot" slot="right" />,
])(Link);
const ThirdLink = withIcons(<Icon name="menu-tours-hot" slot="right" />)(Link);

export default () => (
	<View>
		<Text header large>HOC withIcons</Text>
		<Group>
			<FirstButton>First button</FirstButton>
			<SecondButton primary>Second</SecondButton>
			<ThirdButton>Third button</ThirdButton>
		</Group>
		
		<Text paragraph>
			<FirstLink>First link</FirstLink>&emsp;
			<SecondLink>Second link</SecondLink>&emsp;
			<ThirdLink pseudo>Third link</ThirdLink>
		</Text>

		<Text header extraLarge>
			<FirstLink>First link</FirstLink>
		</Text>
	</View>
);