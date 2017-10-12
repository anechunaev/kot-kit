// @ts-nocheck
import { configure, addDecorator } from '@storybook/react';
import theme from '../../theme';
import { ThemeProvider, StyleContextProvider } from 'provider';
import * as React from 'react';

addDecorator((story) => (
	<ThemeProvider theme={theme}>
			{story()}
	</ThemeProvider>
));

const req = require.context('../../lib', true, /story\.(j|t)sx?$/)

function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);