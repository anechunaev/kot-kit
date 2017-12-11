import * as React from 'react';
import { throttle } from 'lodash-es';
import { sendGetRequest } from '../dataHelpers';
import * as Constants from './constants';
import { IInnerProps as IViewProps } from './view';
import { IProps } from './index';

const sendGetRequestThrottled = throttle(sendGetRequest, Constants.DEFAULT_THROTTLE);


export interface IOuterProps { // @TODO: extends IEditableProps
	value?: string;
	url?: string;
	visible?: boolean;
	defaultValue?: string;
}
export interface IInnerProps extends IOuterProps {
	trainStationSuggestInnerComponent: React.ComponentType<IViewProps>
}
export interface IState {
	items: { id: string | number, value: string }[];
}

class TrainStationSuggestModel extends React.Component<IInnerProps, IState> {
	public static defaultProps = {
		value: '',
		url: Constants.DEFAULT_URL,
		visible: false,
	};

	constructor(props: IInnerProps) {
		super(props);

		this.state = {
			items: Constants.DEFAULT_ITEMS,
		};
	}

	public componentWillReceiveProps(nextProps: IInnerProps) {
		if (this.props.value === nextProps.value) {
			return;
		}

		if (nextProps.value === '') {
			this.setState({
				items: Constants.DEFAULT_ITEMS
			});
			return;
		}

		if (nextProps.value && nextProps.visible && nextProps.url) {
			sendGetRequestThrottled(nextProps.url, { name: nextProps.value }, (data) => {
				this.setState({
					items: JSON.parse(data)
				})
			});
		}
	}

	public shouldComponentUpdate(nextProps: IInnerProps, nextState: IState) {
		if (this.props.visible === nextProps.visible && !this.props.visible) {
			return false;
		}

		return this.props.value !== nextProps.value
			|| this.state.items !== nextState.items
			|| this.props.visible !== nextProps.visible;
	}

	public render() {
		const { trainStationSuggestInnerComponent } = this.props;
		const View = trainStationSuggestInnerComponent;

		return (
			<View
				{...this.props}
				items={this.state.items}
			/>
		);
	}
}

export default (View: React.ComponentType<IViewProps>) =>
	(props: IProps) => <TrainStationSuggestModel {...props} trainStationSuggestInnerComponent={View} />