import * as React from 'react';
import {
	withHints,
	Input,
	Link,
	Text,
} from 'kot-kit';

const EnhancedInput = withHints(({ onClick }) => (
	<div style={{ width: '100%' }}>
		<Text>
			<Link pseudo onClick={onClick({ value: 'First' })}>First value</Link>,&nbsp;
			<Link pseudo onClick={onClick({ value: 'Second' })}>Second value</Link>
		</Text>
	</div>
))(Input);

export default () => <EnhancedInput />