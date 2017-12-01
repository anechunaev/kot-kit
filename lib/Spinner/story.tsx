/* import * as React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';
import withReadme from 'storybook-readme/with-readme';
import readme from './readme.md';

import Spinner from 'lib/Spinner';
import Button from 'lib/Button';

setAddon(JSXAddon);

(storiesOf('Atoms/Spinner', module) as any)
	.addDecorator(withKnobs)
	.addDecorator(withReadme(readme))
	.addWithJSX('Default', () => {
		const SpinnerWithKnobs = () => (
			<Spinner
				count={number('Lines count', 8)}
				width={number('Line width', 2)}
				length={number('Line length', 6)}
				innerRadius={number('Inner radius', 3)}
				borderRadius={number('Border radius', 0)}
			/>
		);

		return (
			<div>
				<SpinnerWithKnobs />
				<Button primary>
					<SpinnerWithKnobs />
				</Button>
			</div>
		)
	}) */