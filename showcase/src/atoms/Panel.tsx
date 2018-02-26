import * as React from 'react';
import {
	View,
	Text,
	Panel
} from 'kot-kit';
import * as readme from '../../../lib/Panel/readme.md';
import MarkdownViewer from '../MarkdownViewer';
import Knobs from '../Knobs';

export default () => (
	<View>
		<Knobs>
			{({ boolean }: any) => (
				<div style={{ width: '500px', margin: '0 auto', background: '#eee' }}>
					<Text paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium ultrices risus, at cursus arcu convallis vel. Proin fringilla purus vitae efficitur tempus.
					</Text>

					<Panel
						withPadding={boolean('With padding', true)}
						withMargin={boolean('With margin', true)}
						withShadow={boolean('With shadow', true)}
					>
						<Text paragraph>
							Quisque ut euismod massa. Nunc sem eros, pretium at turpis sit amet, imperdiet ultricies justo. Phasellus vel rutrum libero. Nunc vitae tincidunt metus. Duis lectus turpis, mollis nec aliquet ac, tempus ac nibh.
						</Text>
					</Panel>

					<Text paragraph>
						Donec vel lectus purus. Integer consequat nunc vitae elementum gravida. Donec cursus nisi a est tincidunt consequat. Phasellus magna mauris, volutpat ut mollis ac, porta et sapien. Integer convallis lobortis lacus eget euismod.
					</Text>
				</div>
			)}
		</Knobs>

		<MarkdownViewer source={readme} />
	</View>
)