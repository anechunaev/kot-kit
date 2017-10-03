import * as React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import readme from './readme.md';
import { withStyles } from 'provider';

import View from './index';

import JSXAddon from 'storybook-addon-jsx';
import Text from '../Text';

const Story = withStyles(() => ({
	grid: {
		composes: '$base',
		border: [3, 'solid', 'rgba(0,0,0,.5)'],
		borderRadius: 10,
		background: 'rgba(0,50,100,.15)',
		flexWrap: 'wrap',
	},
	base: {
		padding: [10, 15],
		boxSizing: 'border-box',
	}
}))(({ classes }: any) => (
	<View>
		<Text header large>Grid example</Text>
		<View className={classes.grid}>
			<View width={1/3} className={classes.grid}>1/3</View>
			<View width={2/3} className={classes.grid}>
				<View className={classes.base}>2/3</View>
				<View width={1/2} className={classes.grid}>1/2</View>
				<View width={1/2} className={classes.grid}>1/2</View>
			</View>
		</View>
		<View className={classes.grid}>
			<View width={1/4} className={classes.grid}>1/4</View>
			<View width={1/4} className={classes.grid}>1/4</View>
			<View width={1/4} className={classes.grid}>1/4</View>
			<View width={1/4} className={classes.grid}>1/4</View>
		</View>
		<View className={classes.grid}>
			<View width={1/6} className={classes.grid}>1/6</View>
			<View width={1/6} className={classes.grid}>1/6</View>
			<View width={5/12} className={classes.grid}>5/12</View>
			<View width={3/12} className={classes.grid}>3/12</View>
		</View>
	</View>
));

setAddon(JSXAddon);

(storiesOf('Atoms/View', module) as any)
	.addDecorator(withReadme(readme))
	.addWithJSX('Default', () => <Story />)