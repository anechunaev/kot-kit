import * as React from 'react';
import { IProps } from '../Icon';

export type IIcon = React.ReactElement<IProps>;
export interface IWithIcons {
	iconSlotLeft?: IIcon;
	iconSlotRight?: IIcon;
}
export type IIcons = IIcon[] | IIcon;

const getIconsSlots = (Icons: IIcons) => {
	const slots: Dictionary<IIcon> = {};

	if (Array.isArray(Icons)) {
		Icons.map((Icon) => {
			slots[getIconSlotName(Icon)] = Icon;
		});

		return slots;
	}

	slots[getIconSlotName(Icons)] = Icons;
	return slots;
}

const getIconSlotName = (Icon: IIcon) => {
	if (Icon.props.slot === 'right') {
		return 'iconSlotRight';
	}

	return 'iconSlotLeft';
};

export default (Icons: IIcons) =>
	(Component: React.ComponentType<any>) =>
	(props: any) => <Component {...getIconsSlots(Icons)} {...props} />