import * as React from 'react';
import { View, Text, withKeyEventHandler } from 'kot-kit';
import * as readme from '../../../lib/withKeyEventHandler/readme.md';
import MarkdownViewer from '../MarkdownViewer';

const Handler = withKeyEventHandler(({ keyName }: {keyName: string}) => <Text paragraph>You pressed: {keyName}</Text>);

class EventRenderer extends React.Component<any, any> {
	constructor(props: any) {
		super(props);

		this.state = {
			key: 'none'
		};
	}

	public render() {
		return (
			<View>
				<Text header large>Arrow keys handler</Text>
				<Text paragraph>Open console to check if handler executes correctly.</Text>
				<Handler
					keyName={this.state.key}
					handlers={[
						{ key: 'ArrowUp', callback: (e: KeyboardEvent) => { this.setState({ key: 'ArrowUp' }); console.log(e); } },			// tslint:disable-line
						{ key: 'ArrowDown', callback: (e: KeyboardEvent) => { this.setState({ key: 'ArrowDown' }); console.log(e); } },		// tslint:disable-line
						{ key: 'ArrowLeft', callback: (e: KeyboardEvent) => { this.setState({ key: 'ArrowLeft' }); console.log(e); } },		// tslint:disable-line
						{ key: 'ArrowRight', callback: (e: KeyboardEvent) => { this.setState({ key: 'ArrowRight' }); console.log(e); } },	// tslint:disable-line
					]}
				/>

				<MarkdownViewer source={readme} />
			</View>
		)
	}
}

export default () => <EventRenderer />