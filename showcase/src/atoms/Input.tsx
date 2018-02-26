import * as React from 'react';
import {
	View,
	Input,
} from 'kot-kit';
import * as readme from '../../../lib/Input/readme.md';
import MarkdownViewer from '../MarkdownViewer';
import Knobs from '../Knobs';

export default () => (
	<View>
		<Knobs>
			{({ text, boolean }: any) => (
				<Input
					invalid={boolean('Is invalid?', false)}
					disabled={boolean('Is disabled?', false)}
					readOnly={boolean('Read only', false)}
					mask={text('Mask', '+7 (999) 999-9999')}
					maskChar={text('Mask char', '_')}
					placeholder={text('Placeholder', 'Phone number')}
				/>
			)}
		</Knobs>

		<MarkdownViewer source={readme} />
	</View>
);