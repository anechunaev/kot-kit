function pad(n: number): string {
	return n < 10 ? '0' + n : n.toString();
}

export const simpleFormatDate = {
	ru: (d: Date) => `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`,
	en: (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
};

export const simpleParseDateString = {
	ru: (s: string) => {
		if (!/^\d{2}\.\d{2}\.\d{4}$/.test(s)) {
			return null;
		}

		const d = new Date(0);
		const [ DD, MM, YYYY ] = s.split('.');
		d.setDate(+DD);
		d.setMonth(+MM - 1);
		d.setFullYear(+YYYY);
		d.setTime( d.getTime() + d.getTimezoneOffset() * 60000 );
		return d;
	},
	en: (s: string) => {
		if (!/^\d{4}\-\d{2}\-\d{2}$/.test(s)) {
			return null;
		}

		const d = new Date(0);
		const [ YYYY, MM, DD ] = s.split('-');
		d.setDate(+DD);
		d.setMonth(+MM - 1);
		d.setFullYear(+YYYY);
		d.setTime( d.getTime() + d.getTimezoneOffset() * 60000 );
		return d;
	},
}

export function resetTimeToZero(date: Date): Date {
	date.setMilliseconds(0);
	date.setSeconds(0);
	date.setMinutes(0);
	date.setHours(0);

	return date;
}

export function getTodayDate(): Date {
	return resetTimeToZero(new Date());
}

export function isBeforeDate(dateA: Date, dateB: Date): boolean {
	return resetTimeToZero(dateA) < resetTimeToZero(dateB);
}

export function isAfterDate(dateA: Date, dateB: Date): boolean {
	return resetTimeToZero(dateA) > resetTimeToZero(dateB);
}

export function isToday(date: Date): boolean {
	return resetTimeToZero(date).toUTCString() === getTodayDate().toUTCString();
}

export function getDatesForMonth(monthNumber: number): Date[] {
	const dates: Date[] = [];

	const firstDate = getTodayDate();
	firstDate.setDate(1);
	firstDate.setMonth(monthNumber);

	let prevDate = new Date(firstDate);

	while(prevDate.getMonth() === monthNumber) {
		dates.push(prevDate);

		prevDate = new Date(prevDate.setDate(prevDate.getDate() + 1));
	}

	return dates;
}