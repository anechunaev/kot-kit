//@ts-nocheck
import * as React from 'react';
import './style.css';

import {
	Alert,
	Text,
	Button,
} from 'kot-kit';

export default () => (
	<div className="page_wrapper">
		<Alert>
			<Text header>Lorem ipsum</Text>
			<Text paragraph>Dolor sit amet</Text>
			<Button>Ok</Button>
		</Alert>

		<Text header extraLarge>Header</Text>
	</div>
);