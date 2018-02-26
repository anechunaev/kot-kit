import * as React from 'react';
import {
	View,
	Spinner,
	Button,
} from 'kot-kit';
import * as readme from '../../../lib/Spinner/readme.md';
import MarkdownViewer from '../MarkdownViewer';
import Knobs from '../Knobs';

export default () => (
	<View>
		<Knobs>
			{({ number, boolean }: any) => (
				<Button primary={boolean('Enable dark context', false)}>
					<Spinner
						count={number('Line count', 8)}
						width={number('Line width', 2)}
						length={number('Line length', 6)}
						innerRadius={number('Inner radius', 3)}
						borderRadius={number('Line border radius', 0)}
					/>
				</Button>
			)}
		</Knobs>

		<MarkdownViewer source={readme} />
	</View>
)