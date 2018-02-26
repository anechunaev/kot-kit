import * as React from 'react';
import { View, Link } from 'kot-kit';
import * as readme from '../../../lib/Link/readme.md';
import MarkdownViewer from '../MarkdownViewer';
import Knobs from '../Knobs';

export default () => (
	<View>
		<Knobs>
			{({ boolean, text }: any) => (
				<Link
					href={text('URL', '#anchor')}
					target={text('Target', '_blank')}
					pseudo={boolean('Is pseudo link?', false)}
					onClick={console.log}
				>
					{text('Link content', 'Hello world!')}
				</Link>
			)}
		</Knobs>

		<MarkdownViewer source={readme} />
	</View>
)