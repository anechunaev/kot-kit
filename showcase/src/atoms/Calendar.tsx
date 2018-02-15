import * as React from 'react';
import {
	View,
	Text,
	Calendar,
} from 'kot-kit';

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
				<View width={1 / 2}>
					<Text header large>Default calendar</Text>
					<Text paragraph>
						<Calendar
							selectedDays={this.state.selectedDay}
							onDayClick={this.handleDayClick}
						/>
					</Text>
				</View>

				<View width={1 / 2}>
					<Text header large>Localization</Text>
					<Text paragraph>
						<Calendar
							locale="en"
							selectedDays={this.state.selectedDay}
							onDayClick={this.handleDayClick}
						/>
					</Text>
				</View>

				<View width={1 / 2}>
					<Text header large>Disabled days</Text>
					<Text paragraph>
						<Calendar
							disabledDays={[
								{ before: today, after: new Date((new Date()).setDate(today.getDate() + 28)) },
								today,
							]}
							selectedDays={this.state.selectedDay}
							onDayClick={this.handleDayClick}
						/>
					</Text>
				</View>

				<View width={1 / 2}>
					<Text header large>Holidays (day modifiers) and default month</Text>
					<Text paragraph>
						<Calendar
							month={new Date(2018, 5)}
							modifiers={{
								weekend: { daysOfWeek: [0, 6] },
								holiday: [new Date(2018, 5, 11), new Date(2018, 5, 12)],
								workday: new Date(2018, 5, 9),
							}}
							selectedDays={this.state.selectedDay}
							onDayClick={this.handleDayClick}
						/>
					</Text>
				</View>

				<Text header large>Two months calendar</Text>
				<Text paragraph>
					<Calendar
						numberOfMonths={2}
						selectedDays={this.state.selectedDay}
						onDayClick={this.handleDayClick}
					/>
				</Text>

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
			</View>
		);
	}
}

export default CalendarShowcase;