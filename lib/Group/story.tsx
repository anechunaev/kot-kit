import * as React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';
import readme from './readme.md';

import Button from '../Button';
import Input from '../Input';
import Group from './index';

import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

(storiesOf('Atoms/Group', module) as any)
	.addDecorator(withKnobs)
	.addDecorator(withReadme(readme))
	.addWithJSX('Default', () => (
		<div>
			<h1>Group of buttons</h1>
			<Group>
				<Button>М</Button>
				<Button>Ж</Button>
			</Group>

			<h1>Mixed group</h1>
			<Group>
				<Input placeholder="Search…" />
				<Button primary>🔎</Button>
			</Group>

			<h1>Counter markup</h1>
			<Group>
				<Button>–</Button>
				<Input value="1" readOnly />
				<Button>+</Button>
			</Group>
		</div>
	))