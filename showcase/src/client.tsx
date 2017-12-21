import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App/index';
import { theme, ThemeProvider } from 'kot-kit';

const Root = (() => {
	const Chain = () => (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	);

	//@ts-ignore
	if (module.hot) {
		const AppContainer = require('react-hot-loader').AppContainer;
		//@ts-ignore
		module.hot.accept('./App/index', () => {
			// tslint:disable-next-line
			require('./App/index').default;
			render();
		});

		return () => (
			<AppContainer>
				<Chain />
			</AppContainer>
		);
	}
	return Chain;
})();

function render() {
	ReactDOM.render(
		<Root />,
		document.getElementById('main'),
	);
}

render();