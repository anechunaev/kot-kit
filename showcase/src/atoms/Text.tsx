import * as React from 'react';
import {
	View,
	Text,
} from 'kot-kit';
import * as readme from '../../../lib/Text/readme.md';
import MarkdownViewer from '../MarkdownViewer';
import Knobs from '../Knobs';

export default () => (
	<View>
		<Knobs>
			{({ boolean, select, text }: any) => {
				const size = select('Size', {
					"default": '',
					"Extra large": 'extraLarge',
					"Large": 'large',
					"Small": 'small',
					"Extra small": 'extraSmall',
				}, 'default');
				const props = {
					[size]: true,
				};

				return [
					<Text
						key="header"
						header={boolean('Is header?', true)}
						paragraph={boolean('Add paragraph style', false)}
						{...props}
					>
						{text('Content', 'Lorem ipsum dolor sit amet')}
					</Text>,
					<Text paragraph key="paragraph">
						Quisque ut euismod massa. Nunc sem eros, pretium at turpis sit amet, imperdiet ultricies justo. Phasellus vel rutrum libero. Nunc vitae tincidunt metus. Duis lectus turpis, mollis nec aliquet ac, tempus ac nibh. Vestibulum id placerat lacus, aliquam efficitur urna. Praesent non purus lobortis, volutpat lectus id, aliquet massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In at tempor nunc. Nam massa lectus, luctus sit amet tristique in, elementum ac lectus. In sed consequat velit. Etiam sed tellus turpis. Pellentesque a nibh a dui consequat volutpat nec vel tellus. Mauris facilisis ante nisl, egestas pellentesque sem lobortis non. Nulla ligula augue, convallis vitae sem vitae, mattis mattis lectus.
					</Text>
				]
			}}
		</Knobs>

		<MarkdownViewer source={readme} />
	</View>
)