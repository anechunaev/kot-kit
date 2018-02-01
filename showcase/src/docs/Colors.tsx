import * as React from 'react';
import {
	View,
	Text,
	withTheme,
} from 'kot-kit';

function iterate(obj: any, callback: (key: string, value: any) => void): void {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			callback(key, obj[key]);
		}
	}
}

const getColorList = (colors: any) => {
	const children: any[] = [];

	iterate(colors, (colorType, colorList) => {
		children.push(<View><Text header>{colorType}</Text></View>);
		iterate(colorList, (colorName, color) => {
			children.push(
				<View width={ 1 / 6 }>
					<div style={{ margin: '0 10px 20px 0' }}>
						<Text header small>{colorName}</Text>
						<div style={{
							width: 100,
							height: 100,
							background: color,
							borderRadius: 5,
							border: '1px solid rgba(0, 0, 0, .2)',
						}} />
					</div>
				</View>
			);
		});
	});

	return children;
}

export default withTheme(({ theme }: any) => (
	<View>
		<Text header large>Colors</Text>
		<View>{ getColorList(theme.colors) }</View>
	</View>
));