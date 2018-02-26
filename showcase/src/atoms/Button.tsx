import * as React from 'react';
import { View, Button } from 'kot-kit';
import * as readme from '../../../lib/Button/readme.md';
import MarkdownViewer from '../MarkdownViewer';
import Knobs from '../Knobs';

export default () => (
	<View>
		<Knobs>
			{({ boolean, text }: any) => (
				<Button
					primary={boolean('Is primary?', false)}
					disabled={boolean('Is disabled?', false)}
					href={text('URL', '')}
					expanded={boolean('Is expanded?', false)}
					toggled={boolean('Is toggled?', false)}
				>
					{text('Button text', 'Hello world')}
				</Button>
			)}
		</Knobs>

		<MarkdownViewer source={readme} />
	</View>
)