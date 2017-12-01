/* import * as React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';
import withReadme from 'storybook-readme/with-readme';
import readme from './readme.md';

import Alert from 'lib/Alert';
import Text from 'lib/Text';
import Button from 'lib/Button';

setAddon(JSXAddon);

(storiesOf('Atoms/Alert', module) as any)
	.addDecorator(withKnobs)
	.addDecorator(withReadme(readme))
	.addWithJSX('Default', () => (
		<div style={{width: '500px', margin: '0 auto', background: '#eee', minHeight: '500px'}}>
			<Alert
				danger={boolean('Danger', false)}
				title={text('Title', '')}
			>
				<Text paragraph>Quisque ut euismod massa. Nunc sem eros, pretium at turpis sit amet, imperdiet ultricies justo. Phasellus vel rutrum libero.</Text>
				<Button>Confirm</Button>
			</Alert>

			<Text paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium ultrices risus, at cursus arcu convallis vel. Proin fringilla purus vitae efficitur tempus. Vestibulum egestas sem vel augue condimentum, sed tincidunt lorem consectetur. Suspendisse in ligula sed dui porta placerat vitae id lacus. Etiam placerat aliquam orci, a ultrices ipsum viverra vel. Aliquam imperdiet mauris erat, ac mollis augue vulputate ac. Suspendisse potenti.
			</Text>

			<Text paragraph>
				Donec vel lectus purus. Integer consequat nunc vitae elementum gravida. Donec cursus nisi a est tincidunt consequat. Phasellus magna mauris, volutpat ut mollis ac, porta et sapien. Integer convallis lobortis lacus eget euismod. Praesent hendrerit ex quis ex bibendum imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pellentesque ante quam, mollis mollis tellus rutrum nec. Suspendisse eleifend turpis odio, nec consectetur massa dictum nec. Sed ornare, urna in lobortis egestas, tortor libero pellentesque justo, quis porttitor orci sem et purus.
			</Text>
		</div>
	)) */