import * as React from 'react';
import Suggest, { IProps as ISuggestProps } from '../Suggest';
import Select from '../Select';
import { DEFAULT_SUGGEST_LENGTH } from './constants';

export interface IOuterProps extends ISuggestProps {
	length?: number;
}
export interface IInnerProps extends IOuterProps {
	items: Array<{ value: string, id: string | number }>;
}

class TrainStationSuggestView extends React.PureComponent<IInnerProps> {
	public static defaultProps = {
		length: DEFAULT_SUGGEST_LENGTH,
	};

	public render() {
		const { items, length, ...rest } = this.props;
		return (
			<Suggest {...rest}>
				{items.slice(0, length).map((item, index) => (
					<Select key={index} value={item.value} hiddenValue={item.id + ''}>{item.value}</Select>
				))}
			</Suggest>
		)
	}
}

export default TrainStationSuggestView;