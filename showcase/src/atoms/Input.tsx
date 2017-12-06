import * as React from 'react';
import {
	View as ViewBox,
	Input,
} from 'kot-kit';

export default () => (
	<ViewBox>
		<Input defaultValue="Default" />
		<br />
		<Input invalid defaultValue="Invalid state" />
	</ViewBox>
);