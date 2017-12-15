import * as React from 'react';
import { IProps } from '../Icon';

export type Icon = React.ReactElement<IProps>;
export interface IWithIcons {
	iconSlotLeft?: Icon;
	iconSlotRight?: Icon;
}
type Icons = Icon[] | Icon;

const getIconsSlots = (Icons: Icons) => {
	const slots: Dictionary<Icon> = {};

	if (Array.isArray(Icons)) {
		Icons.map((Icon) => {
			slots[getIconSlotName(Icon)] = Icon;
		});

		return slots;
	}

	slots[getIconSlotName(Icons)] = Icons;
	return slots;
}

const getIconSlotName = (Icon: Icon) => {
	if (Icon.props.slot === 'right') {
		return 'iconSlotRight';
	}

	return 'iconSlotLeft';
};

export default (Icons: Icons) =>
	(Component: React.ComponentType<any>) =>
	(props: any) => <Component {...getIconsSlots(Icons)} {...props} />