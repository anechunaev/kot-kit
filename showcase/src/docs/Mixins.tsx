import * as React from 'react';
import {
	View,
	Text,
	withTheme,
	withStyles,
} from 'kot-kit';

function iterate(obj: any, callback: (key: string, value: any) => void): void {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			callback(key, obj[key]);
		}
	}
}

const getMixinComponent = (style: any) => withStyles(style)(({ classes, type = "div", ...rest }: any) => (
	React.createElement(type, {
		className: classes.cn,
		style: {
			width: 100,
			height: 100,
			borderRadius: 5,
		},
		...rest
	})
));

const getMixinListExample = (theme: any, mixinList: any, props = {}) => {
	const children: any[] = [];
	let key = 0;
	iterate(mixinList, (mixinName, mixin) => {
		const style = () => ({ cn: mixin(theme) });
		const MixinComponent = getMixinComponent(style);
		children.push(
			<View width={ 1 / 6 } key={++key}>
				<div style={{ margin: '0 10px 20px 0' }}>
					<Text header small>{mixinName}</Text>
					<MixinComponent {...props} />
				</div>
			</View>
		);
	});

	return children;
};

export default withTheme(({ theme }: any) => (
	<View>
		<Text header large>Mixins</Text>
		<Text header>Clickable</Text>
		<View>{getMixinListExample(theme, theme.mixins.clickable)}</View>
		<Text header>Editable</Text>
		<View>{getMixinListExample(theme, theme.mixins.editable, { type: "input" })}</View>
		<Text header>Selectable</Text>
		<View>{getMixinListExample(theme, theme.mixins.selectable)}</View>
		<Text header>Passive</Text>
		<View>{getMixinListExample(theme, theme.mixins.passive)}</View>
	</View>
));