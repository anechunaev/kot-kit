/* import * as React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';
import withReadme from 'storybook-readme/with-readme';
import readme from './readme.md';

import Panel from 'lib/Panel';
import Text from 'lib/Text';

setAddon(JSXAddon);

(storiesOf('Atoms/Panel', module) as any)
	.addDecorator(withKnobs)
	.addDecorator(withReadme(readme))
	.addWithJSX('Default', () => (
		<div style={{width: '500px', margin: '0 auto', background: '#eee', minHeight: '500px'}}>
			<Panel
				withPadding={boolean('With padding', true)}
				withMargin={boolean('With margin', true)}
				withShadow={boolean('With shadow', true)}
			>
				Quisque ut euismod massa. Nunc sem eros, pretium at turpis sit amet, imperdiet ultricies justo. Phasellus vel rutrum libero. Nunc vitae tincidunt metus. Duis lectus turpis, mollis nec aliquet ac, tempus ac nibh. Vestibulum id placerat lacus, aliquam efficitur urna. Praesent non purus lobortis, volutpat lectus id, aliquet massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In at tempor nunc. Nam massa lectus, luctus sit amet tristique in, elementum ac lectus. In sed consequat velit. Etiam sed tellus turpis. Pellentesque a nibh a dui consequat volutpat nec vel tellus. Mauris facilisis ante nisl, egestas pellentesque sem lobortis non. Nulla ligula augue, convallis vitae sem vitae, mattis mattis lectus.
			</Panel>

			<Text paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium ultrices risus, at cursus arcu convallis vel. Proin fringilla purus vitae efficitur tempus. Vestibulum egestas sem vel augue condimentum, sed tincidunt lorem consectetur. Suspendisse in ligula sed dui porta placerat vitae id lacus. Etiam placerat aliquam orci, a ultrices ipsum viverra vel. Aliquam imperdiet mauris erat, ac mollis augue vulputate ac. Suspendisse potenti.
			</Text>

			<Panel>
				Quisque ut euismod massa. Nunc sem eros, pretium at turpis sit amet, imperdiet ultricies justo. Phasellus vel rutrum libero. Nunc vitae tincidunt metus. Duis lectus turpis, mollis nec aliquet ac, tempus ac nibh. Vestibulum id placerat lacus, aliquam efficitur urna. Praesent non purus lobortis, volutpat lectus id, aliquet massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In at tempor nunc. Nam massa lectus, luctus sit amet tristique in, elementum ac lectus. In sed consequat velit. Etiam sed tellus turpis. Pellentesque a nibh a dui consequat volutpat nec vel tellus. Mauris facilisis ante nisl, egestas pellentesque sem lobortis non. Nulla ligula augue, convallis vitae sem vitae, mattis mattis lectus.
			</Panel>

			<Text paragraph>
				Donec vel lectus purus. Integer consequat nunc vitae elementum gravida. Donec cursus nisi a est tincidunt consequat. Phasellus magna mauris, volutpat ut mollis ac, porta et sapien. Integer convallis lobortis lacus eget euismod. Praesent hendrerit ex quis ex bibendum imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pellentesque ante quam, mollis mollis tellus rutrum nec. Suspendisse eleifend turpis odio, nec consectetur massa dictum nec. Sed ornare, urna in lobortis egestas, tortor libero pellentesque justo, quis porttitor orci sem et purus.
			</Text>
		</div>
	)) */