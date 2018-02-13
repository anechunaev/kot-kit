import * as React from 'react';

import {
	Popup,
	View,
	Link,
} from 'kot-kit';

class PopupShowcase extends React.Component<{}> {
	private scrollView: HTMLElement | null;

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
					}}
				>
					<div style={{ width: '900px' }}>
						<Popup danger>
							<div key="target" style={{ margin: '500px auto', textAlign: 'center', width: '100px' }}>
								<Link pseudo>Hello popup!</Link>
							</div>
						</Popup>
					</div>
				</div>

				<View>
					<Popup position="top">
						<Link pseudo>Position top</Link>
					</Popup>
				</View>

				<View>
					<Popup position="right">
						<Link pseudo>Position right</Link>
					</Popup>
				</View>

				<View>
					<Popup position="left">
						<Link pseudo>Position left</Link>
					</Popup>
				</View>

				<View>
					<Popup warning>
						<Link pseudo>Warning</Link>
					</Popup>
				</View>

				<View>
					<Popup danger>
						<Link pseudo>Danger</Link>
					</Popup>
				</View>
			</View>
		);
	}
}

export default PopupShowcase;