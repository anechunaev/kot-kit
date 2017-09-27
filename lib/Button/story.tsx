import * as React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';
import { action } from '@storybook/addon-actions';
import readme from './readme.md';

import Button from './index';

import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

(storiesOf('Atoms/Button', module) as any)
	.addDecorator(withKnobs)
	.addDecorator(withReadme(readme))
	.addWithJSX('Default', () => (
		<div>
			<Button
				onClick={action('Button clicked')}
				primary={boolean('Primary', false)}
				active={boolean('Active', false)}
				disabled={boolean('Disabled', false)}
				href={text('Href', '')}
				target={text('target', '_blank')}
			>
				{text('Text', 'Default button')}
			</Button>
		</div>
	))