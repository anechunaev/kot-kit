import * as React from 'react';

export interface IHandlerProperty {
	event?: 'keyup' | 'keydown' | 'keypress';
	key?: string;
	keyCode?: number;
	callback: (e: KeyboardEvent) => void;
}

export interface IKeyHandlerProps {
	handlers: IHandlerProperty[];
	node?: HTMLElement | Window;
}

export interface IProps extends IKeyHandlerProps {
	keyEventHandlerInnerComponent: React.ComponentType<any>;
}

type Handler = {
	[key: string]: IHandlerProperty[]
}

// IE 11 hacks
const keysDictionary: Dictionary<string> = {
	'Down': 'ArrowDown',
	'Up': 'ArrowUp',
	'Left': 'ArrowLeft',
	'Right': 'ArrowRight',
	'Spacebar': ' ',
	'Esc': 'Escape'
};

class WithKeyEventHandler extends React.Component<IProps> {
	private handlers: Handler = {};
	private rootNode: HTMLElement | Window = window;

	constructor(props: IProps) {
		super(props);

		const { handlers } = props;
		handlers.forEach((handler) => {
			const eventName = handler.event || 'keyup';
			this.handlers[eventName] = this.handlers[eventName] || [];
			this.handlers[eventName].push(handler);
		});
	}

	private eventHandler = (e: KeyboardEvent) => {
		this.handlers[e.type].forEach((handler) => {
			if (
				e.key === handler.key
				|| keysDictionary[e.key] === handler.key
				|| e.keyCode === handler.keyCode
			) {
				handler.callback(e);
			}
		})
	}

	public componentDidMount() {
		this.rootNode = !!this.props.node ? this.props.node : window;

		for (const eventName in this.handlers) {
			if (this.handlers.hasOwnProperty(eventName)) {
				this.rootNode.addEventListener(eventName, this.eventHandler as EventListener)
			}
		}
	}

	public componentWillUnmount() {
		for (const eventName in this.handlers) {
			if (this.handlers.hasOwnProperty(eventName)) {
				this.rootNode.removeEventListener(eventName, this.eventHandler as EventListener);
			}
		}
	}

	public render() {
		const { keyEventHandlerInnerComponent, handlers, ...rest } = this.props;
		const Component = keyEventHandlerInnerComponent;

		return (
			<Component {...rest} />
		)
	}
}

export default (Component: React.ComponentType<any>) => (props: any) => <WithKeyEventHandler keyEventHandlerInnerComponent={Component} {...props} />