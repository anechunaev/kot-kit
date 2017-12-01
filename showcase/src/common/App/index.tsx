import * as React from 'react';
import { Route } from 'react-router-dom';
import { Alert, Text } from 'kot-kit';

export interface IProps {
}

const App: React.SFC<IProps> = (): React.ReactElement<IProps> => (
	<div className="">
		<Route exact path="/" component={() => (
			<Alert><Text>Test</Text></Alert>
		)} />
		<Route exact path="/test" component={() => <h1>Test page</h1>} />
	</div>
);

export default App;