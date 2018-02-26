import * as React from 'react';
import {
	View,
	Panel,
	Text,
	Calendar,
} from 'kot-kit';
import * as readme from '../../../lib/Calendar/readme.md';
import MarkdownViewer from '../MarkdownViewer';
import Knobs from '../Knobs';

export interface IState {
	selectedDay: Date | null;
	range: {
		from: Date | null,
		to: Date | null,
		entered: Date | null,
	};
}

const today = new Date();

class CalendarShowcase extends React.Component<{}, IState> {
	constructor(props: any) {
		super(props);

		this.state = {
			selectedDay: null,
			range: {
				from: null,
				to: null,
				entered: null,
			},
		};
	}

	private handleDayClick = (day: Date, { disabled, selected }: any) => {
		if (!disabled) {
			this.setState({
				selectedDay: selected ? null : day,
			});
		}
	}

	private isSelectingFirstDay = (from: Date | null, to: Date | null, day: Date) => {
		const isBeforeFirstDay = from && day < from;
		const isRangeSelected = from && to;
		return !from || isBeforeFirstDay || isRangeSelected;
	}

	private handleRangeDayClick = (day: Date) => {
		const { range: { from, to } } = this.state;
		if (from && to && day >= from && day <= to) {
			this.handleResetClick();
			return;
		}
		if (this.isSelectingFirstDay(from, to, day)) {
			this.setState({
				...this.state,
				range: {
					from: day,
					to: null,
					entered: null,
				}
			});
		} else {
			this.setState({
				...this.state,
				range: {
					from: this.state.range.from,
					to: day,
					entered: day,
				}
			});
		}
	}

	private handleDayMouseEnter = (day: Date) => {
		const { range: { from, to } } = this.state;
		if (!this.isSelectingFirstDay(from, to, day)) {
			this.setState({
				...this.state,
				range: {
					from: this.state.range.from,
					to: this.state.range.to,
					entered: day,
				}
			});
		}
	}

	private handleResetClick = () => {
		this.setState({
			...this.state,
			range: {
				from: null,
				to: null,
				entered: null,
			}
		});
	}

	public render() {
		const { range: { from, entered } } = this.state;
		const disabledRangeDays = { before: this.state.range.from };
		const selectedRangeDays = [from, { from, to: entered }];
	
		return (
			<View>
				<Panel withShadow={false}>
					<Text header large>Default calendar</Text>
					<Text paragraph>
						<Knobs>
							{({ select, number, boolean }: any) => (
								<Calendar
									locale={select('Locale', { ru: 'ru', en: 'en' }, 'ru')}
									numberOfMonths={number('Number of months', 1)}
									disabledDays={boolean('Show disabled days', false) ? [
										{ before: today, after: new Date((new Date()).setDate(today.getDate() + 28)) },
										today,
									] : []}
									selectedDays={this.state.selectedDay}
									onDayClick={this.handleDayClick}
								/>
							)}
						</Knobs>
					</Text>
				</Panel>

				<Panel withShadow={false}>
					<Text header large>Select date range</Text>
					<Text paragraph>
						<Calendar
							selectRange
							modifiers={{
								weekend: { daysOfWeek: [0, 6] },
								start: from,
								end: entered,
							}}
							numberOfMonths={2}
							fromMonth={from}
							selectedDays={selectedRangeDays}
							disabledDays={disabledRangeDays}
							onDayClick={this.handleRangeDayClick}
							onDayMouseEnter={this.handleDayMouseEnter}
						/>
					</Text>
				</Panel>

				<MarkdownViewer source={readme} />
			</View>
		);
	}
}

export default CalendarShowcase;