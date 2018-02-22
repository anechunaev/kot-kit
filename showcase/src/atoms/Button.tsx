import * as React from 'react';
import { View, Button } from 'kot-kit';
import * as readme from '../../../lib/Button/readme.md';
import MarkdownViewer from '../MarkdownViewer';

export default () => (
	<View>
		<Button>Default button</Button>
		<Button primary>Primary button</Button>
		<Button disabled>Disabled button</Button>
		<Button primary disabled>Disabled primary button</Button>

		<MarkdownViewer source={readme} />
	</View>
)