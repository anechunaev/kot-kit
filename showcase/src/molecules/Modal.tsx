import * as React from 'react';

import {
	Modal,
	View,
} from 'kot-kit';
import * as readme from '../../../lib/Modal/readme.md';
import MarkdownViewer from '../MarkdownViewer';
import Knobs from '../Knobs';

export default () => (
	<View>
		<Knobs>
			{({ boolean }: any) => (
				<Modal
					isOpen={boolean('Is open?', false)}
				>
					Hello world!
				</Modal>
			)}
		</Knobs>

		<MarkdownViewer source={readme} />
	</View>
);