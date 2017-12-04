import * as React from 'react';
import { Link, Text } from 'kot-kit';

export default () => (
	<Text>
		<Link href="#anchor">Default link</Link>
		<br />
		<Link pseudo onClick={console.log}>Pseudo link</Link>
	</Text>
)