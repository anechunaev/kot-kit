import * as React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';
import { action } from '@storybook/addon-actions';
import readme from './readme.md';

import Input from './index';

import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

(storiesOf('Atoms/Input', module) as any)
	.addDecorator(withKnobs)
	.addDecorator(withReadme(readme))
	.addWithJSX('Default', () => (
		<Input
			defaultValue={text('Default value', "Default value")}
			onFocus={action('Focused')}
			onBlur={action('Blured')}
			onInput={action('Value changed')}
			invalid={boolean('Invalid', false)}
			disabled={boolean('Disabled', false)}
			autoComplete={boolean('Autocomplete', false)}
			autoFocus={boolean('Autofocus', false)}
			minLength={number('Min length', 0)}
			maxLength={number('Max length', 100)}
			name={text('Name', '')}
			placeholder={text('Placeholder', 'Placeholder')}
			readOnly={boolean('Readonly', false)}
			type={select('Type', ['text','password','email','tel','number'], 'text')}
			expanded={boolean('Expanded', false)}
		/>
	))