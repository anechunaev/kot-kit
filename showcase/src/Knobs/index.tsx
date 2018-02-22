import * as React from 'react';
import {
	KnobBoolean,
	KnobText,
	KnobNumber,
	KnobObject,
	KnobArray,
	KnobSelect,
} from './lib';
import {
	StyleContextProvider,
	withStyles,
	Panel,
	Text,
} from 'kot-kit';
import style from './styles';

export interface IProps {
	children: (options: Dictionary<any>) => React.ReactElement<any>;
	classes: Dictionary<any>;
}

class Knobs extends React.Component<IProps, Dictionary<any>> {
	constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	private updateStateBoolean = (knob: string) => () => {
		this.setState((prevState) => ({
			[knob]: {
				type: "boolean",
				value: !prevState[knob].value,
			},
		}));
	};

	private updateStateText = (knob: string) => (e: React.SyntheticEvent<HTMLInputElement>) => {
		this.setState({
			[knob]: {
				type: "string",
				value: e.currentTarget.value,
			},
		});
	};

	private updateStateNumber = (knob: string) => (e: React.SyntheticEvent<HTMLInputElement>) => {
		this.setState({
			[knob]: {
				type: "number",
				value: +e.currentTarget.value,
			},
		});
	};

	private updateStateObject = (knob: string) => (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
		this.setState({
			[knob]: {
				type: "object",
				value: JSON.parse(e.currentTarget.value),
			},
		});
	};

	private updateStateArray = (knob: string) => (e: React.SyntheticEvent<HTMLInputElement>) => {
		this.setState({
			[knob]: {
				type: "array",
				value: e.currentTarget.value.split(this.state[knob].separator),
				separator: this.state[knob].separator
			},
		});
	};

	private updateStateSelect = (knob: string) => (e: React.SyntheticEvent<HTMLSelectElement>) => {
		const innerKey = e.currentTarget.value;
		this.setState({
			[knob]: {
				type: "select",
				list: this.state[knob].list,
				key: innerKey,
				value: this.state[knob].list[innerKey],
			},
		});
	};

	private getKnobs = () => {
		const result: React.ReactElement<any>[] = [];
		let index = 0;

		for (const knob in this.state) {
			if (this.state.hasOwnProperty(knob)) {
				switch (this.state[knob].type) {
				case 'boolean':
					result.push(
						<KnobBoolean
							key={index}
							label={knob}
							value={this.state[knob].value}
							onClick={this.updateStateBoolean(knob)}
						/>
					);
					break;
				case 'string':
					result.push(
						<KnobText
							key={index}
							label={knob}
							value={this.state[knob].value}
							onChange={this.updateStateText(knob)}
						/>
					);
					break;
				case 'number':
					result.push(
						<KnobNumber
							key={index}
							label={knob}
							value={this.state[knob].value}
							onChange={this.updateStateNumber(knob)}
						/>
					);
					break;
				case 'object':
					result.push(
						<KnobObject
							key={index}
							label={knob}
							value={this.state[knob].value}
							onChange={this.updateStateObject(knob)}
						/>
					);
					break;
				case 'array':
					result.push(
						<KnobArray
							key={index}
							label={knob}
							value={this.state[knob].value}
							onChange={this.updateStateArray(knob)}
						/>
					);
					break;
				case 'select':
					result.push(
						<KnobSelect
							key={index}
							value={this.state[knob].list[this.state[knob].key]}
							label={knob}
							list={this.state[knob].list}
							onChange={this.updateStateSelect(knob)}
						/>
					);
					break;
				default:
					result.push(
						<div key={index}>{knob}: {(this.state[knob].value).toString()} (undefined knob type)</div>
					);
				}

				index++;
			}
		}
		return result;
	};

	private knobBoolean = (label: string, defaultValue: boolean): boolean => {
		if (typeof this.state[label] === 'undefined') {
			this.setState((prevState) => ({
				...prevState,
				[label]: {
					type: 'boolean',
					value: defaultValue,
				}
			}));

			return defaultValue;
		}

		return this.state[label].value;
	};

	private knobText = (label: string, defaultValue: string): string => {
		if (typeof this.state[label] === 'undefined') {
			this.setState((prevState) => ({
				...prevState,
				[label]: {
					type: 'string',
					value: defaultValue,
				}
			}));

			return defaultValue;
		}

		return this.state[label].value;
	};

	private knobNumber = (label: string, defaultValue: number): number => {
		if (typeof this.state[label] === 'undefined') {
			this.setState((prevState) => ({
				...prevState,
				[label]: {
					type: 'number',
					value: defaultValue,
				}
			}));

			return defaultValue;
		}

		return this.state[label].value;
	};

	private knobObject = (label: string, defaultValue: Dictionary<any>): Dictionary<any> => {
		if (typeof this.state[label] === 'undefined') {
			this.setState((prevState) => ({
				...prevState,
				[label]: {
					type: 'object',
					value: defaultValue,
				}
			}));

			return defaultValue;
		}

		return this.state[label].value;
	};

	private knobArray = (label: string, array: any[], options: Dictionary<any> = {}): any[] => {
		if (typeof this.state[label] === 'undefined') {
			this.setState((prevState) => ({
				...prevState,
				[label]: {
					type: 'array',
					value: array,
					separator: options.separator || ',',
				}
			}));

			return array;
		}

		return this.state[label].value;
	};

	private knobSelect = (label: string, list: Dictionary<any>, defaultKey: string): any => {
		if (typeof this.state[label] === 'undefined') {
			this.setState((prevState) => ({
				...prevState,
				[label]: {
					type: 'select',
					value: list[defaultKey],
					key: defaultKey,
					list,
				}
			}));

			return list[defaultKey];
		}

		return this.state[label].value;
	};

	public render() {
		return (
			<div style={{ width: '100%' }}>
				<div style={{ width: '100%' }}>
					{this.props.children({
						boolean: this.knobBoolean,
						text: this.knobText,
						number: this.knobNumber,
						object: this.knobObject,
						array: this.knobArray,
						select: this.knobSelect,
					})}
				</div>
				<Panel className={this.props.classes.wrapper} withShadow={false}>
					<Text header>Knobs</Text>
					<StyleContextProvider secondary>
						{this.getKnobs()}
					</StyleContextProvider>
				</Panel>
			</div>
		)
	}
};

export default withStyles(style)(Knobs);