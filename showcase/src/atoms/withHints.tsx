import * as React from 'react';
import {
	View,
	withHints,
	Input,
	Link,
} from 'kot-kit';
import * as readme from '../../../lib/withHints/readme.md';
import MarkdownViewer from '../MarkdownViewer';

type EnhancedProps = {
	onClick: (options: any) => () => void;
}

const EnhancedInput = withHints(({ onClick }: EnhancedProps) => (
	<div style={{ width: '100%' }}>
		<Link pseudo onClick={onClick({ value: 'First' })}>First value</Link>,&nbsp;
		<Link pseudo onClick={onClick({ value: 'Second' })}>Second value</Link>
	</div>
))(Input);

export default () => (
	<View>
		<EnhancedInput />

		<MarkdownViewer source={readme} />
	</View>
);