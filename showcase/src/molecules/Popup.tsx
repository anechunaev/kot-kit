import * as React from 'react';

import {
	Popup,
	View,
	Panel,
	Link,
} from 'kot-kit';

const LinkWithPopup = ({ text, ...rest }: any) => (
	<Popup
		targetElement={(
			<Link pseudo>{text}</Link>
		)}
		{...rest}
	/>
);

class PopupShowcase extends React.Component<{}> {
	private scrollView: HTMLElement | null = null;

	public componentDidMount() {
		if (this.scrollView) {
			this.scrollView.scrollTop = 360;
			this.scrollView.scrollLeft = 305;
		}
	}

	public render() {
		return (
			<View>
				<div
					ref={ (n) => this.scrollView = n }
					style={{
						overflow: 'scroll',
						border: '1px solid #ccc',
						width: 300,
						height: 300,
						marginBottom: 20,
					}}
				>
					<div style={{ width: '900px' }}>
						<div key="target" style={{ margin: '500px auto', textAlign: 'center', width: '100px' }}>
							<Popup
								targetElement={(
										<Link pseudo>Hello popup!</Link>
								)}
							>
								Lorem ipsum dolor sit amet
							</Popup>
						</div>
					</div>
				</div>

				<Panel withMargin={false} withShadow={false}>
					<LinkWithPopup position="top" text="Position top">
						Lorem ipsum dolor sit amet
					</LinkWithPopup>
				</Panel>

				<Panel withMargin={false} withShadow={false}>
					<LinkWithPopup position="right" text="Position right">
						Lorem ipsum dolor sit amet
					</LinkWithPopup>
				</Panel>

				<Panel withMargin={false} withShadow={false}>
					<LinkWithPopup position="left" text="Position left">
						Lorem ipsum dolor sit amet
					</LinkWithPopup>
				</Panel>

				<Panel withMargin={false} withShadow={false}>
					<LinkWithPopup warning text="Warning">
						Lorem ipsum dolor sit amet
					</LinkWithPopup>
				</Panel>

				<Panel withMargin={false} withShadow={false}>
					<LinkWithPopup danger text="Danger">
						Lorem ipsum dolor sit amet
					</LinkWithPopup>
				</Panel>

				<Panel withMargin={false} withShadow={false}>
					<LinkWithPopup open position="left" text="Open by default">
						Lorem ipsum dolor sit amet
					</LinkWithPopup>
				</Panel>

				<Panel withMargin={false} withShadow={false}>
					<LinkWithPopup open disabled warning position="right" text="Can't close" withCloseButton>
						Lorem ipsum dolor sit amet
					</LinkWithPopup>
				</Panel>

				<Panel withMargin={false} withShadow={false}>
					<LinkWithPopup withCloseButton text="With «Clsoe» button">
						Lorem ipsum dolor sit amet
					</LinkWithPopup>
				</Panel>
			</View>
		);
	}
}

export default PopupShowcase;