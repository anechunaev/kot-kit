# Description

# Usage
```javascript
import { Calendar, Text, Panel } from 'kot-kit';

export default () => (
	<Panel withShadow={false}>
		<Text header large>Holidays (day modifiers) and default month</Text>
		<Text paragraph>
			<Calendar
				month={new Date(2018, 5)}
				modifiers={{
					weekend: { daysOfWeek: [0, 6] },
					holiday: [new Date(2018, 5, 11), new Date(2018, 5, 12)],
					workday: new Date(2018, 5, 9),
				}}
			/>
		</Text>
	</Panel>
);
```

# Props