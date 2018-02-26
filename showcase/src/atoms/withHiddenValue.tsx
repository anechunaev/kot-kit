import * as React from 'react';
import {
	View,
	Input,
	Link,
	withHiddenValue,
	withHints
} from 'kot-kit';
import * as readme from '../../../lib/withHiddenValue/readme.md';
import MarkdownViewer from '../MarkdownViewer';

type EnhancedProps = {
	onClick: (options: any) => () => void;
}

const EnhancedInput = withHiddenValue(Input);
const EnhancedInputWithHints = withHints(({ onClick }: EnhancedProps) => (
	<div style={{ width: '100%' }}>
		<Link pseudo onClick={onClick({ value: 'First', hiddenValue: '1' })}>First value</Link>,&nbsp;
		<Link pseudo onClick={onClick({ value: 'Second', hiddenValue: '2' })}>Second value</Link>
	</div>
))(withHiddenValue(Input));

export default () => (
	<View>
		<EnhancedInput defaultValue="Default" />
		<br />
		<EnhancedInput defaultValue="Custom name + default hidden value" hiddenInputProps={{ value: '42', name: 'answer' }} />
		<br />
		<EnhancedInputWithHints name="withCustomHidden" defaultValue="With custom hidden value" />

		<MarkdownViewer source={readme} />
	</View>
);