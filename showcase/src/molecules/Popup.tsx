import * as React from 'react';

import {
	Popup,
	View,
	Link,
} from 'kot-kit';

export default () => (
	<View>
		<div style={{
			overflow: 'scroll',
			border: '1px solid #ccc',
			width: 300,
			height: 300,
		}}>
			<Popup>
				<div style={{ margin: '500px 0', textAlign: 'center' }}>
					<Link pseudo>Hello popup!</Link>
				</div>
			</Popup>
		</div>
	</View>
);