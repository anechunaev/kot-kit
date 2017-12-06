import * as React from 'react';
import {
	Select,
	Panel,
	Group,
	Text,
	View,
} from 'kot-kit'

const EXAMPLE_DATA = [
	'111',
	'222',
	'333',
];

class SelectSimple extends React.Component<any, any> {
	constructor(props: any) {
		super(props);

		this.state = {
			selected: 0
		};
	}

	private select = (index: number) => () => this.setState({
		selected: index
	});

	public render() {
		return [
			<Text key="header" paragraph>You selected: {EXAMPLE_DATA[this.state.selected]}</Text>,
			(
				<Panel key="suggest" withPadding={false} withMargin={false}>
					<Group vertical>
						<Select value={EXAMPLE_DATA[0]} selected={this.state.selected === 0} onSelect={this.select(0)}>First value: {EXAMPLE_DATA[0]}</Select>
						<Select value={EXAMPLE_DATA[1]} selected={this.state.selected === 1} onSelect={this.select(1)}>Second value: {EXAMPLE_DATA[1]}</Select>
						<Select value={EXAMPLE_DATA[2]} selected={this.state.selected === 2} onSelect={this.select(2)}>Third value: {EXAMPLE_DATA[2]}</Select>
					</Group>
				</Panel>
			),
		]
	}
}

export default () => (
	<View>
		<Text header large>Default set of Select components</Text>

		<SelectSimple />
	</View>
)