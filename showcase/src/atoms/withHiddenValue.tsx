import * as React from 'react';
import { Input, Text, Link, withHiddenValue, withHints } from 'kot-kit';

const EnhancedInput = withHiddenValue(Input);
const EnhancedInputWithHints = withHints(({ onClick }) => (
	<div style={{ width: '100%' }}>
		<Text>
			<Link pseudo onClick={onClick({ value: 'First', hiddenValue: '1' })}>First value</Link>,&nbsp;
			<Link pseudo onClick={onClick({ value: 'Second', hiddenValue: '2' })}>Second value</Link>
		</Text>
	</div>
))(withHiddenValue(Input));

export default () => (
	<div>
		<EnhancedInput defaultValue="Default" />
		<br />
		<EnhancedInput defaultValue="Custom name + default hidden value" hiddenInputProps={{ value: '42', name: 'answer' }} />
		<br />
		<EnhancedInputWithHints name="withCustomHidden" defaultValue="With custom hidden value" />
	</div>
)