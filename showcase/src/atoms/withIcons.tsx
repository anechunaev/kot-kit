import * as React from 'react';
import {
	View,
	Text,
	Icon,
	Button,
	withIcons,
	Link,
	Input,
	Group,
} from 'kot-kit';

const FirstButton = withIcons(<Icon name="menu-train" />)(Button);
const SecondButton = withIcons([
	<Icon key="train" name="menu-train" />,
	<Icon key="tours" name="menu-tours-hot" slot="right" />,
])(Button);
const ThirdButton = withIcons(<Icon name="menu-tours-hot" slot="right" />)(Button);

const FirstLink = withIcons(<Icon name="menu-train" />)(Link);
const SecondLink = withIcons([
	<Icon key="train" name="menu-train" />,
	<Icon key="tours" name="menu-tours-hot" slot="right" />,
])(Link);
const ThirdLink = withIcons(<Icon name="menu-tours-hot" slot="right" />)(Link);

const FirstInput = withIcons(<Icon name="menu-train" />)(Input);
const SecondInput = withIcons([
	<Icon key="train" name="menu-train" />,
	<Icon key="tours" name="menu-tours-hot" slot="right" />,
])(Input);
const ThirdInput = withIcons(<Icon name="menu-tours-hot" slot="right" />)(Input);

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

		<Text paragraph>
			<Group>
				<FirstInput value="First input" />
				<SecondInput value="Second" invalid />
				<ThirdInput value="Third input with very long value" />
			</Group>
		</Text>
	</View>
);