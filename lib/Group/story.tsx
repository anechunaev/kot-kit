/* import * as React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';
import readme from './readme.md';

import Button from 'lib/Button';
import Input from 'lib/Input';
import Group from 'lib/Group';

import ViewBox from 'lib/View';
import Panel from 'lib/Panel';
import Text from 'lib/Text';

import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

(storiesOf('Atoms/Group', module) as any)
	.addDecorator(withKnobs)
	.addDecorator(withReadme(readme))
	.addWithJSX('Default', () => (
		<ViewBox>
			<ViewBox width={1}>
				<Text header large>Group of buttons</Text>
				<Panel withShadow={false} withMargin={false}>
					<Group>
						<Button toggled>М</Button>
						<Button>Ж</Button>
					</Group>
				</Panel>
			</ViewBox>
			<ViewBox width={1}>
				<Panel withShadow={false} withMargin={false}>
					<Group>
						<Button>М</Button>
						<Button toggled alternate>Ж</Button>
					</Group>
				</Panel>
			</ViewBox>

			<ViewBox width={1}>
				<Text header large>Mixed items</Text>
				<Panel withShadow={false} withMargin={false}>
					<Group>
						<Input expanded placeholder="Search…" />
						<Button primary>🔎</Button>
					</Group>
				</Panel>
			</ViewBox>

			<ViewBox width={1}>
				<Text header large>Counter markup</Text>
				<Panel withShadow={false} withMargin={false}>
					<Group>
						<Button>–</Button>
						<Input expanded value="1" readOnly />
						<Button>+</Button>
					</Group>
				</Panel>
			</ViewBox>

			<ViewBox width={1}>
				<Text header large>Vertical group</Text>
				<Panel withShadow={false} withMargin={false}>
					<Group vertical>
						<Input placeholder="Email" type="email" />
						<Input placeholder="Password" type="password" />
						<Button>Log in</Button>
					</Group>
				</Panel>
			</ViewBox>

			<ViewBox width={1}>
				<Text header large>Mixed group</Text>
				<Panel withShadow={false} withMargin={false}>
					<Group vertical>
						<Group>
							<Button expanded toggled>Log in</Button>
							<Button expanded>Register</Button>
						</Group>
						<Input placeholder="Email" type="email" />
						<Input placeholder="Password" type="password" />
						<Button>Log in</Button>
					</Group>
				</Panel>
				<Panel withShadow={false} withMargin={false}>
					<Group>
						<Input value={12} expanded />
						<Group vertical width={1 / 20}>
							<Button>↑</Button>
							<Button>↓</Button>
						</Group>
					</Group>
				</Panel>
			</ViewBox>
		</ViewBox>
	)) */