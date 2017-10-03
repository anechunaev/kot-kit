import * as React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';
import readme from './readme.md';

import Button from '../Button';
import Input from '../Input';
import Group from './index';

import ViewBox from '../View';
import Text from '../Text';

import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

(storiesOf('Atoms/Group', module) as any)
	.addDecorator(withKnobs)
	.addDecorator(withReadme(readme))
	.addWithJSX('Default', () => (
		<ViewBox>
			<ViewBox width={1}>
				<Text header large>Group of buttons</Text>
				<Group>
					<Button toggled>М</Button>
					<Button>Ж</Button>
				</Group>
			</ViewBox>
			<ViewBox width={1}>
				<Group>
					<Button>М</Button>
					<Button toggled alternate>Ж</Button>
				</Group>
			</ViewBox>

			<ViewBox width={1}>
				<Text header large>Mixed group</Text>
				<Group>
					<Input expanded placeholder="Search…" />
					<Button primary>🔎</Button>
				</Group>
			</ViewBox>

			<ViewBox width={1}>
				<Text header large>Counter markup</Text>
				<Group>
					<Button>–</Button>
					<Input expanded value="1" readOnly />
					<Button>+</Button>
				</Group>
			</ViewBox>

			<ViewBox width={1}>
				<Text header large>Vertical group</Text>
				<Group vertical>
					<Input placeholder="Email" type="email" />
					<Input placeholder="Password" type="password" />
					<Button>Log in</Button>
				</Group>
			</ViewBox>
		</ViewBox>
	))