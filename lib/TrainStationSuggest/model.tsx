import * as React from 'react';
import { throttle } from 'lodash-es';
import { sendGetRequest } from '../dataHelpers';
import * as Constants from './constants';
import { IOuterProps as IViewProps, IInnerProps as IViewInnerProps } from './view';

const sendGetRequestThrottled = throttle(sendGetRequest, Constants.DEFAULT_THROTTLE);


export interface IOuterProps {
	url?: string;
	visible?: boolean;
}
export interface IInnerProps extends IViewProps, IOuterProps {
	trainStationSuggestInnerComponent: React.ComponentType<IViewInnerProps>
}
export interface IState {
	items: Array<{ id: string | number, value: string }>;
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
		const { trainStationSuggestInnerComponent, ...rest } = this.props;
		const View = trainStationSuggestInnerComponent;

		return (
			<View
				{...rest}
				items={this.state.items}
			/>
		);
	}
}

export default (View: React.ComponentType<IViewInnerProps>) =>
	(props: IViewProps & IOuterProps) => <TrainStationSuggestModel {...props} trainStationSuggestInnerComponent={View} />