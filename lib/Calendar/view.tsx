import * as React from 'react';
import Calendar from 'react-day-picker';
import cn from 'classnames';
import Icon from '../Icon';

export interface IOuterProps { // @TODO вынести из компонента
	locale: "ru" | "en";
	modifiers?: Dictionary<any>; // @TODO описать правильный тип
	hideNavigation?: boolean;
	selectRange?: boolean;
}

export interface IInnerProps extends IOuterProps {
	classes: Dictionary<string>;
	className?: string;
}

const WEEKDAYS_SHORT: Dictionary<[string, string, string, string, string, string, string]> = {
	ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
};
const MONTHS: Dictionary<[string, string, string, string, string, string, string, string, string, string, string, string]> = {
	ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};
const WEEKDAYS_LONG: Dictionary<[string, string, string, string, string, string, string]> = {
	ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
	en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};
const FIRST_DAY_OF_WEEK: Dictionary<number> = {
	ru: 1,
	en: 0,
};
const LABELS: Dictionary<any> = {
	ru: { nextMonth: 'Следующий месяц', previousMonth: 'Предыдущий месяц', today: 'Сегодня' },
	en: { nextMonth: 'Next month', previousMonth: 'Previous month', today: 'Today' },
};
const MODIFIERS = {
	weekend: { daysOfWeek: [0, 6] },
};


const Weekday = ({ weekday, className, locale }: any) => (
	<div className={cn(className, {
		'DayPicker-Weekday--weekend': weekday === 0 || weekday === 6,
	})}>
		{WEEKDAYS_SHORT[locale][weekday]}
	</div>
);

const Navbar = ({ onPreviousClick, onNextClick, className }: any) => (
	<div className={className}>
		<span onClick={() => onPreviousClick()} className="DayPicker-NavButton DayPicker-NavButton--prev">
			<Icon size={15} name="arrow-simple" />
		</span>
		<span onClick={() => onNextClick()} className="DayPicker-NavButton DayPicker-NavButton--next">
			<Icon size={15} name="arrow-simple" />
		</span>
	</div>
);

class CalendarView extends React.Component<IInnerProps> {
	public static defaultProps = {
		locale: "ru",
		modifiers: MODIFIERS,
		hideNavigation: false,
		selectRange: false,
	};

	public render() {
		return (
			<Calendar
				className={cn({ 'DayPicker-Range': this.props.selectRange })}
				weekdayElement={<Weekday />}
				navbarElement={this.props.hideNavigation ? <noscript /> : <Navbar />}
				months={MONTHS[this.props.locale]}
				weekdaysLong={WEEKDAYS_LONG[this.props.locale]}
				weekdaysShort={WEEKDAYS_SHORT[this.props.locale]}
				firstDayOfWeek={FIRST_DAY_OF_WEEK[this.props.locale]}
				labels={LABELS[this.props.locale]}
				modifiers={this.props.modifiers}
				{...this.props}
			/>
		);
	}
}

export default CalendarView;