import * as React from 'react';
import {
	View,
	Suggest,
	Select,
	Text,
} from 'kot-kit';
import * as readme from '../../../lib/Suggest/readme.md';
import MarkdownViewer from '../MarkdownViewer';

class SimpleSuggest extends React.Component<any, any> {
	constructor(props: any) {
		super(props);

		this.state = {
			selected: 'none'
		}
	}
	public render() {
		return [
			<Text key="header" paragraph>You selected: {this.state.selected}</Text>,
			(
				<div key="suggest" style={{ position: 'relative', width: '100%', height: '120px' }}>
					<Suggest visible>
						<Select value="111" onSelect={() => this.setState({ selected: '111' })}>First value: 111</Select>
						<Select value="222" onSelect={() => this.setState({ selected: '222' })}>Second value: 222</Select>
						<Select value="333" onSelect={() => this.setState({ selected: '333' })}>Third value: 333</Select>
					</Suggest>
				</div>
			),
		]
	}
}

export default () => (
	<View>
		<Text header large>Basic suggest component</Text>

		<Text paragraph>You can use arrow keys to select value.</Text>
		<SimpleSuggest />

		<MarkdownViewer source={readme} />
	</View>
)