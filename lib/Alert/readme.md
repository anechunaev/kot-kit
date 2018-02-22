# Description
Basic alert component

# Usage
```javascript
import { Alert, Text } from 'kot-kit';

export default props => (
	<Alert>
		<Text header large>Hello world!</Text>
		<Text paragraph>Lorem ipsum dolor sit amet</Text>
	</Alert>
)
```

# Props
| Name | Required | Type | Default value | Description |
|---|:-:|---|---|---|
| withMargin || `boolean` | `true` | Включает/выключает отступы |